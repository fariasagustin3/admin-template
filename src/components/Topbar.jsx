import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { useStore } from '../store';

const Topbar = () => {
  const expanded = useStore(state => state.expanded)
  const handleExpanded = useStore(state => state.handleExpanded)

  return (
    <nav className='bg-[var(--dark)] fixed top-0 right-0'>
      <div className='flex items-center justify-between px-5 py-5' style={expanded ? { width: "calc(100vw - 100px)", transition: "all 0.5" } : { width: "calc(100vw - 250px)", transition: "all 0.5s" }}>
        <div>
          <button onClick={handleExpanded}>
            <RxHamburgerMenu color="#CECECE" size={20} />
          </button>
        </div>
        <ul className='flex items-center gap-5'>
          <li>
            <button>
              <CiDark color='#CECECE' size={20} />
            </button>
          </li>
          <li>
            <button>
              <img src="/user-image.png" alt="" className='w-10 h-10 rounded-full border-[1px] bg-white' />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar