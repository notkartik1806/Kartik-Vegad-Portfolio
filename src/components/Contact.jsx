const Contact = () => {
    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kartikvegad/', icon: '/logo/linkedin.svg' },
        { name: 'GitHub', url: 'https://github.com/notkartik1806', icon: '/logo/github.svg' },
        { name: 'Instagram', url: 'https://instagram.com', icon: '/logo/insta.svg' },
        { name: 'Cosmos', url: 'https://www.cosmos.so/kartik.18', icon: '/logo/cosmos.svg' },
        { name: 'Medium', url: 'https://medium.com/@kartikvegad1806', icon: '/logo/medium.svg' },
        { name: 'X', url: 'https://x.com/KartikVegad9', icon: '/logo/x.svg' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=kartikvegad1806@gmail.com', icon: '/logo/mail.svg' },
        { name: 'Behance', url: 'https://www.behance.net/kartikvegad', icon: '/logo/behance.svg' },
        { name: 'Discord', url: 'https://discord.com/channels/@not._.kar_tik', icon: '/logo/discord.svg' },
        { name: 'Pinterest', url: 'https://in.pinterest.com/kartikvegad1806/', icon: '/logo/pinterest.svg' },
    ];

    return (
        <section id="contact" className="section">
            <div className="section-container">
                <h2 className="section-title">Contact & Connect</h2>
                <p className="contact-description">Let's work together! Reach out for collaborations and opportunities.</p>

                <div className="social-links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            className="social-link"
                            aria-label={link.name}
                            rel="noopener noreferrer"
                        >
                            <img src={link.icon} alt={link.name} className="social-icon" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
