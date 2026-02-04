import React from 'react';
import { Smartphone, Briefcase, Layout, Gift, ShoppingBag, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const LoadingIcon = ({ icon: Icon, color, style, animate }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            rotate: animate?.rotate || 0,
            y: animate?.y || 0
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            ...animate?.transition
        }}
        style={{ position: 'absolute', ...style }}
    >
        <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', border: '1px solid #333' }}>
            <Icon size={24} color={color} />
        </div>
    </motion.div>
);

const GetApp = () => {
    return (
        <PageWrapper>
            <div style={{
                backgroundColor: '#1B5E20',
                minHeight: '100vh',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Floating Icons Background */}
                <LoadingIcon icon={Layout} color="#aaa" style={{ top: '20%', left: '15%' }} animate={{ rotate: -10, y: [0, -15, 0] }} />
                <LoadingIcon icon={Layout} color="#aaa" style={{ top: '50%', left: '8%' }} animate={{ rotate: 15, y: [0, 15, 0], transition: { delay: 1 } }} />
                <LoadingIcon icon={Smartphone} color="#34a853" style={{ bottom: '20%', left: '18%' }} animate={{ rotate: -5, y: [0, -10, 0], transition: { delay: 0.5 } }} />

                <LoadingIcon icon={Layout} color="#aaa" style={{ top: '15%', right: '20%' }} animate={{ rotate: 10, y: [0, 10, 0], transition: { delay: 1.5 } }} />
                <LoadingIcon icon={Smartphone} color="#ff4b81" style={{ top: '45%', right: '10%' }} animate={{ rotate: -15, y: [0, -20, 0], transition: { delay: 0.8 } }} />
                <LoadingIcon icon={Gift} color="#ff8c00" style={{ bottom: '25%', right: '15%' }} animate={{ rotate: 5, y: [0, 15, 0], transition: { delay: 1.2 } }} />
                <LoadingIcon icon={Briefcase} color="#ffd700" style={{ bottom: '10%', right: '45%' }} animate={{ rotate: -10, y: [0, -10, 0], transition: { delay: 0.3 } }} />

                {/* Content Container */}
                <div style={{ zIndex: 10, textAlign: 'center', maxWidth: '800px' }}>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: '0.9rem',
                            letterSpacing: '2px',
                            color: '#999',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}
                    >
                        GET THE APP
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: '3.5rem',
                            fontWeight: '800',
                            marginBottom: '30px'
                        }}
                    >
                        Get the 3ms App
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            fontSize: '1.2rem',
                            color: '#888',
                            lineHeight: '1.6',
                            marginBottom: '50px',
                            maxWidth: '650px',
                            margin: '0 auto 50px'
                        }}
                    >
                        Experience seamless transactions, effortless management, and secure digital
                        solutions—all in one app.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://apps.apple.com/in/app/3ms/id6745809435" target="_blank" rel="noopener noreferrer" style={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '15px 30px',
                                borderRadius: '10px',
                                border: '1px solid #444',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '600'
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg> Apple Store
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://play.google.com/store/apps/details?id=com.firstlogicmetalab.threems" target="_blank" rel="noopener noreferrer" style={{
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '15px 30px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '600'
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                            </svg> Google Play
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default GetApp;
