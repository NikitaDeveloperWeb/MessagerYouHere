import React from 'react';
import Button from '../Button';

function FormFeedback() {
  return (
    <form className="Form-auth" id="form-feedback" style={{ width: '50%' }}>
      <h2>Feedback</h2>
      <label htmlFor="message" style={{ fontSize: '20px' }}>
        Message:
      </label>
      <textarea
        className="feedback-textarea"
        placeholder="Enter your message.."
        maxLength={250}
        name="message"
        form="form-feedback"
        readOnly></textarea>
      <Button value="Submit" className="Button-primary" form="form-feedback" type="submit" />
    </form>
  );
}

export default FormFeedback;
