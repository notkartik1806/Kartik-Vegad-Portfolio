const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>
                <div className="cards-grid">
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="E-commerce Platform" />
                        </div>
                        <h3 className="card-title">E-commerce Platform</h3>
                        <p className="card-description">A modern e-commerce solution with seamless user experience and robust backend functionality.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="Brand Identity System" />
                        </div>
                        <h3 className="card-title">Brand Identity System</h3>
                        <p className="card-description">Complete brand identity design including logo, typography, and visual guidelines for a tech startup.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="Mobile App Design" />
                        </div>
                        <h3 className="card-title">Mobile App Design</h3>
                        <p className="card-description">User-centered mobile application design focusing on intuitive navigation and engaging interactions.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="Web Application" />
                        </div>
                        <h3 className="card-title">Web Application</h3>
                        <p className="card-description">Full-stack web application with modern frontend frameworks and scalable backend architecture.</p>
                    </div>
                </div>
                <div className="section-btn-container">
                    <a href="#projects" className="primary-btn">View All Projects</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
