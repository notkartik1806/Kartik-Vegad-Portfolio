import { useEffect, useRef } from 'react';

const About = () => {
    const downloadResume = (e) => {
        // Add a subtle animation to the button
        const resumeBtn = e.target;
        resumeBtn.style.transform = 'scale(0.95)';

        setTimeout(() => {
            resumeBtn.style.transform = 'scale(1)';
        }, 150);

        const link = document.createElement('a');
        link.href = `${import.meta.env.BASE_URL}Resume - Kartik Vegad.pdf`;
        link.download = "Kartik_Vegad_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="section">
            <div className="section-container">
                <h2 className="section-title">About</h2>
                <div className="about-content-wrapper">
                    <div className="photo-container">
                        <div className="photo-frame">
                            <img src={`${import.meta.env.BASE_URL}images/kk.png`} alt="Kartik Vegad" className="profile-photo" />
                        </div>
                    </div>

                    <div className="about-text-wrapper">
                        <div className="about-text">
                            <p>I specialize in <strong>UI/UX</strong>, <strong>web development</strong>, <strong>graphic design</strong> <strong>and logo designing</strong>, blending creativity with technology to craft engaging digital experiences. Over the years, I've worked on branding, front-end design and user-centered solutions that bring ideas to life.</p>

                            <p>Beyond work, I enjoy playing the <strong>guitar</strong>, watching <strong>Formula 1</strong> and binge-watching classic <strong>TV shows</strong> and <strong>Movies</strong>. I'm always excited to explore new ideas and collaborate on projects that push creativity and innovation forward.</p>

                            <p>Look, I could write everything here, but let's be honest, <em>I'M TOO TIRED FOR THAT</em>. Just check my <strong>RESUME</strong>, it has all the details neatly packed for you.</p>
                        </div>
                    </div>
                </div>

                <div className="resume-container">
                    <button className="resume-btn" onClick={downloadResume}>
                        RESUME
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
