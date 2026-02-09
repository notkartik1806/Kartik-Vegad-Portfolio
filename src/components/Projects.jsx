const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>
                <div className="cards-grid projects-grid">
                    <a href="https://dot-site.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                        <div className="card">
                            <div className="card-image">
                                <img src={`${import.meta.env.BASE_URL}images/ProjectDot.png`} alt="DOT" />
                            </div>
                            <h3 className="card-title">DOT.</h3>
                            <p className="card-description">DOT. is a modern web focused digital service platform that transforms ideas into scalable interactive web solutions. And I am the FOUNDER of it.</p>
                        </div>
                    </a>
                    <a href="https://happy-winds.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                        <div className="card">
                            <div className="card-image">
                                <img src={`${import.meta.env.BASE_URL}images/ProjectHappywinds.png`} alt="Happywinds" />
                            </div>
                            <h3 className="card-title">Happywinds</h3>
                            <p className="card-description">
                                Happywinds is a growing brand with a digital presence built to serve its audience with clarity and trust. I redesigned their website to enhance visual appeal, improve structure and create a more engaging user experience.
                            </p>
                        </div>
                    </a>

                    <div className="card">
                        <div className="card-image">
                            <img src={`${import.meta.env.BASE_URL}images/examplary.png`} alt="Mobile App Design" />
                        </div>
                        <h3 className="card-title">Mobile App Design</h3>
                        <p className="card-description">User-centered mobile application design focusing on intuitive navigation and engaging interactions.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={`${import.meta.env.BASE_URL}images/examplary.png`} alt="Web Application" />
                        </div>
                        <h3 className="card-title">Web Application</h3>
                        <p className="card-description">Full-stack web application with modern frontend frameworks and scalable backend architecture.</p>
                    </div>
                </div>
                <div className="section-btn-container">
                    <a href="#projects" className="primary-btn section-btn">View All Projects</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
