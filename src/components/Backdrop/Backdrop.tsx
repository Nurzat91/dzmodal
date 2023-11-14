import React from 'react';
interface Props{
  show: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> | (() => void);
}

const Backdrop: React.FC<Props> = ({show, onClick}) => {
  return (
    <div
      className="modal-backdrop show"
      style={{display: show ? "block": "none"}}>
      onClick={onClick as React.MouseEventHandler<HTMLDivElement> | (() => void)}
    </div>
  );
};

export default Backdrop;