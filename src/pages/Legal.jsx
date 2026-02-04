import React from 'react';

const LegalPage = ({ title, content }) => (
    <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <section className="container">
            <h1 style={{ marginBottom: '40px' }}>{title}</h1>
            <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow)',
                color: '#555',
                lineHeight: '1.8'
            }}>
                {content.map((p, i) => (
                    <p key={i} style={{ marginBottom: '20px' }}>{p}</p>
                ))}
            </div>
        </section>
    </div>
);

export const PrivacyPolicy = () => (
    <LegalPage
        title="Privacy Policy"
        content={[
            "3MS is a multi-functional, peer-to-peer marketplace platform owned by TRIPPLEM SOLUTIONS LLP. Our platform enables users to connect directly for financial transactions, event organizing, service discovery, and more.",
            "1. Information We Collect: Account Information: Name, email, phone number, date of birth, etc. Financial Information: UPI IDs, transaction history, payment info.",
            "2. How We Use Information: We use the collected data to provide, maintain, and improve our services, facilitate transactions, and ensure security.",
            "3. Data Sharing: We do not sell your personal data. We only share information when necessary to facilitate transactions or comply with legal obligations."
        ]}
    />
);

export const TermsConditions = () => (
    <LegalPage
        title="Terms & Conditions"
        content={[
            "This Terms of Service (“ToS”) agreement governs your use of the “3MS” mobile application provided by TRIPPLEM SOLUTIONS LLP.",
            "1. Introduction: By using the Service, you agree to these ToS. If you do not agree, do not use the Service.",
            "2. Service Description: 3MS is a multifunctional peer-to-peer platform designed for users to conduct direct UPI-based transactions and manage local activities.",
            "3. License to Use: 3MS grants you a limited, non-exclusive, non-transferable license to use the application for personal use."
        ]}
    />
);

export const RefundPolicy = () => (
    <LegalPage
        title="Subscription, Refund & Cancellation"
        content={[
            "This Subscription, Refund & Cancellation Agreement (“SRCA”) governs your subscription to paid features offered by the “3MS” mobile application.",
            "1. Subscription Terms: 3MS offers multiple subscription plans tailored to various user needs. Plans grant access to enhanced features within the app.",
            "2. Payment: You authorize 3MS or its payment processor to charge subscription fees to your selected payment method.",
            "3. Refund Policy: Subscription fees are generally non-refundable. However, we may consider refund requests on a case-by-case basis under specific circumstances."
        ]}
    />
);
