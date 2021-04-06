import React from 'react';
import Button from '../../../components/Button';
import Field from '../../../components/Field';
import { Link } from 'react-router-dom';
// icons
import MailIcon from '@material-ui/icons/Mail';

function FormRecovery() {
  return (
    <form className="Form-auth" id="form-recovery">
      <h2>Recovery account</h2>
      <Field
        type="e-mail"
        name="Mail"
        className="Field-primory"
        placeholder="Mail"
        form="form-recovery"
        icon={<MailIcon />}
      />

      <Button value="Send" className="Button-primary" form="form-registration" type="submit" />
      <p>
        <Link to="/">Login</Link> <Link to="/register">Registration</Link>
      </p>
    </form>
  );
}

export default FormRecovery;
