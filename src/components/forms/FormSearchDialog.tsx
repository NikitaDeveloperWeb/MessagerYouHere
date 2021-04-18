import React from 'react';
import Field from '../Field';
import SearchIcon from '@material-ui/icons/Search';
function FormSearchDialogs() {
  return (
    <form
      className="Form--search-dialog"
      id="form-search-dialog"
      method="post"
      name="search-dialog">
      <Field
        type="text"
        name="usernameSearch-dialog"
        className="Field-primory"
        placeholder="Enter username"
        form="form-search-dialog"
        icon={<SearchIcon />}
      />
    </form>
  );
}

export default FormSearchDialogs;
