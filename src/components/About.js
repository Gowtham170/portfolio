import React from 'react';

import profile from '../assets/profile_pic.jpg';

export default function About() {
  return(
    <section id='about' className='mt-5 py-2'>
      <div className='container-lg pb-4'>
        <div className='text-center'>
          <h2 className='pb-4'>About Me</h2>
        </div>
        <div className="card mb-5 mx-auto shadow" style={{ maxWidth: '900px' }}>
          <div className="row no-gutters">
            <div className="col-lg-4 d-none d-lg-block">
              <img src={profile} className="card-img m-3 pe-2" data-bs-toggle='tooltip' data-bs-placement='bottom' title='profile picture' style={{ height: 320, width: 250 }} alt="..." />
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="card-body">
                <h4 className="card-title text-muted">Hi, I'm Gowtham, Nice to meet you.</h4>
                <p className="card-text">Front-End developer with background knowledge of React JS & React Native
                  along with building application with atmost efficiency.
                  Engineering graduate with excellent problem-solving and ability
                  to perform well in a team.</p>
                <h5 className="card-title text-dark">Here are a few highlights: </h5>
                <ul className='card-text'>
                  <li className='mb-2 mb-md-3 h6 text-muted text-lg-start'>Hands-on Expericence in Express JS and MongoDB</li>
                  <li className='mb-2 mb-md-3 h6 text-muted text-lg-start'>Web and mobile app development</li>
                  <li className='mb-2 mb-md-3 h6 text-muted text-lg-start'>Responsive Front-End Design</li>
                  <li className='mb-2 mb-md-3 h6 text-muted text-lg-start'>React and React native</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
