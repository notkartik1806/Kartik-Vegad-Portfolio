const Blogs = () => {
    return (
        <section id="blogs" className="section">
            <div className="section-container">
                <h2 className="section-title">Blogs</h2>
                <div className="cards-grid">
                    <a href="https://medium.com/@kartikvegad1806/design-principles-edition-i-fce1cc59d5f1" className="card-link" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <div className="card-image">
                                <img src={`${import.meta.env.BASE_URL}images/blog1.png`} alt="Design Principles" />
                            </div>
                            <h3 className="card-title">Design Principles Edition I</h3>
                            <p className="card-description">Exploring the 7 fundamental principles that guide effective design decisions and create meaningful user experiences.</p>
                        </div>
                    </a>

                    <a href="https://medium.com/@kartikvegad1806/brutalism-the-beauty-of-raw-design-fcca8e70b58e" className="card-link" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <div className="card-image">
                                <img src={`${import.meta.env.BASE_URL}images/blog2.png`} alt="Brutalism: The Beauty of Raw Design" />
                            </div>
                            <h3 className="card-title">Brutalism: The Beauty of Raw Design</h3>
                            <p className="card-description">Diving into the raw, unrefined aesthetic of brutalist design and its powerful impact on modern digital experiences.</p>
                        </div>
                    </a>
                    <div className="card">
                        <div className="card-image">
                            <img src={`${import.meta.env.BASE_URL}images/examplary.png`} alt="UI/UX Insights" />
                        </div>
                        <h3 className="card-title">UI/UX Insights</h3>
                        <p className="card-description">Deep dives into user interface design and user experience optimization strategies.</p>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src={`${import.meta.env.BASE_URL}images/examplary.png`} alt="Another Blog" />
                        </div>
                        <h3 className="card-title">Another Blog</h3>
                        <p className="card-description">A fourth blog card to demonstrate the 4-column layout.</p>
                    </div>
                </div>
                <div className="section-btn-container">
                    <a href="https://medium.com/@kartikvegad1806" target="_blank" rel="noopener noreferrer" className="primary-btn">Read More Blogs</a>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
