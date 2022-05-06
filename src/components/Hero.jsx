import React, { useState } from 'react'
import BadBoys from '../assets/bad-boys-II_hero.jpg'
import {ImInfo} from 'react-icons/im'
import Modal from './Modal'


const Hero = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div name='home' className='w-full h-screen relative'>
        <img className='absolute w-full h-full object-cover' src={BadBoys} alt="Bad Boys II"/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4 px-20'>
            <h1 className='text-4xl font-bold py-6'>Bad Boys II</h1>
            <p className='text-2xl'>Miami cops Mike Lowrey and Marcus Burnett return to investigate</p>
            <p className='text-2xl'>a cuban cartel as ecstasy flows into Florida amid a mobster war and internal conflict</p>
            <div className='items-center py-10'><button onClick={()=> setOpenModal(true)} name='modalButton' className='rounded border-2 px-3 py-3 flex justify-center items-center text-2xl font-bold bg-gray-800/30 hover:bg-gray-800'>
            <span><ImInfo size={28} /></span>&nbsp;More Info</button>
            <Modal open={openModal} onClose={()=> setOpenModal(false)} /></div>
                
        </div>
    </div>
  )
}

export default Hero