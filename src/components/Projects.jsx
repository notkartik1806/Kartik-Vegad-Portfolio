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
                    <div className="card">
                        <div className="card-image">
                            <img src={`${import.meta.env.BASE_URL}images/examplary.png`} alt="Brand Identity System" />
                        </div>
                        <h3 className="card-title">Brand Identity System</h3>
                        <p className="card-description">Complete brand identity design including logo, typography, and visual guidelines for a tech startup.</p>
                    </div>
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
