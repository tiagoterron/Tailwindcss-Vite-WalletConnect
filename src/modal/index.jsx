import React, { useState, useEffect } from 'react';
// import TriggerButton from '../TriggerButton';
// import { Form } from '../Form';

export const Modal = ({
    onClickOutside,
    onKeyDown,
    modalRef,
    buttonRef,
    closeModal,
    onSubmit
  }) => {
    return (
          <div class="fixed z-20 h-3/4 w-1/2 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded-sm overflow-y-scroll">
            <button
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              className="_modal-close"
              onClick={closeModal}
            >
              <span id="close-modal" className="_hide-visual">
                Close
              </span>
              <svg className="_modal-close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <div className="modal-body">
              <Form />
            </div>
          </div>

    );
  };

  export const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
      <button
        className="btn btn-lg btn-danger center modal-button"
        data-ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </button>
    );
  };

  export const Form = ({ onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  };

const Container = ({view}) => {
  const [isShown, setIsShown] = useState(true)
  useEffect(() => {
    setIsShown(view);
  }, [view])
  const showModal = () => {
    setIsShown(true);
    toggleScrollLock();
  };
  const closeModal = () => {
    setIsShown(false);
    // toggleScrollLock();
  };
  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      setIsShown(false);
    }
  };
  const onClickOutside = (event) => {
    if (this.contains(event.target)) return;
    setIsShown(false);
  };

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

    return (
      <>
        {isShown ? (
          <Modal
            closeModal={closeModal}
            onKeyDown={closeModal}
            onClickOutside={0}
          />
        ) : null}
        </>

    );
}

export default Container;

