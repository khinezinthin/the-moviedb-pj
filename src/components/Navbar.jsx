import { Menu, Transition  } from '@headlessui/react'
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'
import {GiFilmProjector} from 'react-icons/gi'
import React, {Fragment, useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { StateContextCustom } from '../context/StateContext'
import { Input } from '@mantine/core';
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Navbar = () => {
  const {setMovieList,movieList,filter,allMovie} = StateContextCustom()
  const [input,setInput] = useState("")
  
  useEffect(()=>{
    const searchFilter = allMovie.filter(movie=> movie.title.toLowerCase().replace(" ","").includes(input.trim().replace(" ","")))
    // const idFilter = searchFilter.id == allMovie.id
    // if(idFilter){
    //    movieList
    //   }else{
      setMovieList(searchFilter)
    // }
  },[input])

  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return (
    <div className='w-full h-20 flex justify-between items-center px-8'>
        <Link to={'/'}>
        <div onClick={()=> setMovieList(filter)} className='flex items-center'>
        <GiFilmProjector className='mr-3 text-4xl text-[#800080]'></GiFilmProjector>
        <h1  className='text-3xl font-bold movie-color'>MOVIE K</h1>
        </div>
        </Link>
        <ul className={` border-none flex items-center ${opened ? "nav-menu active" : "nav-menu" } `}>
          <Link to={`/${input}`}>
          <div className='sm:w-[200px]'>
            <li className='p-4 text-lg text-slate-300 font-semibold hover:text-purple-600 transition-[1000ms] relative'>
              <Input onChange={(e)=> setInput(e.target.value)} variant="filled" placeholder="Search" radius="md"/>
              <AiOutlineSearch className='absolute top-6 right-3 mr-3 text-2xl text-purple-500'></AiOutlineSearch>
            </li>
          </div>
          </Link>

          <NavLink to={'/'}>
          <li onClick={()=> setMovieList(filter)} className='p-4 text-lg text-slate-300 font-semibold hover:text-purple-600  transition-[1000ms]'> Home</li>
          </NavLink>
          
          <NavLink to={'/favorite'}>
          <li className='p-4 text-lg text-slate-300 font-semibold hover:text-purple-600  transition-[1000ms]'>Favorite</li>
        </NavLink>
            <li className='p-4'>
            <Menu as="div" className={`relative inline-block  ${opened ? "text-center" : "text-left"}`}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#3d0f5c] px-3 py-2 text-sm  text-[white] shadow-sm ring-1 ring-inset ring-[#3d0f5c] hover:bg-[#41135f] font-bold">
          Account
          <IoIosArrowDown className="-mr-1 h-5 w-5 text-[white]" aria-hidden="true"></IoIosArrowDown>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={`absolute right-0 z-10 mt-2  ${opened ? "w-30" : "w-56"} origin-top-right divide-y divide-[#7303c0] rounded-md bg-[#3d0f5c] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className="py-1">
            <Link to={'/login'}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-[#7303c0] text-white' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Log In
                  </a>
                )}
              </Menu.Item>
            </Link>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-[#7303c0] text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Register
                </a>
              )}
            </Menu.Item>
          </div>
         
        </Menu.Items>
      </Transition>
    </Menu>
            </li>
        </ul>

        <div>
        <Burger opened={opened} onClick={toggle} color="#fff" aria-label={label} className='burger'/>
        </div>
    </div>
  )
}

export default Navbar