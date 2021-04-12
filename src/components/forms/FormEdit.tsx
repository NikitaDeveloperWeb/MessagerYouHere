import React from 'react';
import Button from '../Button';
import Field from '../Field';
// icons
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FaceIcon from '@material-ui/icons/Face';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

function FormEdit() {
  return (
    <form className="Form-auth" id="form-edit">
      <h2>Edit account</h2>
      <Field
        type="e-mail"
        name="Mail"
        className="Field-primory"
        placeholder="Mail"
        form="form-edit"
        icon={<MailIcon />}
      />
      <Field
        type="text"
        name="Phone"
        className="Field-primory"
        placeholder="Phone"
        form="form-edit"
        icon={<PhoneAndroidIcon />}
      />
      <Field
        type="text"
        name="Username"
        className="Field-primory"
        placeholder="Username"
        form="form-edit"
        icon={<PersonIcon />}
      />
      <Field
        type="text"
        name="Firstname"
        className="Field-primory"
        placeholder="Firstname"
        form="form-edit"
        icon={<FaceIcon />}
      />
      <Field
        type="text"
        name="Lastname"
        className="Field-primory"
        placeholder="Lastname"
        form="form-edit"
        icon={<PeopleAltIcon />}
      />

      <Button value="Edit" className="Button-primary" form="form-edit" type="submit" />
    </form>
  );
}

export default FormEdit;
