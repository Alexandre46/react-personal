import React, { useCallback, useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, FormLabel } from 'react-bootstrap';
import { useTranslation, withTranslation } from 'react-i18next';
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const emailJsTemplateId = 'template_0GCXxagz';
const emailJsUserId = 'user_dNokYX5Ebo1aMAvjNj39O';

const Contact: FC = () => {
  const form = useRef();
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [isValidRecaptcha, setIsValidRecaptcha] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  //Google reCaptcha v3
  const siteKey = process.env.REACT_APP_SITE_KEY;
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  const { t } = useTranslation();

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setLoading(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm('gmail', emailJsTemplateId, form.current, emailJsUserId)

        .then(
          (result) => {
            document.getElementById('email-success').classList.remove('d-none');
            document.getElementById('email-error').classList.add('d-none');
          },
          (error) => {
            document.getElementById('email-error').classList.remove('d-none');
            document.getElementById('email-success').classList.add('d-none');
          }
        );
    } catch (error) {
      console.log('error', error);
    }

    resetForm();
  };

  return (
    <div className="row mt-3 pt-5">
      <span className="col-12"> {t('contactLabel')}</span>
      <Form ref={form} className="col-12 contact-form" onSubmit={sendEmail}>
        <div className="col-12 mt-4 form-group">
          <div id="email-success" className="d-none bg-success alert-success">
            {' '}
            {t('contactWithSuccess')}
          </div>
          <div id="email-error" className="d-none bg-danger alert-danger">
            {' '}
            {t('contactWithError')}
          </div>
          <input type="hidden" name="contact_number" className="pt-3" />
          <FormLabel className="requiredLabel">{t('contactName')}</FormLabel>
          <input
            className="form-control input"
            type="text"
            name="name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="col-12 form-group">
          <FormLabel className="requiredLabel">{t('contactEmail')}</FormLabel>
          <input
            className="form-control input"
            type="email"
            name="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-12 form-group">
          <FormLabel className="requiredLabel">{t('contactMessage')}</FormLabel>
          <textarea
            className="form-control form-text"
            name="message"
            minLength="10"
            defaultValue={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="row my-4">
          <div className="col-12 col-lg-6 form-group">
            <input
              className="btn btn-block w-100 btn-outline-success"
              type="submit"
              value={t('contactSend')}
              onClick={sendEmail}
            />
          </div>

          <div className="col-12 col-lg-6 form-group">
            <input
              className="btn btn-block w-100 btn-outline-info"
              value={t('contactClear')}
              onClick={() => resetForm()}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withTranslation()(Contact);
