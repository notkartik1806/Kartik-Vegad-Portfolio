import { useEffect } from 'react';
import GridBackground from './components/GridBackground';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
    useEffect(() => {
        // Intersection Observer for section visibility
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <GridBackground />
            <Navigation />
            <Landing />
            <About />
            <Projects />
            <CaseStudies />
            <Blogs />
            <Contact />
        </>
    );
}

export default App;
