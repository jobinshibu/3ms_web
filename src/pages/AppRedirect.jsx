import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const appStoreUrl = "https://apps.apple.com/in/app/3ms/id6745809435";
        const playStoreUrl = "https://play.google.com/store/apps/details?id=com.firstlogicmetalab.threems";

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // iOS Redirection
            window.location.href = appStoreUrl;
        } else if (/android/i.test(userAgent)) {
            // Android Redirection
            window.location.href = playStoreUrl;
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
                <img src="/3msLOGO-croped.png" alt="3MS Logo" style={{ width: '80px', marginBottom: '20px' }} />
                <h2 style={{ fontSize: '1.2rem', fontWeight: '500', color: '#666' }}>Redirecting to App Store...</h2>
            </div>
        </div>
    );
};

export default AppRedirect;
