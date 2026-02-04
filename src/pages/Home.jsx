import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Smartphone, Shield, Repeat, TrendingUp, Heart, ShoppingBag,
    Book, Contact, Users, Layout, ChevronDown, Settings, CreditCard, Landmark, Briefcase, CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const FeatureCard = ({ icon: Icon, title, description, image, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ translateY: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
        style={{
            padding: '35px 25px',
            backgroundColor: 'white',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderTop: '3px solid var(--primary)',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#f8f9fa',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '25px',
            color: 'var(--primary)'
        }}>
            <Icon size={30} />
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px' }}>{title}</h3>
        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '30px' }}>{description}</p>
        {image && (
            <div style={{
                marginTop: 'auto',
                width: '100%',
                maxHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
        )}
    </motion.div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            whileHover={{ boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
            style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                marginBottom: '15px',
                border: '1px solid #f0f0f0',
                overflow: 'hidden'
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '25px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{question}</span>
                <ChevronDown
                    size={20}
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
            >
                <div style={{ padding: '0 25px 25px', color: '#666', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: answer }} />
            </motion.div>
        </motion.div>
    );
};

const ModuleItem = ({ icon: Icon, title, description, color, index, badge }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -4, boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}
        style={{
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '24px',
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            border: '1px solid #f0f0f0',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {badge && (
            <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: color,
                color: 'white',
                padding: '4px 12px',
                fontSize: '0.7rem',
                fontWeight: '800',
                borderRadius: '0 0 0 12px',
                textTransform: 'uppercase'
            }}>{badge}</div>
        )}
        <div style={{
            padding: '15px',
            backgroundColor: color + '15',
            borderRadius: '16px',
            color: color
        }}>
            <Icon size={24} />
        </div>
        <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px', color: '#1a1a1a' }}>{title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>{description}</p>
        </div>
    </motion.div>
);

const Home = () => {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section style={{ paddingTop: '120px', paddingBottom: '30px', backgroundColor: 'white', overflow: 'hidden' }}>
                <div className="container grid grid-2" style={{ alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '25px', fontWeight: '800' }}
                        >
                            India's Largest<br />
                            <span style={{ color: 'var(--primary)' }}>Hyperlocal Digital</span><br />
                            Ecosystem
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                            style={{ fontSize: '1.2rem', color: '#555', marginBottom: '35px', maxWidth: '600px', lineHeight: '1.7' }}
                        >
                            3ms transforms local governance units into digitally empowered communities. Connect with businesses, manage finances, and access services—all in one place.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                            style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://apps.apple.com/in/app/3ms/id6745809435" target="_blank" rel="noopener noreferrer"
                                style={{ backgroundColor: '#1a1a1a', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none' }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg> App Store
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://play.google.com/store/apps/details?id=com.firstlogicmetalab.threems" target="_blank" rel="noopener noreferrer"
                                style={{ backgroundColor: '#fff', border: '2px solid #1a1a1a', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none' }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" /></svg> Google Play
                            </motion.a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
                    >
                        <motion.img
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            src="/hero-main.png"
                            alt="3MS App"
                            style={{ width: '100%', maxWidth: '550px', height: 'auto' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Key Features Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#fcfcfc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>Powerful Modules</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>Digitally representing the economic, social, and service structure of entire regions.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
                        {[
                            { icon: ShoppingBag, title: "Buy & Sell Market", badge: "No Commission", color: "#4CAF50", description: "A lightweight marketplace for local shops. Zero commission, direct business-customer dealings, and easy digital inventory." },
                            { icon: Landmark, title: "Social Economy (JAR)", badge: "JAR", color: "#2196F3", description: "Digitizes traditional community-based chit funds (JAR). Secure record management, draw logs, and payment tracking." },
                            { icon: Settings, title: "Utility & Services", badge: "Dual Profile", color: "#FF9800", description: "Dual profile system (Work + Social). Discover essential services based on live location with real-time connect features." },
                            { icon: Heart, title: "Community & Charity", badge: "Transparent", color: "#f44336", description: "Trustworthy platform for organisations. Full transparency between givers and receivers with annual activation." },
                            { icon: TrendingUp, title: "Cashbook & Finance", badge: "Premium", color: "#673ab7", description: "Professional grade accounting software. Track income/expenses, generate custom reports, and share digital invoices." },
                            { icon: Book, title: "Digital Diary", badge: "Free", color: "#795548", description: "Secure storage for daily notes and personal records. Future-ready encrypted environment for your personal life." }
                        ].map((module, idx) => (
                            <ModuleItem key={idx} index={idx} {...module} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Franchise Opportunity Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#1a1a1a', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                        >
                            <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px', lineHeight: '1.1' }}>
                                Start Your <span style={{ color: 'var(--primary)' }}>Franchise</span> Business 2026
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '40px', lineHeight: '1.7' }}>
                                We are inviting partners to operate 3MS at District, Constituency, and Local Body levels. Join the hyperlocal revolution.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '20px' }}>
                                    <h4 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '5px' }}>₹1L +</h4>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>District Franchise Income</p>
                                </div>
                                <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '20px' }}>
                                    <h4 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '5px' }}>₹50K +</h4>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>Constituency Income</p>
                                </div>
                            </div>
                            <div style={{ marginTop: '50px' }}>
                                <Link to="/apply-now" style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    padding: '20px 50px',
                                    borderRadius: '50px',
                                    display: 'inline-block',
                                    fontWeight: '800',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem'
                                }}>Apply Now</Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            style={{
                                backgroundColor: '#222',
                                padding: '50px',
                                borderRadius: '32px',
                                border: '1px solid #333',
                                boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
                            }}
                        >
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '35px' }}>Franchise Benefits</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                {[
                                    { title: "Revenue Channels", desc: "60% of Ads & Service, 30% of Subscriptions." },
                                    { title: "Market Stability", desc: "Long-term hyperlocal digital model with high stickiness." },
                                    { title: "Zero Competition", desc: "Unique community-oriented design for local governance." },
                                    { title: "Company Support", desc: "Full product training, branding, and field strategy." }
                                ].map((b, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ color: 'var(--primary)' }}><CheckCircle size={24} /></div>
                                        <div>
                                            <h5 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '5px' }}>{b.title}</h5>
                                            <p style={{ color: '#888', fontSize: '0.9rem' }}>{b.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '100px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800' }}>FAQ</h2>
                        <p style={{ color: '#666' }}>Everything you need to know about 3MS</p>
                    </div>
                    <div>
                        {[
                            { q: "What is the 3MS mobile application?", a: "3MS is a multi-functional mobile application designed to serve both businesses and individuals. It features six key modules - Buy & Sell, Charity, Utility, Cluster (JAR), Cash Book, and Diary - offering a range of solutions for online business, charity management, personal finance, and more." },
                            { q: "Is the 3MS app free to use?", a: "Yes, the Utility, Cash Book, and Diary modules are free. The Buy & Sell, Charity, and Cluster (JAR) modules may require a subscription." },
                            { q: "How do I set up a shop in the Buy & Sell module?", a: "Sign in to the 3MS app, go to the Buy & Sell module, click on Create Shop, enter your business details, and upload your products." },
                            { q: "What is the 3MS franchise opportunity?", a: "The franchise allows partners to manage and promote 3MS in their district, verifying shops and charity requests while earning 50% of the district’s profit." },
                            { q: "How do I get support if I face issues?", a: "Contact our support team through the Help & Support section in the app or via email on our official website." }
                        ].map((faq, idx) => (
                            <FAQItem key={idx} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </PageWrapper>
    );
};

export default Home;
