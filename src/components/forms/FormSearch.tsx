import React from 'react';
import Field from '../Field';
import SearchIcon from '@material-ui/icons/Search';
function FormSearch() {
  return (
    <form className="Form--search" id="form-search" method="post" name="search">
      <Field
        type="text"
        name="usernameSearch"
        className="Field-primory"
        placeholder="Enter username"
        form="form-search"
        icon={<SearchIcon />}
      />
    </form>
  );
}

export default FormSearch;
