import React from 'react'
import {myList} from './MyListSlider'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Mylist = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <div name='myList' className='w-full h-[450px] relative bg-black text-white'>
      <h1 className='text-4xl font-bold px-20 py-6 cursor-pointer'>My List</h1>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {myList.map((item) => (
            <img className='w-[220px] h-[300px] inline-block m-2 p-2 cursor-pointer hover:scale-110 ease-in-out duration-300' src={item.img} alt="/" />
            ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </div>
  )
}

export default Mylist