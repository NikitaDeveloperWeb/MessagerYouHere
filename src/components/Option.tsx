import React from 'react';

interface OptionsProps {
  children: JSX.Element | JSX.Element[] | Element | Element[];
  title: string;
}

function Option({ children, title }: OptionsProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (state: boolean) => {
    setOpen(!state);
  };
  return (
    <div className="Options">
      <div className="Options__preview">
        <h3>{title}</h3>
        <button onClick={() => handleOpen(open)}>{!open ? 'Open' : 'Close'}</button>
      </div>
      <div className={open ? 'Options__setting' : 'Options__setting_close'}>
        {children}
        <span></span>
      </div>
    </div>
  );
}

export default Option;
