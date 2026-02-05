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
            // iOS: Try custom scheme
            window.location.href = `threems://${deepLinkPath}`;

            timer = setTimeout(() => {
                if (!document.hidden && !document.webkitHidden) {
                    window.location.replace(appStoreUrl);
                }
            }, 2500);

        } else if (/android/i.test(userAgent)) {
            // Android: Multi-scheme trial + Intent
            // First try common schemes
            window.location.href = `threems://${deepLinkPath}`;

            // Try 3ms:// as well just in case
            setTimeout(() => {
                if (!document.hidden && !document.webkitHidden) {
                    window.location.href = `3ms://${deepLinkPath}`;
                }
            }, 500);

            // Final fallback via Intent if still here after 1.5s
            timer = setTimeout(() => {
                if (!document.hidden && !document.webkitHidden) {
                    const androidIntent = `intent://${deepLinkPath}#Intent;scheme=threems;package=com.firstlogicmetalab.threems;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;
                    window.location.replace(androidIntent);
                }
            }, 1500);

        } else {
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
