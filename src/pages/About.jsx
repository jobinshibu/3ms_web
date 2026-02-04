import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, ArrowRight, Target, Eye, ShieldCheck, Zap } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const Counter = ({ value, suffix = "" }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => setDisplayValue(Math.round(latest))
            });
            return controls.stop;
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    );
};

const About = () => {
    const stats = [
        { label: 'Communities Connected', value: 100, suffix: '+' },
        { label: 'Merchant Partners', value: 500, suffix: '+' },
        { label: 'Services Mapped', value: 2500, suffix: '+' },
        { label: 'App Downloads', value: 50, suffix: 'k+' }
    ];

    return (
        <PageWrapper>
            <div style={{ paddingTop: '100px', backgroundColor: '#fff' }}>
                {/* Intro Section */}
                <section style={{ textAlign: 'center', padding: '80px 0 60px' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                color: 'var(--primary)',
                                letterSpacing: '2px',
                                marginBottom: '20px',
                                textTransform: 'uppercase'
                            }}
                        >
                            Innovate • Connect • Simplify
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                color: '#1a1a1a',
                                marginBottom: '25px',
                                lineHeight: '1.1'
                            }}
                        >
                            Building India's Largest<br />
                            <span style={{ color: 'var(--primary)' }}>Hyperlocal Ecosystem</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            style={{
                                fontSize: '1.2rem',
                                color: '#555',
                                lineHeight: '1.7',
                                marginBottom: '40px',
                                maxWidth: '800px',
                                margin: '0 auto 40px'
                            }}
                        >
                            3MS is a pioneering digital platform designed to connect every business, service provider, organization, and individual within a locality. We transform local regions into digitally empowered communities.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}
                        >
                            {stats.map((s, i) => (
                                <div key={i} style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#f9f9f9' }}>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '5px' }}>
                                        <Counter value={s.value} suffix={s.suffix} />
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: '600' }}>{s.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section style={{ padding: '100px 0', backgroundColor: '#fcfcfc' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                style={{
                                    padding: '50px',
                                    borderRadius: '32px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    border: '1px solid #f0f0f0'
                                }}
                            >
                                <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <Eye size={32} />
                                </div>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a1a' }}>Our Vision</h2>
                                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                                    To create India's largest community-oriented hyperlocal digital ecosystem that empowers individuals and sustains local businesses.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                style={{
                                    padding: '50px',
                                    borderRadius: '32px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    border: '1px solid #f0f0f0'
                                }}
                            >
                                <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e88e5' }}>
                                    <Target size={32} />
                                </div>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a1a' }}>Our Mission</h2>
                                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                                    To digitally map every service, business, and social activity within local governance boundaries, bringing unmatched transparency, accessibility, and empowerment to all.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Company Profile Section */}
                <section style={{ padding: '100px 0', borderBottom: '1px solid #eee' }}>
                    <div className="container grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                        >
                            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '30px', color: '#000' }}>
                                About TrippleM Solutions LLP
                            </h2>
                            <div style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.9', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <p>
                                    <strong>TrippleM Solutions LLP</strong> is a technology-driven company committed to building scalable digital solutions for local communities. Our flagship product, the 3MS mobile platform, is designed to empower individuals, support small businesses, and digitize community operations.
                                </p>
                                <p>
                                    In today's digital age, local markets have been significantly impacted by the rise of e-commerce. Many small enterprises have struggled to adapt, resulting in a decline in local transactions. To address this, we developed 3MS with a robust Buy & Sell module designed to reconnect local businesses with their communities.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <ShieldCheck size={20} color="var(--primary)" />
                                        <span style={{ fontWeight: '600' }}>Trusted Solutions</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Zap size={20} color="var(--primary)" />
                                        <span style={{ fontWeight: '600' }}>Fast Implementation</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={20} color="var(--primary)" />
                                        <span style={{ fontWeight: '600' }}>Community Driven</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <ArrowRight size={20} color="var(--primary)" />
                                        <span style={{ fontWeight: '600' }}>Future Scalable</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                        >
                            <img
                                src="/Copy-of-Untitled-Design.png"
                                alt="3MS App Growth"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Placeholder - Keeping existing but improving visuals */}
                <section style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '15px' }}>
                                Empowerment For Everyone
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#666' }}>Budget-friendly solutions tailored for your growth.</p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '40px',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            {[
                                { title: 'Personal User', price: 'Free', features: ['Digital Diary', 'Basic Cashbook', 'Service Discovery', 'Community Access'] },
                                { title: 'Verified Service', price: '₹100', period: '/ year', features: ['Normal Profile Listing', 'Social Economy Access', 'Priority Discovery', 'Contact Management'] },
                                { title: 'Business Partner', price: '₹700', period: '/ year', features: ['Buy & Sell Module', 'Up to 200 Products', 'No Sales Commission', 'Live Sales Tracking'] }
                            ].map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        backgroundColor: '#fff',
                                        padding: '50px',
                                        borderRadius: '32px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: index === 2 ? '2px solid var(--primary)' : '1px solid #f0f0f0',
                                        position: 'relative'
                                    }}
                                >
                                    {index === 2 && (
                                        <span style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'var(--primary)', color: '#fff', padding: '5px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '800' }}>POPULAR</span>
                                    )}
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>{plan.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', marginBottom: '30px' }}>
                                        <span style={{ fontSize: '3rem', fontWeight: '800' }}>{plan.price}</span>
                                        {plan.period && <span style={{ color: '#666', fontSize: '1.1rem' }}>{plan.period}</span>}
                                    </div>

                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: 0, listStyle: 'none', marginBottom: '40px', flex: 1 }}>
                                        {plan.features.map((f, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: '#444' }}>
                                                <CheckCircle size={20} color="var(--primary)" /> {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/get-app"
                                        style={{
                                            backgroundColor: index === 2 ? 'var(--primary)' : '#1a1a1a',
                                            color: '#fff',
                                            padding: '15px',
                                            borderRadius: '16px',
                                            textAlign: 'center',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            transition: 'transform 0.2s'
                                        }}
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </div>
        </PageWrapper>
    );
};

export default About;
