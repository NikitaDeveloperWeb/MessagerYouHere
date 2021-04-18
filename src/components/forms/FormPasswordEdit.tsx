import React from 'react';
import Button from '../Button';
import Field from '../Field';

// icons
import VpnKeyIcon from '@material-ui/icons/VpnKey';

function FormPasswordEditor() {
  return (
    <form className="Form-auth" id="form-password-editor">
      <h2>Edit password</h2>

      <Field
        type="password"
        name="Password"
        className="Field-primory"
        placeholder="New password"
        form="form-password-editor"
        icon={<VpnKeyIcon />}
      />
      <Field
        type="password"
        name="Password_reapeat"
        className="Field-primory"
        placeholder="Repeat new password"
        form="form-password-editor"
        icon={<VpnKeyIcon />}
      />
      <Button value="Edit" className="Button-primary" form="form-password-editor" type="submit" />
    </form>
  );
}

export default FormPasswordEditor;
