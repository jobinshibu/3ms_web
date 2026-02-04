import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Check, X, Shield, TrendingUp, Users, Target } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import CTA from '../components/CTA';

const SearchableMultiSelect = ({ label, options, selectedValues, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef(null);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleOption = (option) => {
        const newSelected = selectedValues.includes(option)
            ? selectedValues.filter(val => val !== option)
            : [...selectedValues, option];
        onChange(newSelected);
    };

    const removeOption = (option, e) => {
        e.stopPropagation();
        onChange(selectedValues.filter(val => val !== option));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
            <label style={{
                display: 'block',
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '8px',
                fontWeight: '600'
            }}>{label}</label>

            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    minHeight: '45px',
                    padding: '8px 12px',
                    borderBottom: '1px solid #ddd',
                    cursor: 'pointer',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    position: 'relative',
                    paddingRight: '35px'
                }}
            >
                {selectedValues.length === 0 ? (
                    <span style={{ color: '#aaa', fontSize: '0.95rem' }}>{placeholder}</span>
                ) : (
                    selectedValues.map(val => (
                        <span key={val} style={{
                            backgroundColor: '#e8f5e9',
                            color: '#2e7d32',
                            padding: '4px 10px',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontWeight: '600',
                            border: '1px solid #c8e6c9'
                        }}>
                            {val}
                            <X size={14} onClick={(e) => removeOption(val, e)} style={{ cursor: 'pointer' }} />
                        </span>
                    ))
                )}
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
                    <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                            zIndex: 100,
                            marginTop: '10px',
                            overflow: 'hidden',
                            border: '1px solid #eee'
                        }}
                    >
                        <div style={{ padding: '12px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Search size={18} color="#888" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '0.95rem',
                                    width: '100%',
                                    backgroundColor: 'transparent'
                                }}
                            />
                        </div>

                        <div style={{ maxHeight: '250px', overflowY: 'auto', padding: '8px' }}>
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map(option => (
                                    <div
                                        key={option}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleOption(option);
                                        }}
                                        style={{
                                            padding: '10px 12px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            backgroundColor: selectedValues.includes(option) ? '#f0f4f8' : 'transparent',
                                            transition: 'background-color 0.2s'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '18px',
                                                height: '18px',
                                                borderRadius: '4px',
                                                border: `2px solid ${selectedValues.includes(option) ? 'var(--primary)' : '#ddd'}`,
                                                backgroundColor: selectedValues.includes(option) ? 'var(--primary)' : 'transparent',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                transition: 'all 0.2s'
                                            }}>
                                                {selectedValues.includes(option) && <Check size={14} strokeWidth={3} />}
                                            </div>
                                            <span style={{
                                                fontSize: '0.95rem',
                                                color: selectedValues.includes(option) ? '#000' : '#444',
                                                fontWeight: selectedValues.includes(option) ? '600' : '400'
                                            }}>{option}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
                                    No results found
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ApplyNow = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        franchiseType: '',
        selectedDistricts: [],
        selectedLocalBodies: [],
        experience: ''
    });

    const keralaDistricts = [
        'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod',
        'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
        'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
    ];

    const keralaLocalBodies = [
        'Thiruvananthapuram Corporation', 'Kollam Corporation', 'Kochi Corporation',
        'Thrissur Corporation', 'Kozhikode Corporation', 'Kannur Corporation',
        'Neyyattinkara Municipality', 'Attingal Municipality', 'Varkala Municipality',
        'Karunagappally Municipality', 'Kayamkulam Municipality', 'Thiruvalla Municipality',
        'Chengannur Municipality', 'Alappuzha Municipality', 'Cherthala Municipality',
        'Kottayam Municipality', 'Changanassery Municipality', 'Vaikom Municipality',
        'Pala Municipality', 'Thodupuzha Municipality', 'Muvattupuzha Municipality',
        'Kothamangalam Municipality', 'Perumbavoor Municipality', 'Aluva Municipality',
        'Kalamaserry Municipality', 'Thripunithura Municipality', 'North Paravur Municipality',
        'Angamaly Municipality', 'Chalakudy Municipality', 'Irinjalakuda Municipality',
        'Kodungallur Municipality', 'Chavakkad Municipality', 'Guruvayur Municipality',
        'Kunnamkulam Municipality', 'Palakkad Municipality', 'Ottappalam Municipality',
        'Shornur Municipality', 'Chittur-Tattamangalam Municipality', 'Ponnani Municipality',
        'Tirur Municipality', 'Manjeri Municipality', 'Kottakkal Municipality',
        'Nilambur Municipality', 'Perinthalmanna Municipality', 'Vatakara Municipality',
        'Quilandy Municipality', 'Kalpetta Municipality', 'Thalassery Municipality',
        'Payyannur Municipality', 'Taliparamba Municipality', 'Kanhangad Municipality',
        'Kasaragod Municipality'
    ];

    const inputStyle = {
        width: '100%',
        padding: '12px 0',
        border: 'none',
        borderBottom: '1px solid #ddd',
        fontSize: '1rem',
        backgroundColor: 'transparent',
        outline: 'none',
        transition: 'border-color 0.3s ease'
    };

    const selectStyle = {
        ...inputStyle,
        appearance: 'none',
        backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0 center',
        backgroundSize: '12px auto',
        cursor: 'pointer'
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application submitted successfully!');
        console.log('Submitted Data:', formData);
    };

    const benefits = [
        { icon: TrendingUp, title: "High Revenue Potential", desc: "Expect monthly income ranging from ₹25K to ₹100K depending on franchise tier." },
        { icon: Shield, title: "Zero Competition", desc: "Unique community-oriented digital model with no direct hyperlocal competitors." },
        { icon: Users, title: "Community Impact", desc: "Digitally map every service and business in your local governance boundaries." },
        { icon: Target, title: "Multiple Channels", desc: "Revenue from Ads, Service commissions, and recurring Subscriptions." }
    ];

    return (
        <PageWrapper>
            <div style={{ backgroundColor: '#fff' }}>
                <section style={{ paddingTop: '160px', paddingBottom: '100px' }}>
                    <div className="container" style={{ maxWidth: '1200px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 350px) 1fr', gap: '60px', alignItems: 'start' }} className="apply-grid">

                            {/* Benefits Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                                style={{ position: 'sticky', top: '120px' }}
                            >
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '30px', color: '#1a1a1a' }}>
                                    Why partner with <span style={{ color: 'var(--primary)' }}>3ms</span>?
                                </h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                    {benefits.map((b, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                            <div style={{
                                                minWidth: '45px',
                                                height: '45px',
                                                borderRadius: '12px',
                                                backgroundColor: '#e8f5e9',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--primary)'
                                            }}>
                                                <b.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '5px' }}>{b.title}</h4>
                                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>{b.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{
                                    marginTop: '40px',
                                    padding: '25px',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '20px',
                                    border: '1px solid #eee'
                                }}>
                                    <h5 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Income Potential</h5>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                            <span>District</span>
                                            <span style={{ fontWeight: '700' }}>₹1,00,000 +</span>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                            <span>Constituency</span>
                                            <span style={{ fontWeight: '700' }}>₹50,000 +</span>
                                        </li>
                                        <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                                            <span>Local Body</span>
                                            <span style={{ fontWeight: '700' }}>₹25,000 +</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Application Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.form
                                    onSubmit={handleSubmit}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '35px',
                                        padding: '50px',
                                        borderRadius: '32px',
                                        boxShadow: '0 30px 80px rgba(0,0,0,0.06)',
                                        border: '1px solid #f0f0f0',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>Partner Application</h3>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                style={inputStyle}
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                style={inputStyle}
                                                placeholder="email@example.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            style={inputStyle}
                                            placeholder="+91 00000 00000"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', alignItems: 'start' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>Franchise Tier *</label>
                                            <select
                                                name="franchiseType"
                                                style={selectStyle}
                                                value={formData.franchiseType}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select Franchise Level</option>
                                                <option value="district">District Franchise</option>
                                                <option value="local_body">Local Body (Panchayat / Municipality / Corp)</option>
                                            </select>
                                        </div>

                                        <AnimatePresence mode="wait">
                                            {(formData.franchiseType === 'district' || formData.franchiseType === 'constituency') && (
                                                <motion.div
                                                    key="district-select"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <SearchableMultiSelect
                                                        label={formData.franchiseType === 'district' ? "Select Districts *" : "Select District for Constituency *"}
                                                        options={keralaDistricts}
                                                        selectedValues={formData.selectedDistricts}
                                                        onChange={(vals) => setFormData(prev => ({ ...prev, selectedDistricts: vals }))}
                                                        placeholder="Choose districts"
                                                    />
                                                </motion.div>
                                            )}

                                            {formData.franchiseType === 'local_body' && (
                                                <motion.div
                                                    key="localbody-select"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <SearchableMultiSelect
                                                        label="Select Local Bodies *"
                                                        options={keralaLocalBodies}
                                                        selectedValues={formData.selectedLocalBodies}
                                                        onChange={(vals) => setFormData(prev => ({ ...prev, selectedLocalBodies: vals }))}
                                                        placeholder="Choose local bodies"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '600' }}>Present Profession / Background</label>
                                        <textarea
                                            name="experience"
                                            style={{ ...inputStyle, border: '1px solid #ddd', borderRadius: '12px', padding: '15px', height: '100px', resize: 'none' }}
                                            placeholder="Tell us about your professional background..."
                                            value={formData.experience}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>

                                    <div style={{ marginTop: '10px' }}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            style={{
                                                backgroundColor: 'var(--primary)',
                                                color: '#fff',
                                                padding: '20px 0',
                                                width: '100%',
                                                fontSize: '1.1rem',
                                                fontWeight: '800',
                                                border: 'none',
                                                cursor: 'pointer',
                                                borderRadius: '16px',
                                                boxShadow: '0 15px 40px rgba(76, 175, 80, 0.2)',
                                                letterSpacing: '1px'
                                            }}
                                        >
                                            SUBMIT PARTNER APPLICATION
                                        </motion.button>
                                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999', marginTop: '20px' }}>
                                            By submitting, you agree to our partner terms and privacy policy.
                                        </p>
                                    </div>
                                </motion.form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <style>{`
                    @media (max-width: 991px) {
                        .apply-grid {
                            grid-template-columns: 1fr !important;
                            gap: 40px !important;
                        }
                        .apply-grid > div:first-child {
                            position: static !important;
                        }
                    }
                `}</style>

                <CTA showButton={false} />
            </div>
        </PageWrapper>
    );
};

export default ApplyNow;
