import { useRef } from 'react';

const Landing = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        const landingSection = document.querySelector('.landing-section');

        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        // Add a subtle animation to the landing section
        if (landingSection) {
            landingSection.style.transform = 'scale(0.95)';
            landingSection.style.opacity = '0.8';

            setTimeout(() => {
                landingSection.style.transform = 'scale(1)';
                landingSection.style.opacity = '1';
            }, 800);
        }
    };

    return (
        <section id="landing" className="landing-section">
            <div className="content">
                <button className="name-button" onClick={scrollToAbout}>
                    <h1 className="name">Kartik Vegad</h1>
                </button>
            </div>
        </section>
    );
};

export default Landing;
