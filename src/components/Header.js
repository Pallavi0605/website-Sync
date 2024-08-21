import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header className="header">
            <div className="header-left">
                <img src="/images/logo.png" alt="Techugo Logo" />
            </div>
            <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: '#e3eef2', borderRadius: '30px' }}>
                    <a href="#whatsapp" style={{ display: 'inline-block', color: '#000', fontSize: '24px' }}>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <div style={{ width: '1px', height: '24px', backgroundColor: '#ccc', margin: '0 8px' }}></div>
                    <div style={{ position: 'relative' }}>
                        <a
                            href="#call"
                            style={{ display: 'inline-block', color: '#000', fontSize: '24px' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </a>
                        {isHovered && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 10px)',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#fff',
                                    padding: '16px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    zIndex: 1000,
                                }}
                            >
                                <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Write Us</p>
                                <p style={{ margin: '0 0 8px 0' }}>sales@techugo.com</p>
                                <p style={{ margin: '0 0 4px 0' }}>+91 987-014-0055 (Sales)</p>
                                <p style={{ margin: '0 0 4px 0' }}>+1 360-322-4913 (Sales US)</p>
                                <p style={{ margin: '0' }}>+91 995-806-8889 (HR)</p>
                            </div>
                        )}
                    </div>
                </div>
                <button style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#00bfff',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}>
                    Get in Touch
                </button>
            </div>
        </header>
    );
};

export default Header;
