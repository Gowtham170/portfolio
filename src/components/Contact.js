import React, {useState, useEffect} from 'react';

import emailjs from '@emailjs/browser';

export default function Contact() {

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const [status, setStatus] = useState('');

    useEffect(() => {
        if(status === 'Success') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
               .then((res) => {
                console.log('Success', res);
                setValues({
                    name: '',
                    email: '',
                    message: ''
                });
                setStatus('Success');
                     },
                (err) => {
                    console.log('Failed', err);
                });
    } 

  return (
      <section id='contact' className='bg-light py-2'>
          <div className='container-lg'>
              <div className='text-center'>
                  <h2 className='pt-4'>Contact Me</h2>
              </div>
              <div className='row justify-content-center my-5'>
                  <div className='col-lg-6 col-sm-10'>
                  {status && <div className='mx-auto px-4 mb-4 py-2 text-light bg-success text-center rounded'>
                          <p> your message submitted Successfully </p>
                      </div>}
                      <form onSubmit={sendEmail}>
                        <label htmlFor='email' className='form-label'>Email address:</label>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>
                                <i className='bi bi-envelope-fill'></i>
                            </span>
                            <input id='email'  name='email' value={values.email} onChange={handleChange} type='email' className='form-control' placeholder='e.g john@example.com' required></input>
                            <span className='input-group-text' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Enter an email address we can reply to.'>
                                <i className='bi bi-question-circle text-muted'></i>
                            </span>
                        </div>
                        <label htmlFor='name' className='form-label'>Name:</label>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>
                                <i className='bi bi-person-fill text-muted'></i>
                            </span>
                            <input id='name' name='name' value={values.name} onChange={handleChange} type='text' className='form-control' placeholder='eg. John' required></input>
                            <span className='input-group-text' data-bs-toggle='tooltip' data-bs-placement='bottom' title='Pretty self explanatory really...'>
                                <i className='bi bi-question-circle text-muted'></i>
                            </span>
                        </div>
                        <label htmlFor='message' className='form-label'>Message:</label>
                        <div className='input-group mb-4'>
                            <span className='input-group-text'>
                                <i className='bi bi-chat-text text-muted'></i>
                            </span>
                            <textarea id='message' name='message' value={values.message} onChange={handleChange} style={{height: '80px', resize:'none'}} className="form-control" required></textarea>
                        </div>
                        <div className="mb-4 text-center">
                                <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  );
}
