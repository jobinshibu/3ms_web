import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const moduleContent = {
    'navigation-settings': {
        title: 'Touch Settings to view',
        image: '/Untitled-design-17.png',
        steps: [
            'Open the 3ms application.',
            'Tap the three lines at the top right of the screen.',
            'Access Settings from the bottom of the menu.',
            'View and adjust Terms & Conditions, FAQ, and App Info.'
        ]
    },
    'diary': {
        title: 'How Diary Works',
        image: '/Untitled-design-17.png',
        steps: [
            'Select the Diary module from your dashboard.',
            'Add your daily notes or schedules using the floating action button.',
            'Edit or delete existing entries with a long press.',
            'Sync your diary data across devices with one tap.'
        ]
    },
    'phone-book': {
        title: 'Manage Your Contacts',
        image: '/2-1.png',
        steps: [
            'Open the Phone Book module.',
            'Tap "Add Contact" to save new details.',
            'Sync your device contacts to see who else is on 3ms.',
            'View transaction history directly from a contact\'s profile.'
        ]
    },
    'cluster-jar': {
        title: 'Managing Your JAR',
        image: '/3-1.png',
        steps: [
            'Create a new JAR for your savings or group goals.',
            'Add members to your JAR by invitation.',
            'Make secure payments directly into the JAR.',
            'Track all contributions and withdrawals in real-time.'
        ]
    },
    'buy-sell': {
        title: 'Shop & Sell Securely',
        image: '/4-1.png',
        steps: [
            'Navigate to the "Shop Now" tab to browse items.',
            'Select a product to view detailed descriptions and prices.',
            'Choose your preferred purchasing method.',
            'Complete the secure payment process to finalize your order.'
        ]
    },
    'charity': {
        title: 'Support and Manage Charities',
        image: '/5-1.png',
        steps: [
            'Browse the list of verified charities.',
            'Create and manage your own charity campaigns.',
            'Accept secure payments and donations directly.',
            'Manage completed charities and view impact reports.'
        ]
    },
    'utility': {
        title: 'Access Utility Services',
        image: '/6-1.png',
        steps: [
            'Open the Utility module to find local services.',
            'Tap "My Service Tab" to manage your subscriptions.',
            'Service providers can list their offerings in the "Service Tab".',
            'Enjoy exclusive benefits and discounts through the app.'
        ]
    },
    'cash-book': {
        title: 'Detailed Expense Tracking',
        image: '/7-1.png',
        steps: [
            'Select "Your Cash Book" to view all transactions.',
            'Categorize your income and expenses for better clarity.',
            'Customize and download reports and statements.',
            'Use the "Income Tab" to track all incoming funds.'
        ]
    }
};

const ModuleDetail = () => {
    const { moduleId } = useParams();
    const content = moduleContent[moduleId];

    if (!content) {
        return (
            <div style={{ paddingTop: '160px', textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Module not found</h2>
                <Link to="/user-guide" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to User Guide</Link>
            </div>
        );
    }

    return (
        <PageWrapper>
            <div style={{ backgroundColor: '#fff' }}>
                <section style={{ padding: '160px 0 100px' }}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: 'center' }}
                        >
                            <img
                                src={content.image}
                                alt={content.title}
                                style={{
                                    maxWidth: '400px',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))'
                                }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                marginBottom: '40px',
                                color: '#000'
                            }}>
                                {content.title}
                            </h1>
                            <ol style={{
                                paddingLeft: 0,
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}>
                                {content.steps.map((step, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#555',
                                            display: 'flex',
                                            gap: '15px',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        <span style={{ fontWeight: '700', color: '#888' }}>{index + 1}.</span>
                                        <span>{step}</span>
                                    </motion.li>
                                ))}
                            </ol>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.8 }}
                                style={{ marginTop: '50px' }}
                            >
                                <Link to="/user-guide" style={{
                                    color: 'var(--primary)',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    ← Back to User Guide
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                <CTA />
            </div>
        </PageWrapper>
    );
};

export default ModuleDetail;
