import React from 'react';
import emailjs from 'emailjs-com';
import { Form, FormLabel, FormText } from 'react-bootstrap'
export default function ContactUs() {

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_0GCXxagz', e.target, 'user_dNokYX5Ebo1aMAvjNj39O')
      
      .then((result) => {
        console.log(result.text);
        document.getElementById('email-success').classList.remove('d-none');
        document.getElementById('email-error').classList.add('d-none');
      }, (error) => {
          document.getElementById('email-error').classList.remove('d-none');
          document.getElementById('email-success').classList.add('d-none');
          console.log(error);
      });
  }

  return (
      <div class="w-100">
        <p class="p-3"> Feel free to contact me for any reason, don't forget to put your identification</p>
        <Form className="contact-form" onSubmit={sendEmail}>

        <div class="col-12 mt-4 form-group">
        <div id="email-success" class="d-none bg-success alert-success"> Email sent with success</div>
        <div id="email-error" class="d-none bg-danger alert-danger"> Email sent with success</div>

            <input type="hidden" name="contact_number" class="pt-3" />
            <FormLabel>Name</FormLabel>
            <input class="form-control input" type="text" name="name" />
        </div>

        <div class="col-12 form-group">
            <FormLabel>Email</FormLabel>
            <input class="form-control input" type="email" name="email" />
        </div>

        <div class="col-12 form-group">
            <FormLabel>Message</FormLabel>
            <textarea class="form-control form-text" name="message" />
        </div>

        <div class="col-12 form-group">
            <input class="btn btn-block btn-outline-success" type="submit" value="Send" />
        </div>

        
        </Form>
      </div>

  );
}