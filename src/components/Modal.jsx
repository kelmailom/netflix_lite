import React from 'react';
import BadBoys from '../assets/bad-boys-II_hero.jpg';


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={BadBoys} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn text-black cursor-pointer' onClick={onClose}>
            X
          </p>
          <div className='content text-black'>
            <h1 className='text-4xl font-bold'>Bad Boys II</h1>
            <span className='text-xl text-left py-4'>The wiresacking cop duo is back. And to nab a humorless drug smuggler, they're going to make a mess in Miami</span>
            <p className='text-xl font-bold text-left py-4'>Cast:</p>
            <span className='text-xl text-left py-4'>Will Smith, Martin Lawrence, Gabrielle Union</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal