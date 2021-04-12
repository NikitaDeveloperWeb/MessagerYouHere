import React from 'react';

interface ButtonProps {
  value: string | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  className?: 'Button-primary' | 'Button-outline' | 'Button-warning';
}

const Button = ({ value, type, form, className }: ButtonProps) => {
  return (
    <button type={type} form={form} className={className}>
      {value}
    </button>
  );
};

export default Button;
