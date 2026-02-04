import React from 'react';
import { Link } from 'react-router-dom';

const CTA = ({ showButton = true }) => {
    return (
        <section style={{ backgroundColor: '#1B5E20', padding: '100px 0', color: 'white' }}>
            <div className="container">
                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>Let’s Make Something Great<br />Work Together</h2>
                <p style={{ fontSize: '1.1rem', color: '#999', marginBottom: '40px', maxWidth: '800px', lineHeight: '1.6' }}>
                    We're here to collaborate and create solutions that matter. Together, we can bring ideas to life and simplify lives with 3ms.
                </p>
                {showButton && (
                    <Link to="/apply-now" className="btn" style={{
                        backgroundColor: '#fff',
                        color: '#000',
                        padding: '15px 40px',
                        fontSize: '1rem',
                        fontWeight: '700',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        Apply Now
                    </Link>
                )}
                <div style={{ height: '2px', backgroundColor: '#222', width: '100%', marginTop: '40px' }}></div>
            </div>
        </section>
    );
};

export default CTA;
