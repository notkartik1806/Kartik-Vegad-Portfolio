const CaseStudies = () => {
    return (
        <section id="case-studies" className="section">
            <div className="section-container">
                <h2 className="section-title">Case Studies</h2>
                <div className="cards-grid">
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="SaaS Dashboard Redesign" />
                        </div>
                        <h3 className="card-title">SaaS Dashboard Redesign</h3>
                        <p className="card-description">Complete redesign of a SaaS dashboard improving user engagement by 40% and reducing support tickets.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="E-learning Platform" />
                        </div>
                        <h3 className="card-title">E-learning Platform</h3>
                        <p className="card-description">Design and development of an interactive e-learning platform with focus on accessibility and engagement.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="Fintech Mobile App" />
                        </div>
                        <h3 className="card-title">Fintech Mobile App</h3>
                        <p className="card-description">User experience design for a fintech mobile application emphasizing security and ease of use.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/examplary.png" alt="Another Case Study" />
                        </div>
                        <h3 className="card-title">Another Case Study</h3>
                        <p className="card-description">A fourth case study card to demonstrate the 4-column layout.</p>
                    </div>
                </div>
                <div className="section-btn-container">
                    <a href="#case-studies" className="primary-btn">View All Case Studies</a>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
