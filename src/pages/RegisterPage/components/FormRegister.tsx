import React from 'react';
import Button from '../../../components/Button';
import Field from '../../../components/Field';
import { Link } from 'react-router-dom';
// icons
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FaceIcon from '@material-ui/icons/Face';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

function FormRegister() {
  return (
    <form className="Form-auth" id="form-registration">
      <h2>Create account</h2>
      <Field
        type="e-mail"
        name="Mail"
        className="Field-primory"
        placeholder="Mail"
        form="form-registration"
        icon={<MailIcon />}
      />
      <Field
        type="text"
        name="Phone"
        className="Field-primory"
        placeholder="Phone"
        form="form-registration"
        icon={<PhoneAndroidIcon />}
      />
      <Field
        type="text"
        name="Username"
        className="Field-primory"
        placeholder="Username"
        form="form-registration"
        icon={<PersonIcon />}
      />
      <Field
        type="text"
        name="Firstname"
        className="Field-primory"
        placeholder="Firstname"
        form="form-registration"
        icon={<FaceIcon />}
      />
      <Field
        type="text"
        name="Lastname"
        className="Field-primory"
        placeholder="Lastname"
        form="form-registration"
        icon={<PeopleAltIcon />}
      />
      <Field
        type="password"
        name="Password"
        className="Field-primory"
        placeholder="Password"
        form="form-registration"
        icon={<VpnKeyIcon />}
      />
      <Field
        type="password"
        name="Password_reapeat"
        className="Field-primory"
        placeholder="Repeat password"
        form="form-registration"
        icon={<VpnKeyIcon />}
      />
      <Button value="Sign up" className="Button-primary" form="form-registration" type="submit" />
      <p>
        <Link to="/">Login</Link> <Link to="/recovery">Recovery</Link>
      </p>
    </form>
  );
}

export default FormRegister;
