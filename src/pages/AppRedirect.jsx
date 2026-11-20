import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppRedirect = () => {
    const navigate = useNavigate();
    const [isIOS, setIsIOS] = useState(false);
    const appStoreUrl = "https://apps.apple.com/in/app/3ms/id6745809435";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.firstlogicmetalab.threems";

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const path = window.location.pathname;
        const search = window.location.search;
        const deepLinkPath = `${path}${search}`.replace(/^\//, '');

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // iOS: If the user lands here in Safari, do NOT automatically force
            // window.location.href = appStoreUrl on a timer. When the app opens natively via
            // Universal Links, background timers in Safari often still fire after 2-3 seconds,
            // abruptly stealing focus from the app to Safari/App Store.
            setIsIOS(true);
        } else if (/android/i.test(userAgent)) {
            // Android: Use https scheme in Intent to trigger App Links
            const domain = "3ms.co.in";
            const androidIntent = `intent://${domain}/${deepLinkPath}#Intent;scheme=https;package=com.firstlogicmetalab.threems;category=android.intent.category.BROWSABLE;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;

            window.location.href = androidIntent;
        } else {
            // Desktop or unknown: Redirect to 'Get App' page
            navigate('/get-app');
        }
    }, [navigate]);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            padding: '24px',
            boxSizing: 'border-box'
        }}>
            <img
                src="/3msLOGO-croped.png"
                alt="3ms Logo"
                style={{ width: '80px', marginBottom: '24px' }}
            />

            {isIOS ? (
                <div style={{ textAlign: 'center', maxWidth: '320px' }}>
                    <p style={{
                        fontSize: '16px',
                        color: '#4b5563',
                        marginBottom: '20px',
                        fontWeight: '500'
                    }}>
                        Opening 3ms...
                    </p>
                    <a
                        href={appStoreUrl}
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        Download on the App Store
                    </a>
                </div>
            ) : null}
        </div>
    );
};

export default AppRedirect;
