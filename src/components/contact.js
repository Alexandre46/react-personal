import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Form, FormLabel } from "react-bootstrap";
import { withTranslation } from "react-i18next";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_0GCXxagz",
      e.target,
      "user_dNokYX5Ebo1aMAvjNj39O"
    )

    .then(
      result => {
        console.log(result.text);
        document.getElementById("email-success").classList.remove("d-none");
        document.getElementById("email-error").classList.add("d-none");
      },
      error => {
        document.getElementById("email-error").classList.remove("d-none");
        document.getElementById("email-success").classList.add("d-none");
        console.log(error);
      }
    );
}
class ContactUs extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="row mt-3 pt-5">
        <span className="col-12"> {t("contactLabel")}</span>
        <Form className="col-12 contact-form" onSubmit={sendEmail}>
          <div className="col-12 mt-4 form-group">
            <div id="email-success" className="d-none bg-success alert-success">
              {" "}
              {t("contactWithSuccess")}
            </div>
            <div id="email-error" className="d-none bg-danger alert-danger">
              {" "}
              {t("contactWithError")}
            </div>
            <input type="hidden" name="contact_number" className="pt-3" />
            <FormLabel className="requiredLabel">{t("contactName")}</FormLabel>
            <input
              className="form-control input"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="col-12 form-group">
            <FormLabel className="requiredLabel">{t("contactEmail")}</FormLabel>
            <input
              className="form-control input"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="col-12 form-group">
            <FormLabel className="requiredLabel">
              {t("contactMessage")}
            </FormLabel>
            <textarea
              className="form-control form-text"
              name="message"
              minLength="10"
              required
            />
          </div>

          <div className="col-12 form-group">
            <input
              className="btn btn-block btn-outline-success"
              type="submit"
              value={t("contactSend")}
            />
          </div>
        </Form>
      </div>
    );
  }
}

export default withTranslation()(ContactUs);
