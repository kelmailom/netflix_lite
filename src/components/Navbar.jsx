import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/netflix_PNG8.png'
import {Link} from 'react-scroll'



const NavbarIcon = ({icon, text}) => (
    <div className='navbar-icon group'>
        {icon}

        <span className='navbar-tooltip group-hover:scale-100'>
            {text}
        </span>

    </div>
);

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed flex w-full justify-start items-center h-20 px-2 p-4 z-10 bg-black text-white'>
        <div className='flex justify-center cursor-pointer'>
            <img src={Logo} alt="Netflix" style={{width: '50px'}} />
        </div>
        {/*menu*/}
        <ul className='hidden md:flex'>
            <li className='py-4 text-justify text-xm font-semibold cursor-pointer'><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='py-4 text-justify text-xm font-semibold cursor-pointer'><Link to='myList' smooth={true} duration={500}>My List</Link></li>
            <li className='py-4 text-justify text-xm font-semibold cursor-pointer'><Link to='continue' smooth={true} duration={500}>Continue Watching</Link></li>
            <li className='py-4 text-justify text-xm font-semibold cursor-pointer'><Link to='trending' smooth={true} duration={500}>Trending</Link></li>
        </ul>
        {/*hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10 flex justify-center cursor-pointer'>
            {!nav ? <FaBars size='28'/> : <FaTimes size='28'/>}
        </div>
        {/*mobile menu*/}
        <ul className={nav ? 'absolute text-[#db0000] left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <li className='py-6 text-justify text-xm font-bold'>Home</li>
            <li className='py-6 text-justify text-xm font-bold'>My List</li>
            <li className='py-6 text-justify text-xm font-bold'>Continue Watching</li>
            <li className='py-6 text-justify text-xm font-bold'>Trending</li>

        </ul>

    </div>
  )
}

export default Navbar