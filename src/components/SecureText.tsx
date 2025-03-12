import React from 'react';

interface SecureTextProps {
  text: string;
  className?: string;
}

const SecureText: React.FC<SecureTextProps> = ({ text, className = '' }) => {
  return (
    <span 
      className={`select-none ${className}`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
      }}
    >
      {text}
    </span>
  );
};

export default SecureText;