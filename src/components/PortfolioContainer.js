import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import data from '../data';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Projects') {
      const projects = data.map(item => {
        return (
          <Projects
            key={item.id}
            {...item}
          />
        )
      })
      return (
        <div>
          <section className='project--section'>
            {projects}
          </section>
        </div>
      );
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
  }
};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavLinks
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}