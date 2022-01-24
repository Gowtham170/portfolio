import React from 'react';

export default function Navbar() {

  return(
      <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
              <a href='#intro' className='navbar-brand'>
                <span className='fw-bold text-secondary'>portfolio</span>
              </a>
              <button className='navbar-toggler'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#main-nav'
                      aria-controls='main-nav'
                      aria-expanded='false'
                      aria-label='Toggle navigation'>
                      <span className='navbar-toggler-icon'></span>
              </button>
              <div id='main-nav' className='collapse navbar-collapse justify-content-end align-item-center'>
                  <ul className='navbar-nav'>
                      <li className='navbar-item'>
                          <a href='#about' className='nav-link'>About</a>
                      </li>
                      <li className='navbar-item'>
                          <a href='#resume' className='nav-link '>Resume</a>
                      </li>
                      <li className='navbar-item'>
                          <a href='#contact' className='nav-link'>Contact</a>
                      </li>
                      <li className='navbar-item ms-2 d-none d-md-block'>
                        <a  href='gowtham-resume.pdf' download='gowtham-resume.pdf' className='btn btn-secondary'> Get Resume </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  ); 
}
