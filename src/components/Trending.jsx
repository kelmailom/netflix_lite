import React from 'react'
import {trendingList} from './TrendingSlider'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Trending = () => {
  const TslideLeft = () => {
    var sliderT = document.getElementById('sliderT');
    sliderT.scrollLeft = sliderT.scrollLeft - 500;
  }
  const TslideRight = () => {
    var sliderT = document.getElementById('sliderT');
    sliderT.scrollLeft = sliderT.scrollLeft + 500;
  }
  return (
    <div name='trending' className='w-full h-[450px] relative bg-black text-white'>
      <h1 className='text-4xl font-bold px-20 py-6 cursor-pointer'>Trending</h1>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={TslideLeft} size={40} />
        <div id='sliderT' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {trendingList.map((item) => (
            <img className='w-[220px] h-[300px] inline-block m-2 p-2 cursor-pointer hover:scale-110 ease-in-out duration-300' src={item.img} alt="/" />
            ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={TslideRight} size={40} />
      </div>
    </div>
  )
}

export default Trending