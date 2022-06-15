import { useForm } from "@formspree/react";
import React from "react";

interface Props {}
export const Contact: React.FC<Props> = () => {
  const [state, handleSubmit] = useForm("xgedqqvq");

  if (state.succeeded) {
    return (
      <div className="form-sent container">
        <p>
          {`Your message has been sent. \nI will be reaching out to you as soon as I can.`}
        </p>
      </div>
    );
  }

  return (
    <div className="contact-wrapper container">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="first-last-name-wrapper">
          <label className="text-input">
            <span>First name*</span>
            <input required name="First name" placeholder="First name" />
            <span className="invalid-input-error">This field is required</span>
          </label>
          <label className="text-input">
            <span>Last name*</span>
            <input required name="Last name" placeholder="Last name" />
            <span className="invalid-input-error">This field is required</span>
          </label>
        </div>

        <label className="text-input">
          <span>Email*</span>
          <input type={"email"} required name="Email" placeholder="Email" />
          <span className="invalid-input-error">
            Please enter a valid Email address
          </span>
        </label>

        <label className="contact-textarea-wrapper">
          <span>Message*</span>
          <textarea className="contact-textarea" required name="Message" />
          <span className="invalid-input-error">This field is required</span>
        </label>

        <button className="primary-btn send-btn" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
};
