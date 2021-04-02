import React from 'react';
import Button from '../../../components/Button';
import Field from '../../../components/Field';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
function FormLogin() {
  return (
    <form className="form" id="form-auth">
      <Field
        type="e-mail"
        name="Mail"
        className="Field-primory"
        placeholder="Mail"
        form="form-auth"
        icon={<PersonIcon />}
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
    </form>
  );
}

export default FormLogin;
