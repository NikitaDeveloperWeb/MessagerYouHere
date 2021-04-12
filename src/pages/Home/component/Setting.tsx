import React from 'react';
import FormDeleteProfile from '../../../components/forms/FormDeleteProfile';
import FormEdit from '../../../components/forms/FormEdit';
import FormFeedback from '../../../components/forms/FormFeedback';
import FormPasswordEditor from '../../../components/forms/FormPasswordEdit';
import Option from '../../../components/Option';

function Setting() {
  return (
    <div className="Setting">
      <h1>Settings</h1>
      <br />
      <Option title="Edit your profile" children={<FormEdit />} />
      <Option title="Edit your password" children={<FormPasswordEditor />} />
      <Option title="Delete your profile" children={<FormDeleteProfile />} />
      <Option title="Feedback" children={<FormFeedback />} />
    </div>
  );
}

export default Setting;
