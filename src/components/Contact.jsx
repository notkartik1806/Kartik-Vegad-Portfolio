const Contact = () => {
    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kartikvegad/', icon: `${import.meta.env.BASE_URL}logo/linkedin.svg` },
        { name: 'GitHub', url: 'https://github.com/notkartik1806', icon: `${import.meta.env.BASE_URL}logo/github.svg` },
        { name: 'Instagram', url: 'https://instagram.com/kkar._.tikk', icon: `${import.meta.env.BASE_URL}logo/insta.svg` },
        { name: 'Cosmos', url: 'https://www.cosmos.so/kartik.18', icon: `${import.meta.env.BASE_URL}logo/cosmos.svg` },
        { name: 'Medium', url: 'https://medium.com/@kartikvegad1806', icon: `${import.meta.env.BASE_URL}logo/medium.svg` },
        { name: 'X', url: 'https://x.com/KartikVegad9', icon: `${import.meta.env.BASE_URL}logo/x.svg` },
        { name: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=kartikvegad1806@gmail.com', icon: `${import.meta.env.BASE_URL}logo/mail.svg` },
        { name: 'Behance', url: 'https://www.behance.net/kartikvegad', icon: `${import.meta.env.BASE_URL}logo/behance.svg` },
        { name: 'Discord', url: 'https://discord.com/channels/@not._.kar_tik', icon: `${import.meta.env.BASE_URL}logo/discord.svg` },
        { name: 'Pinterest', url: 'https://in.pinterest.com/kartikvegad1806/', icon: `${import.meta.env.BASE_URL}logo/pinterest.svg` },
    ];

    return (
        <section id="contact" className="section">
            <div className="section-container">
                <h2 className="section-title">Contact & Connect</h2>
                <p className="contact-description">Let's work together! Reach out for collaborations and opportunities.</p>

                <div className="social-links contact-social-links">
                    {socialLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            className="social-link"
                            aria-label={link.name}
                            rel="noopener noreferrer"
                            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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
