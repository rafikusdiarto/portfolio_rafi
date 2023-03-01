import React from 'react'
import './contact.css'
import { useRef} from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_o2je3r5', 
      'template_x2043e8', 
      form.current, 
      'j-Wb6svHB472zcezq')
      .then((result) => {
          console.log(result.text);
          console.log("Success send")
          
      }, (error) => {
          console.log(error.text);
          console.log("Error send")
      });
      e.target.reset()
      
  };

    return (
    <>
      <section id="contact" class="contact">
        <div class="container p-3">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <h2>Contact</h2>
                <div class="col-6">
                  <div class="info">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-geo-alt"></i>
                      <p>Sidoarjo<br/>East Java, 61265</p>
                    </div>

                    <div class="d-flex align-items-center mt-4">
                      <i class="bi bi-envelope"></i>
                      <p>rafikusdiarto1707@gmail.com</p>
                    </div>

                    <div class="d-flex align-items-center mt-4">
                      <i class="bi bi-phone"></i>
                      <p>0878-0968-0106</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <form class="php-email-form" ref={form} onSubmit={sendEmail}>
                    <div class="form-group">
                      <input type="text" name="user_name" class="form-control" id="name" placeholder="Your Name"  required />
                    </div>
                    <div class="form-group mt-3">
                      <input type="email" class="form-control" name="user_email" id="email" placeholder="Your Email"required/>
                    </div>
                    <div class="form-group mt-3">
                      <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div class="text-center my-3">
                      <button type="submit" value="send" >Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
export default Contact