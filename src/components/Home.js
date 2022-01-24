import React from 'react';
import profile from '../assets/user.png'

export default function Home() {
  return (
    <section id='intro' className='py-2'>
      <div className='container-lg md-lg-5 pb-lg-5'>
        <div className='row p-2 justify-content-center align-items-center my-5'>
          <div className='col-md-5 text-center py-2 text-md-start'>
            <h1>
              <div className='dispaly-2'>Front-End Developer</div>
            </h1>
            <p className="lead pb-2">To obtain a challenging position in a high-quality engineering environment where my
              resourceful experience and skills will add value to the organizational operation.</p>
            <a href='gowtham-resume.pdf' download='gowtham-resume.pdf' className='btn btn-secondary'> Get Resume </a>
            <a href='#contact' className='btn btn-outline-secondary mx-2'> Contact me </a>
          </div>
          <div className='col-md-5 text-center d-none d-md-block'>
            <span>
              <img className='img-fluid bg-info border-0 rounded-circle my-3 p-3 shadow-lg'
                style={{ height: '220px', width: '220px' }}
                src={profile}
                alt='profile'
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                title='profile picture'
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
