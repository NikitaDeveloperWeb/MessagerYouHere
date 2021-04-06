import React from 'react';
import Button from '../../../components/Button';
import Field from '../../../components/Field';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
function FormLogin() {
  return (
    <form className="Form-auth" id="form-auth">
      <h2>Go in</h2>
      <Field
        type="e-mail"
        name="Mail"
        className="Field-primory"
        placeholder="Mail"
        form="form-auth"
        icon={<MailIcon />}
      />
      <Field
        type="password"
        name="Password"
        className="Field-primory"
        placeholder="Password"
        form="form-auth"
        icon={<VpnKeyIcon />}
      />
      <Button value="Sign in" className="Button-primary" form="form-auth" type="submit" />
      <p>
        <Link to="/registration">Registration</Link> <Link to="/recovery">Recovery</Link>
      </p>
    </form>
  );
}

export default FormLogin;
