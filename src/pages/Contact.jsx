import React from 'react';
import { Mail, Phone, MapPin, Send, Headphones, Lightbulb, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const Contact = () => {
    return (
        <PageWrapper>
            <div style={{ backgroundColor: '#fff' }}>
                {/* Header Section */}
                <section style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center' }}>
                    <div className="container">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            style={{
                                color: '#666',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '15px'
                            }}
                        >
                            CONTACT US
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            style={{
                                fontSize: '3.5rem',
                                fontWeight: '700',
                                color: '#000',
                                lineHeight: '1.2',
                                marginBottom: '15px'
                            }}
                        >
                            Have Any question?<br />
                            Don't hesitate to reach us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{
                                color: '#888',
                                fontSize: '1.1rem',
                                maxWidth: '600px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}
                        >
                            Need assistance? Our team is here to help—reach out anytime, and we'll get back to you as soon as possible!
                        </motion.p>
                    </div>
                </section>

                {/* Green Contact Info Bar */}
                <section style={{ padding: '40px 0' }}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            style={{
                                backgroundColor: '#1B5E20',
                                borderRadius: '16px',
                                padding: '50px 30px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(6, 1fr)',
                                gap: '15px',
                                textAlign: 'center',
                                color: '#fff'
                            }}
                        >
                            <div>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px' }}>EMAIL</h4>
                                <a href="mailto:info@3ms.co.in" style={{ color: '#ccc', fontSize: '0.8rem', textDecoration: 'none' }}>info@3ms.co.in</a>
                            </div>
                            <div style={{ borderLeft: '1px solid #333' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px' }}>PHONE</h4>
                                <a href="tel:+919526476607" style={{ color: '#ccc', fontSize: '0.8rem', textDecoration: 'none' }}>+91 95264 76607</a>
                            </div>
                            <div style={{ borderLeft: '1px solid #333' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px' }}>WHATSAPP</h4>
                                <a href="https://wa.me/919526476607" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '0.8rem', textDecoration: 'none' }}>+91 95264 76607</a>
                            </div>
                            <div style={{ borderLeft: '1px solid #333' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px' }}>INSTAGRAM</h4>
                                <a href="https://www.instagram.com/3mssolutions?igsh=bGsxemk4NXh5MTVq&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '0.8rem', textDecoration: 'none' }}>@3mssolutions</a>
                            </div>
                            <div style={{ borderLeft: '1px solid #333' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px' }}>FACEBOOK</h4>
                                <a href="https://www.facebook.com/share/1XWDZFPitw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '0.8rem', textDecoration: 'none' }}>3ms</a>
                            </div>
                            <div style={{ borderLeft: '1px solid #333' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px' }}>LOCATION</h4>
                                <a href="https://maps.app.goo.gl/VhFAVXGSvK3Qu3td6?g_st=iw" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '0.8rem', textDecoration: 'none' }}>Ekarool, Calicut, Kerala</a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content Split Section */}
                <section style={{ padding: '80px 0 120px' }}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px' }}>
                        {/* Left Column: Support Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '60px', paddingRight: '40px', borderRight: '1px solid #eee' }}
                        >
                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '25px', color: '#000' }}>
                                    Let’s Connect! Reach Out Anytime!
                                </h2>
                                <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.6' }}>
                                    Have questions or need support? We're here to help—get in touch with us anytime!
                                </p>

                                <div style={{ marginBottom: '50px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                                        <div style={{ backgroundColor: '#000', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                                            <Headphones size={24} />
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>24/7 Customer Support</h3>
                                    </div>
                                    <div style={{ height: '2px', backgroundColor: '#000', width: '250px', marginBottom: '20px' }}></div>
                                    <p style={{ color: '#888', lineHeight: '1.6' }}>
                                        Quick and hassle-free support to ensure your experience with 3MS is smooth and efficient.
                                    </p>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                                        <div style={{ backgroundColor: '#000', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                                            <Lightbulb size={24} />
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>Seamless Assistance</h3>
                                    </div>
                                    <div style={{ height: '2px', backgroundColor: '#000', width: '250px', marginBottom: '20px' }}></div>
                                    <p style={{ color: '#888', lineHeight: '1.6' }}>
                                        Quick and hassle-free support to ensure your experience with 3MS is smooth and efficient.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', color: '#000' }}>
                                Get in Touch with Tripplem Solutions LLP
                            </h2>
                            <p style={{ color: '#666', fontSize: '1rem', marginBottom: '40px', lineHeight: '1.6' }}>
                                We'd love to hear from you! Fill out the form below, and our team will get back to you as soon as possible.
                            </p>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>Your Name (required)</label>
                                        <input type="text" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>Your Email (required)</label>
                                        <input type="email" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>Subject</label>
                                    <input type="text" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #eee', backgroundColor: '#f9f9f9' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>Your Message</label>
                                    <textarea rows="6" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #eee', backgroundColor: '#f9f9f9', resize: 'none' }}></textarea>
                                </div>
                                <button className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '15px 40px', fontSize: '1rem', fontWeight: '700' }}>
                                    SEND MESSAGE
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                <CTA />
            </div>
        </PageWrapper>
    );
};

export default Contact;
