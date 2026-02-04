import { Smartphone, ShoppingBag, Contact, Book, Heart, Shield, TrendingUp, Settings, CheckCircle2, Zap, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const Features = () => {
    const detailedFeatures = [
        {
            icon: ShoppingBag,
            title: "Marketplace (Buy & Sell)",
            desc: "A lightweight marketplace designed for local shops and service centers.",
            points: ["Zero commission on sales", "Online presence without technical skills", "Product listing & catalog management", "Business–customer direct dealings"]
        },
        {
            icon: Shield,
            title: "Social Economy (JAR)",
            desc: "Digitizes traditional community-based chit funds and savings groups.",
            points: ["Start unlimited JARs", "Secure record management", "Payment tracking & draw logs", "Automated reminders"]
        },
        {
            icon: Settings,
            title: "Utility & Services",
            desc: "Hyperlocal digital service engine to discover essential services.",
            points: ["Dual profile system (Work/Social)", "Live location based discovery", "Emergency service connect", "Free/Paid verified listings"]
        },
        {
            icon: Heart,
            title: "Community & Charity",
            desc: "Transparent and trustworthy digital platform for charitable activities.",
            points: ["Campaign management for NGOs", "Full givers-receivers transparency", "Annual subscription model", "Volunteer group coordination"]
        },
        {
            icon: TrendingUp,
            title: "Cashbook & Accounting",
            desc: "Professional accounting & utility tools for personal and business use.",
            points: ["Income & expense tracking", "Custom reports (Filter/Print)", "Digital invoice generation", "Mobile-first financial tracking"]
        },
        {
            icon: Book,
            title: "Personal Digital Diary",
            desc: "Secure storage for your daily notes and personal life records.",
            points: ["Encrypted personal records", "Digital notes & ideas", "Daily activity logs", "Completely free for personal use"]
        }
    ];

    return (
        <PageWrapper>
            <div style={{ paddingTop: '100px', backgroundColor: '#fff' }}>
                {/* Hero Header Section */}
                <section style={{ textAlign: 'center', padding: '100px 0 60px' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}
                        >
                            Deep Dive Into 3MS
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                marginBottom: '25px',
                                color: '#1a1a1a',
                                lineHeight: '1.1'
                            }}
                        >
                            Engineered for <br />
                            <span style={{ color: 'var(--primary)' }}>Digital Empowerment</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{
                                fontSize: '1.25rem',
                                color: '#555',
                                lineHeight: '1.8',
                                maxWidth: '800px',
                                margin: '0 auto 40px'
                            }}>
                            3MS is one of the few platforms capable of digitally representing the economic, social, and service structure of an entire local region.
                        </motion.p>
                    </div>
                </section>

                {/* Key Features Interactive Section */}
                <section style={{ padding: '60px 0 120px' }}>
                    <div className="container">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '40px'
                        }}>
                            {detailedFeatures.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        padding: '50px',
                                        borderRadius: '32px',
                                        backgroundColor: '#f8fafc',
                                        border: '1px solid #f0f0f0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px'
                                    }}
                                >
                                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                                        <f.icon size={30} />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{f.title}</h3>
                                    <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>{f.desc}</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                                        {f.points.map((p, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: '#444' }}>
                                                <CheckCircle2 size={18} color="var(--primary)" /> {p}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Pillars */}
                <section style={{ backgroundColor: '#1a1a1a', padding: '100px 0', color: 'white' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>Built on Trust & Resilience</h2>
                            <p style={{ color: '#888', fontSize: '1.2rem' }}>The technology that powers local digital transformation.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '40px' }}>
                            {[
                                { icon: Lock, title: "Privacy First", text: "Secure record management and data encryption for all personal/financial modules." },
                                { icon: Globe, title: "Hyperlocal Map", text: "Digitally mapping every service and business within local governance boundaries." },
                                { icon: Zap, title: "No Commission", text: "Direct business-to-customer dealings to sustain small businesses in the e-commerce era." },
                                { icon: Smartphone, title: "Utility Hub", text: "One app for all services, organizations, and individuals within your local ecosystem." }
                            ].map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{ textAlign: 'center' }}
                                >
                                    <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'inline-block' }}>
                                        <p.icon size={48} />
                                    </div>
                                    <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px' }}>{p.title}</h4>
                                    <p style={{ color: '#aaa', lineHeight: '1.6' }}>{p.text}</p>
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

export default Features;
