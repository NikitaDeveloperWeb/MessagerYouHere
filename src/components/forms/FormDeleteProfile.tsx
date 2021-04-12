import React from 'react';
import Button from '../Button';

function FormDeleteProfile() {
  return (
    <form className="Form-auth" id="form-delete-profile" method="post">
      <h2>Delete profile</h2>
      <h3 style={{ textAlign: 'center' }}>You are sure?</h3>
      <Button value="Delete" className="Button-warning" form="form-delete-profile" type="submit" />
    </form>
  );
}

export default FormDeleteProfile;
