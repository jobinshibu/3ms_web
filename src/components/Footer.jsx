import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Smartphone, Instagram, MessageCircle, Facebook } from 'lucide-react';

const Footer = () => {
    const footerLinkStyle = { color: '#999', textDecoration: 'none' };

    return (
        <footer style={{ backgroundColor: '#0a0a0a', color: 'white', paddingTop: '80px', borderTop: '4px solid var(--primary)', overflowX: 'hidden' }}>
            <div className="container grid grid-4" style={{ gap: '40px', paddingBottom: '60px' }}>
                {/* Column 1: Intro */}
                <div style={{ minWidth: '0' }}>
                    <img src="/3msLOGO.png" alt="3ms Logo" style={{ height: '60px', width: 'auto', marginBottom: '20px', filter: 'brightness(0) invert(1)' }} />
                    <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        3ms ecosystem grows at the very small business and Kerala locally based levels to reach every door.
                    </p>
                </div>

                {/* Column 2: Contact */}
                <div style={{ minWidth: '0' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '25px', fontWeight: '700' }}>Contact</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#999', fontSize: '0.95rem' }}>
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <Phone size={18} style={{ color: 'var(--primary)', marginTop: '2px' }} />
                            <a href="tel:+919526476607" className="footer-contact-link">+919526476607</a>
                        </li>
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <MessageCircle size={18} style={{ color: '#25D366', marginTop: '2px' }} />
                            <a href="https://wa.me/919526476607" target="_blank" rel="noopener noreferrer" className="footer-contact-link">+919526476607</a>
                        </li>
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <Instagram size={18} style={{ color: '#E1306C', marginTop: '2px' }} />
                            <a href="https://www.instagram.com/3mssolutions?igsh=bGsxemk4NXh5MTVq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer-contact-link">@3mssolutions</a>
                        </li>
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <Facebook size={18} style={{ color: '#1877F2', marginTop: '2px' }} />
                            <a href="https://www.facebook.com/share/1XWDZFPitw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="footer-contact-link">3ms</a>
                        </li>
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <Mail size={18} style={{ color: 'var(--primary)', marginTop: '2px' }} />
                            <a href="mailto:info@3ms.co.in" className="footer-contact-link">info@3ms.co.in</a>
                        </li>
                    </ul>
                    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #222' }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                            <li><Link to="/privacy-policy" className="footer-link" style={{ color: '#666' }}>Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="footer-link" style={{ color: '#666' }}>Terms & Conditions</Link></li>
                            <li><Link to="/legal" className="footer-link" style={{ color: '#666' }}>Subscription, Refund & Cancellation</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 3: Quick Links */}
                <div style={{ minWidth: '0' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '25px', fontWeight: '700' }}>Quick Links</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#999', fontSize: '1rem' }}>
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/about" className="footer-link">About</Link></li>
                        <li><Link to="/features" className="footer-link">Features</Link></li>
                        <li><Link to="/user-guide" className="footer-link">User Guide</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 4: Address */}
                <div style={{ minWidth: '0' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '25px', fontWeight: '700' }}>Address</h3>
                    <a
                        href="https://maps.app.goo.gl/VhFAVXGSvK3Qu3td6?g_st=iw"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#999', fontSize: '0.95rem', lineHeight: '1.8', textDecoration: 'none', display: 'block' }}
                    >
                        TRIPPLEM SOLUTIONS LLP<br />
                        Room No. 14/728, First Floor,<br />
                        Narikkottu Complex. Ekarool<br />
                        post. Unnikulam via,<br />
                        Kozhikode dist. Kerala<br />
                        st. India 673574
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ backgroundColor: '#1B5E20', padding: '20px 0', textAlign: 'center', fontSize: '0.85rem' }}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Tripplem Solutions LLP. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
