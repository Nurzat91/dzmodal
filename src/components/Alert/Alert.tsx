import React from 'react';

interface AlertProps extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
}
const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  const alertClassName = `alert alert-warning alert-dismissible fade show alert-${type} mt-3`;

  return (
    <div className={alertClassName} role="alert">
      {children}
      {onDismiss && (
        <button type="button" className="btn-close" onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;