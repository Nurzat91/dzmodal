import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import {ButtonProps} from '../../types';

interface Props extends React.PropsWithChildren{
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  buttons?: ButtonProps[];
}

const Modal: React.FC<Props> = ({show, title, onClose, children, buttons }) => {

  if (!show) {
    return null;
  }

  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{display: show ? "block": "none"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose as React.MouseEventHandler<HTMLButtonElement>}></button>
            </div>
            {children}
          </div>
          <div className="modal-footer">
            {buttons &&
              buttons.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  className={`btn btn-${button.type}`}
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;