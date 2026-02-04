import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const appStoreUrl = "https://apps.apple.com/in/app/3ms/id6745809435";
        const playStoreUrl = "https://play.google.com/store/apps/details?id=com.firstlogicmetalab.threems";

        // Get the current path and query params to pass to the app
        const path = window.location.pathname;
        const search = window.location.search;
        const deepLinkPath = `${path}${search}`.replace(/^\//, ''); // e.g. "store?storeId=..."

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // iOS Redirection: Try scheme first, fallback to App Store after a delay
            const iosDeepLink = `threems://${deepLinkPath}`;
            window.location.href = iosDeepLink;

            const timeout = setTimeout(() => {
                window.location.href = appStoreUrl;
            }, 2500);

            return () => clearTimeout(timeout);
        } else if (/android/i.test(userAgent)) {
            // Android Redirection: Use Intent for robust redirect and auto-fallback
            const androidIntent = `intent://${deepLinkPath}#Intent;scheme=threems;package=com.firstlogicmetalab.threems;S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;
            window.location.href = androidIntent;
        } else {
            // Desktop or unknown: Redirect to 'Get App' page
            navigate('/get-app');
        }
    }, [navigate]);

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
        }}>
            <div style={{ textAlign: 'center' }}>
                <img src="/3msLOGO-croped.png" alt="3ms Logo" style={{ width: '80px', marginBottom: '20px' }} />
                <h2 style={{ fontSize: '1.2rem', fontWeight: '500', color: '#666' }}>Redirecting to App Store...</h2>
            </div>
        </div>
    );
};

export default AppRedirect;
