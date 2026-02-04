import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header style={{
            height: 'var(--header-height)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(191, 188, 188, 0.3)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/3msLOGO.png" alt="3MS Logo" className="header-logo" style={{ height: '70px', width: 'auto', padding: '5px 0', transition: 'height 0.3s' }} />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none', gap: '30px' }} className="desktop-nav">
                    <Link to="/" style={{ fontWeight: '500' }}>Home</Link>
                    <Link to="/about" style={{ fontWeight: '500' }}>About</Link>
                    <Link to="/features" style={{ fontWeight: '500' }}>Features</Link>
                    <Link to="/user-guide" style={{ fontWeight: '500' }}>User Guide</Link>
                    <Link to="/contact" style={{ fontWeight: '500' }}>Contact Us</Link>
                    <Link to="/apply-now" style={{ fontWeight: '500' }}>Apply Now</Link>
                </nav>

                <div className="desktop-nav" style={{ display: 'none' }}>
                    <Link to="/get-app" className="btn" style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '10px 25px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', borderRadius: '50px' }}>GET THE APP <ArrowRight size={16} /></Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '10px', marginRight: '-10px' }}
                    className="mobile-toggle"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'var(--header-height)',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: 'var(--shadow)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    zIndex: 999
                }}>
                    <Link to="/" onClick={() => setIsOpen(false)} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>About</Link>
                    <Link to="/features" onClick={() => setIsOpen(false)} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Features</Link>
                    <Link to="/user-guide" onClick={() => setIsOpen(false)} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>User Guide</Link>
                    <Link to="/apply-now" onClick={() => setIsOpen(false)} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Apply Now</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Contact</Link>
                    <Link to="/get-app" className="btn" style={{ backgroundColor: 'var(--primary)', color: '#fff', textAlign: 'center', marginTop: '10px' }} onClick={() => setIsOpen(false)}>Get the App</Link>
                </div>
            )}

            <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .header-logo { height: 50px !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
