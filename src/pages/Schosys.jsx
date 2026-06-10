import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Bus, FileText, CreditCard, Calendar, BarChart, Library, Settings, CheckCircle, Globe } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay, duration: 0.5 }}
        style={{
            padding: '25px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}
    >
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            backgroundColor: 'rgba(33, 150, 243, 0.1)',
            color: '#2196F3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Icon size={24} />
        </div>
        <h4 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{title}</h4>
        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{description}</p>
    </motion.div>
);

const Schosys = () => {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <section style={{ paddingTop: '140px', paddingBottom: '40px', backgroundColor: '#f8f9fa', overflow: 'hidden' }}>
                <div className="container grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{ display: 'inline-block', backgroundColor: 'rgba(33, 150, 243, 0.1)', color: '#2196F3', padding: '8px 16px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', marginBottom: '20px' }}>
                            New Platform
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.2', marginBottom: '25px', fontWeight: '800' }}>
                            <span style={{ color: '#2196F3' }}>3ms Schosys</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px', fontWeight: '600' }}>
                            Next-Gen School Management Solution
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '35px', lineHeight: '1.7' }}>
                            An all-in-one digital platform designed for schools, colleges, and training institutes to manage their entire operations efficiently. From student data to transportation tracking and asset monitoring, everything is integrated into a single smart system.
                        </p>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#333', fontStyle: 'italic', borderLeft: '4px solid #2196F3', paddingLeft: '15px', marginBottom: '35px' }}>
                            "DIGITIZE. SIMPLIFY. MANAGE EVERYTHING IN ONE PLACE."
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.0, delay: 0.2 }}
                            style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://apps.apple.com/in/app/3ms-schosys/id6762461833" target="_blank" rel="noopener noreferrer"
                                style={{ backgroundColor: '#1a1a1a', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '0.95rem' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg> App Store
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://play.google.com/store/apps/details?id=com.firstlogic.eduspot" target="_blank" rel="noopener noreferrer"
                                style={{ backgroundColor: '#fff', border: '2px solid #1a1a1a', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '0.95rem' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" /></svg> Google Play
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://3ms-schosysadmin.web.app" target="_blank" rel="noopener noreferrer"
                                style={{ backgroundColor: '#2196F3', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', fontSize: '0.95rem', border: '2px solid #2196F3' }}
                            >
                                <Globe size={20} /> Web App
                            </motion.a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <motion.img 
                            src="/schosys/phones_hero.png" 
                            alt="Schosys Mobile App" 
                            style={{ width: '100%', maxWidth: '450px', height: 'auto', display: 'block', objectFit: 'contain' }} 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Platforms & User Roles */}
            <section style={{ padding: '40px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px' }}>Available Across All Devices</h2>
                        <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '40px' }}>Web Application • Android App • iOS App</p>
                        <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                            <img src="/schosys/page_3.png" alt="Available Platforms" style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '20px', borderTop: '4px solid #1a1a1a' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>Admin / Management</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {[
                                    "Complete control over institution activities",
                                    "Student & Staff Management",
                                    "Fee & Financial Management",
                                    "Reports & Analytics Dashboard"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <CheckCircle size={20} color="#2196F3" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: '#555' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '20px', borderTop: '4px solid #2196F3' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>Teachers & Staff</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {[
                                    "Attendance Management",
                                    "Class & Subject Handling",
                                    "Exam & Timetable Updates",
                                    "Student Performance Tracking",
                                    "Communication Tools"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <CheckCircle size={20} color="#2196F3" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: '#555' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            style={{ padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '20px', borderTop: '4px solid #4CAF50' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px' }}>Parents & Students</h3>
                            <p style={{ color: '#4CAF50', fontWeight: '600', marginBottom: '15px', fontSize: '0.9rem' }}>Dedicated Mobile App</p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {[
                                    "Real-time Attendance Updates",
                                    "Exam Results & Academic Progress",
                                    "Fee Details & Payment Information",
                                    "Instant Notifications & Announcements",
                                    "Live Transport Tracking (GPS Enabled)"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <CheckCircle size={20} color="#2196F3" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: '#555' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section style={{ padding: '40px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px' }}>Key Features</h2>
                        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Everything you need to manage your educational institution effectively.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <FeatureItem 
                            icon={BookOpen} 
                            title="Academic Management" 
                            description="Department & Class Management, Student Admission & Tracking, Staff Management, Timetable & Exam Scheduling."
                            delay={0.1}
                        />
                        <FeatureItem 
                            icon={CreditCard} 
                            title="Financial Management" 
                            description="Course Fee Management, Transport & Exam Fee Tracking, Automated Salary & Payroll System, Financial Reports & Analytics."
                            delay={0.2}
                        />
                        <FeatureItem 
                            icon={Users} 
                            title="Attendance & Performance" 
                            description="Student & Staff Attendance, Performance Tracking, Real-time Updates."
                            delay={0.3}
                        />
                        <FeatureItem 
                            icon={Bus} 
                            title="Transport Management" 
                            description="School Bus Management, Route & Vehicle Allocation, Real-Time GPS Tracking, Automatic Fee Calculation."
                            delay={0.4}
                        />
                        <FeatureItem 
                            icon={FileText} 
                            title="Communication Tools" 
                            description="Notice Board, Group Messaging (Text, Voice, Files), Instant Notifications."
                            delay={0.5}
                        />
                        <FeatureItem 
                            icon={BarChart} 
                            title="Reports & Analytics" 
                            description="Academic Reports, Attendance Reports, Financial Overview, Fee Collection Summary."
                            delay={0.6}
                        />
                        <FeatureItem 
                            icon={Library} 
                            title="Library Management" 
                            description="Book Inventory, Issue & Return Tracking, Stock Monitoring."
                            delay={0.7}
                        />
                        <FeatureItem 
                            icon={Calendar} 
                            title="Activities & Events" 
                            description="Sports & Arts Event Management, Result Publishing, Certificate Generation."
                            delay={0.8}
                        />
                        <FeatureItem 
                            icon={Settings} 
                            title="Administration Tools" 
                            description="Asset Management, Visitor Log System, Student Promotion & Transfer."
                            delay={0.9}
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section style={{ padding: '40px 0', backgroundColor: 'white' }}>
                <div className="container grid grid-2" style={{ alignItems: 'center', gap: '50px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '30px' }}>Why Choose Schosys?</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {[
                                "Easy to Use Interface",
                                "All-in-One Management System",
                                "Cloud-Based Access",
                                "Time-Saving Automation",
                                "Accurate Data & Reports",
                                "Scalable for Any Institution"
                            ].map((item, i) => (
                                <motion.li 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    key={i} 
                                    style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.1rem', color: '#444' }}
                                >
                                    <div style={{ backgroundColor: '#e3f2fd', color: '#2196F3', padding: '8px', borderRadius: '50%' }}>
                                        <CheckCircle size={20} />
                                    </div>
                                    <span style={{ fontWeight: '600' }}>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '50px', borderRadius: '24px' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '25px' }}>Who Can Use It?</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                            {["Schools", "Colleges", "Tuition Centers", "Training Institutes", "Educational Organizations"].map((user, i) => (
                                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '12px', fontWeight: '600', fontSize: '1.1rem' }}>
                                    {user}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </PageWrapper>
    );
};

export default Schosys;
