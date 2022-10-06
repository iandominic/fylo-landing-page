import React from 'react'
import logo from '../img/logo.svg'

const Nav = () => {
  return (
    <div className='flex items-center p-[23px] px-[20px] justify-between sticky top-0 left-0 bg-main'>
        <img className='w-[80px]' src={logo} alt=''/>
        <ul className='raleway text-white font-normal flex text-[0.8rem] gap-6'>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
        </ul>
    </div>
  )
}

export default Nav