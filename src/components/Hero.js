// src/components/Hero.js
import React from 'react';

const Hero = () => {
    return (
        <>
            <section style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '50px 100px',
                backgroundColor: '#f6f8fa',
            }}>
                <div style={{
                    maxWidth: '50%',
                }}>
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}>
                        $869 M funding raised by our apps{' '}
                        <span style={{
                            color: '#ff6f61',
                        }}>in 1 year!</span>
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '20px',
                    }}>
                        Techugo, a CMMI Level 3 company is a team of app developers creating digital experiences for global visionaries.
                    </p>
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
                        Let's Talk
                    </button>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '20px',
                }}>
                    <img src="/images/img.png" alt="Screenshot of app with user profile" style={{
                        width: '300px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }} />
                    <img src="/images/img2.png" alt="Screenshot of app with creator list" style={{
                        width: '300px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }} />
                </div>
            </section>

            {/* Blue Container Section */}
            <section style={{
                backgroundColor: '#0a2d3e',
                padding: '50px 30px',
                color: '#fff',
                borderRadius: '20px', // Rounded corners
                maxWidth: '80%', // Container width
                margin: '50px auto', // Center the container
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}>
                    <div style={{
                        textAlign: 'center',
                        minWidth: '150px',
                    }}>
                        <h3 style={{
                            marginBottom: '10px',
                            fontSize: '24px',
                            fontWeight: 'normal',
                        }}>Mobile Apps Developed</h3>
                        <p style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                        }}>1400+</p>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        minWidth: '150px',
                    }}>
                        <h3 style={{
                            marginBottom: '10px',
                            fontSize: '24px',
                            fontWeight: 'normal',
                        }}>Happy Partners</h3>
                        <p style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                        }}>800+</p>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        minWidth: '150px',
                    }}>
                        <h3 style={{
                            marginBottom: '10px',
                            fontSize: '24px',
                            fontWeight: 'normal',
                        }}>Industries Covered</h3>
                        <p style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                        }}>50+</p>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        minWidth: '150px',
                    }}>
                        <h3 style={{
                            marginBottom: '10px',
                            fontSize: '24px',
                            fontWeight: 'normal',
                        }}>Tech Enthusiasts</h3>
                        <p style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                        }}>200+</p>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        minWidth: '150px',
                    }}>
                        <h3 style={{
                            marginBottom: '10px',
                            fontSize: '24px',
                            fontWeight: 'normal',
                        }}>AI Solutions</h3>
                        <p style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                        }}>50+</p>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        minWidth: '150px',
                    }}>
                        <h3 style={{
                            marginBottom: '10px',
                            fontSize: '24px',
                            fontWeight: 'normal',
                        }}>Raised through developed Apps</h3>
                        <p style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                        }}>$869+ M</p>
                    </div>
                </div>
                <div style={{
                    textAlign: 'center',
                    marginTop: '20px',
                }}>
                    <a href="#see-for-yourself" style={{
                        color: '#fff',
                        fontSize: '16px',
                        textDecoration: 'underline',
                    }}>
                        See for yourself! ➔
                    </a>
                </div>
            </section>
            <section style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '50px 50px',
                backgroundColor: '#f6f8fa',
            }}>
                 <div style={{
                    maxWidth: '50%',
                }}>
            <h1 style={{
                        fontSize: '38px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        marginLeft: '40px'
                    }}>
                        Our developed products are well {' '}
                        <span style={{
                            color: 'green',
                        }}>funded </span>
                        by
                    </h1>
                    </div>
            </section>
            <section style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '50px 100px',
                backgroundColor: '#f6f8fa',
                marginBottom:'50px',
            }}>
                <div style={{
                    maxWidth: '50%',
                }}>
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}>
                        Awards & Recognition
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '20px',
                    }}>
                        With great work comes great recognition. Check our proudest moments here.
                    </p>
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
                       Consult our experts
                    </button>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '20px',
                }}>
                    <img src="/images/img.png" alt="Screenshot of app with user profile" style={{
                        width: '300px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }} />
                    <img src="/images/img2.png" alt="Screenshot of app with creator list" style={{
                        width: '300px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }} />
                </div>
            </section>
        </>
    );
};

export default Hero;
