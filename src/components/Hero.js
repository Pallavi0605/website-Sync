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
    maxWidth: '90%', // Slightly wider container
    margin: '50px auto', // Center the container
}}>
    <div style={{
        textAlign: 'left',
        marginBottom: '30px',
    }}>
        <h1 style={{ 
            fontSize: '36px',
        }}>Why <span style={{ color: 'yellow' }}>Techugo</span> for your next project?</h1>
    </div>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
    }}>
        {/* Card 1 */}
        <div style={{
            backgroundColor: '#133b4a',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            minWidth: '150px',
            flex: '1',
        }}>
            <h3 style={{
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: 'normal',
            }}>Mobile Apps Developed</h3>
            <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
            }}>1400+</p>
        </div>
        
        {/* Card 2 */}
        <div style={{
            backgroundColor: '#133b4a',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            minWidth: '150px',
            flex: '1',
        }}>
            <h3 style={{
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: 'normal',
            }}>Happy Partners</h3>
            <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
            }}>800+</p>
        </div>
        
        {/* Card 3 */}
        <div style={{
            backgroundColor: '#133b4a',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            minWidth: '150px',
            flex: '1',
        }}>
            <h3 style={{
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: 'normal',
            }}>Industries Covered</h3>
            <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
            }}>50+</p>
        </div>
        
        {/* Card 4 */}
        <div style={{
            backgroundColor: '#133b4a',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            minWidth: '150px',
            flex: '1',
        }}>
            <h3 style={{
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: 'normal',
            }}>Tech Enthusiasts</h3>
            <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
            }}>200+</p>
        </div>
        
        {/* Card 5 */}
        <div style={{
            backgroundColor: '#133b4a',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            minWidth: '150px',
            flex: '1',
        }}>
            <h3 style={{
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: 'normal',
            }}>AI Solutions</h3>
            <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
            }}>50+</p>
        </div>
        
        {/* Card 6 */}
        <div style={{
            backgroundColor: '#133b4a',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            minWidth: '150px',
            flex: '1',
        }}>
            <h3 style={{
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: 'normal',
            }}>Raised through developed Apps</h3>
            <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
            }}>$869+ M</p>
        </div>
    </div>
    <div style={{
        textAlign: 'center',
        marginTop: '30px',
    }}>
        <a href="#see-for-yourself" style={{
            color: '#8bd9cb',
            fontSize: '18px',
            textDecoration: 'underline',
            display: 'inline-block',
            fontWeight: 'bold',
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
                    maxWidth: '100%',
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
                    <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap', 
          marginTop: '40px',
        }}
      >
        {/* Replace with actual image paths */}
        <img src="" alt="Microsoft" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Google" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Sequoia" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Goldman Sachs" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Matrix Partners" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Incubate Fund" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Titan Capital" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Saama" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Y Combinator" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="TA Ventures" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="XRM Media" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="UTV" style={{ maxHeight: '60px', margin: '20px' }} />
      </div>

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
                    <img src="/images/img.png" alt="Screenshot " style={{
                        width: '300px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }} />
                    <img src="/images/img2.png" alt="Screenshot " style={{
                        width: '300px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }} />
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
                    maxWidth: '100%',
                }}>
            <h1 style={{
                        fontSize: '38px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        marginLeft: '40px'
                    }}>
                        Exceptional results for Startups & Fortune companies 
                        
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '20px',
                        marginLeft: '30px',
                    }}>
                        Partnered with great brands and entrepreneurs all over the world; Fortune 500, Fortune 200, Global 2000 companies and world’s largest political party of current Indian Prime Minister- Mr. Narendra Modi.
                    </p>
                    <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap', 
          marginTop: '40px',
        }}
      >
        {/* Replace with actual image paths */}
        <img src="" alt="airtel" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="dhanuka" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="pml" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="ava" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="lotus" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="lalio" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="phillips" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="indofil" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="whitehat" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="byjus" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="bajaj finserv" style={{ maxHeight: '60px', margin: '20px' }} />
        
      </div>

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
                    maxWidth: '100%',
                }}>
            <h1 style={{
                        fontSize: '38px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        marginLeft: '40px'
                    }}>
                    Exceptional results for the government sector to
boost the national economy.
                        
                    </h1>
                    
                    <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap', 
          marginTop: '40px',
        }}
      >
        
        <img src="" alt="ceci" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="watercomission" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="corridor" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Serviceman Welfare" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="esic" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="Public Relations" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="nicdc" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="pesb" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="NIC" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="STPI" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="updesco" style={{ maxHeight: '60px', margin: '20px' }} />
        <img src="" alt="GOV" style={{ maxHeight: '60px', margin: '20px' }} />
      </div>

                    </div>
            </section>

        </>
    );
};

export default Hero;
