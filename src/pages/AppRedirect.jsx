import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const appStoreUrl = "https://apps.apple.com/in/app/3ms/id6745809435";
        const playStoreUrl = "https://play.google.com/store/apps/details?id=com.firstlogicmetalab.threems";

        const path = window.location.pathname;
        const search = window.location.search;
        const deepLinkPath = `${path}${search}`.replace(/^\//, '');

        let timer;
        const clearTimer = () => { if (timer) clearTimeout(timer); };

        const handleVisibilityChange = () => {
            if (document.hidden || document.webkitHidden) clearTimer();
        };

        window.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('webkitvisibilitychange', handleVisibilityChange);
        window.addEventListener('pagehide', clearTimer);

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // iOS: If the Universal Link didn't natively open the app and we landed here, 
            // the app is likely not installed or the user chose "Open in Safari".
            // Redirecting to the same https URL via JavaScript doesn't trigger Universal Links 
            // on iOS, and it instead causes an infinite page reload loop.
            
            // Timeout-based fallback for iOS to redirect to the App Store
            timer = setTimeout(() => {
                if (!document.hidden && !document.webkitHidden) {
                    window.location.href = appStoreUrl;
                }
            }, 2500);

        } else if (/android/i.test(userAgent)) {
            // Android: Use https scheme in Intent to trigger App Links
            const domain = "3ms.co.in";
            const androidIntent = `intent://${domain}/${deepLinkPath}#Intent;scheme=https;package=com.firstlogicmetalab.threems;category=android.intent.category.BROWSABLE;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;

            window.location.href = androidIntent;

        } else {
            // Desktop or unknown: Redirect to 'Get App' page
            navigate('/get-app');
        }

        return () => {
            clearTimer();
            window.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('webkitvisibilitychange', handleVisibilityChange);
            window.removeEventListener('pagehide', clearTimer);
        };
    }, [navigate]);

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
        }}>
            <img
                src="/3msLOGO-croped.png"
                alt="3ms Logo"
                style={{ width: '80px', opacity: 0.5 }}
            />
        </div>
    );
};

export default AppRedirect;
