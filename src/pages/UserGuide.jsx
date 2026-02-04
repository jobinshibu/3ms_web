import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const GuideCard = ({ image, title, items, link, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, delay: (index % 2) * 0.2 }}
    >
        <Link to={link || "#"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="guide-card-inner"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    padding: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '40px',
                    border: '1px solid #d1d9e6',
                    cursor: 'pointer',
                    height: '320px',
                    transition: 'box-shadow 0.3s ease'
                }}
            >
                <div
                    className="guide-card-image"
                    style={{
                        width: '180px',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}
                >
                    <motion.img
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        src={image} alt={title} style={{
                            height: '100%',
                            width: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                        }} />
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '15px', color: '#000' }}>{title}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#888', fontSize: '1.2rem', lineHeight: '1.6' }}>
                        {items.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                        ))}
                    </ul>
                    <div style={{
                        color: 'var(--primary)',
                        fontWeight: '700',
                        fontSize: '1.2rem',
                        textDecoration: 'underline',
                        textUnderlineOffset: '6px'
                    }}>
                        Know More
                    </div>
                </div>
            </motion.div>
        </Link>
    </motion.div>
);

const UserGuide = () => {
    return (
        <PageWrapper>
            <div style={{ backgroundColor: '#fff' }}>
                {/* Hero Section */}
                <section style={{ padding: '160px 0 100px', backgroundColor: '#fff' }}>
                    <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{
                                borderRadius: '40px',
                                overflow: 'hidden',
                                maxWidth: '450px',
                                justifySelf: 'center'
                            }}
                        >
                            <img
                                src="/Untitled-design-7.jpg"
                                alt="User using 3ms app"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                                fontWeight: '700',
                                color: '#000',
                                lineHeight: '1.1',
                                marginBottom: '30px'
                            }}>
                                Your Complete Guide to Navigating the 3ms App
                            </h1>
                            <p style={{
                                fontSize: '1.2rem',
                                color: '#555',
                                lineHeight: '1.6',
                                maxWidth: '500px'
                            }}>
                                Whether you're a new user or looking to explore advanced features, this guide will help you make the most of the 3ms app. From setting up your profile to managing transactions, charities, and more, we've got you covered.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Getting Started Section */}
                <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                    <div className="container">
                        <div className="grid grid-2" style={{ gap: '100px', alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px' }}>Getting Started</h2>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        "Open the 3ms application",
                                        "Tap the three lines at the top right of the screen",
                                        "Edit and update your name, email, and phone number in the banner.",
                                        "Press the indent on the left to close the window."
                                    ].map((text, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: idx * 0.1 }}
                                            style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}
                                        >
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000', marginTop: '10px' }}></div>
                                            <span style={{ fontSize: '1.1rem', color: '#333' }}>{text}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                                style={{ textAlign: 'center' }}
                            >
                                <img
                                    src="/Untitled-design-12.png"
                                    alt="App Interface"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Module Guides Grid */}
                <section style={{ padding: '80px 0 140px' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                            {[
                                { image: "/Untitled-design-17.png", title: "Navigation and Settings", items: ["Terms and Conditions", "FAQ", "How to Use"], link: "/user-guide/navigation-settings" },
                                { image: "/Untitled-design-17.png", title: "Diary", items: ["How it Works"], link: "/user-guide/diary" },
                                { image: "/2-1.png", title: "Phone Book", items: ["How to Add/Remove Contacts", "Syncing & Integration", "Transaction Data"], link: "/user-guide/phone-book" },
                                { image: "/3-1.png", title: "Cluster (JAR)", items: ["Creating a New JAR", "Managing a JAR", "Making Payments In a JAR"], link: "/user-guide/cluster-jar" },
                                { image: "/4-1.png", title: "Buy & Sell", items: ["Shop Now Tab", "Purchasing Method", "Payment Process"], link: "/user-guide/buy-sell" },
                                { image: "/5-1.png", title: "Charity", items: ["Creating and Managing Charities", "Accepting Payments", "Managing Completed Charities"], link: "/user-guide/charity" },
                                { image: "/6-1.png", title: "Utility", items: ["My Service Tab", "Service Tab", "Benefits"], link: "/user-guide/utility" },
                                { image: "/7-1.png", title: "Cash Book", items: ["Your Cash Book", "Customizing Reports and Statements", "Income Tab"], link: "/user-guide/cash-book" }
                            ].map((card, idx) => (
                                <GuideCard key={idx} {...card} index={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                <style>{`
                    @media (max-width: 768px) {
                        .guide-card-inner {
                            flex-direction: column !important;
                            height: auto !important;
                            gap: 20px !important;
                            text-align: center;
                        }
                        .guide-card-image {
                            width: 120px !important;
                            height: 120px !important;
                        }
                    }
                `}</style>

                <CTA />
            </div>
        </PageWrapper>
    );
};

export default UserGuide;
