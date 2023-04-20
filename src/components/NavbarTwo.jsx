import { Menu, Transition  } from '@headlessui/react'
import {IoIosArrowDown} from 'react-icons/io'
import {GiFilmProjector} from 'react-icons/gi'
import React, {Fragment, useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { StateContextCustom } from '../context/StateContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const NavbarTwo = () => {
    const {movieList,setMovieList,topRatedMovieList,comingSoonMovieList,filter,activeGenre,setActiveGenre,allMovie} = StateContextCustom()
    

    useEffect(()=>{
      // const allMovie = [...filter,...topRatedMovieList,...comingSoonMovieList]
      const filterMovie = allMovie.filter(movie => movie.genre_ids.includes(activeGenre))
      // console.log(filterMovie);
      setMovieList(filterMovie)
    },[activeGenre])

  return (
    <div>
      {/* <div>
        <img src="https://img.freepik.com/free-vector/realistic-cinema-elements-black-background-with-text-space_1017-42669.jpg?w=826&t=st=1680852542~exp=1680853142~hmac=7006875ca7a07850cde4b67332f50d99b7d25f9e12077030e57b27a22cb7d494" className='w-[100%] h-96 mb-5' alt="" />
      </div> */}
      <div className='my-10'>
        <hr className='mx-20 border-[#7303c0]'/>
        <div className='flex justify-center p-4'>
        <ul className='flex items-center navbarTwo lg:text-lg sm:text-base font-bold text-[10px]'>
            {/* <Link to={'/'}> */}
            <li onClick={()=> setMovieList(filter)} className={` mr-4 navTwo  text-[#7303c0]`}>Trending</li>
            {/* </Link> */}
            {/* <Link to={'/'}> */}
            <li onClick={()=> setMovieList(topRatedMovieList)} className={` mr-4 navTwo  text-[#7303c0]`}>Top Rated</li>
            {/* </Link> */}
            {/* <Link> */}
            <li onClick={()=> setMovieList(comingSoonMovieList)} className=' mr-4 text-[#7303c0] navTwo '>Coming Soon</li>
            {/* </Link> */}
            

            <div>
            <li className=' navTwo '>
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" inline-flex  w-full justify-center items-center  text-[#7303c0]   ">
          Genre
          <IoIosArrowDown className=" h-7 w-4 text-[#7303c0] " aria-hidden="true"></IoIosArrowDown>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-[#7303c0] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(28)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Action
                  </a>

                
              )}
            </Menu.Item>
          </div>
          
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(80)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Crime
                  </a>

                
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
          <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(35)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Comedy
                  </a>

                
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
          <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(18)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Drama
                  </a>

                
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
          <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(18)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Fantasy
                  </a>

                
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
          <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(12)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Adventure
                  </a>

                
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
          <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(27)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Horror
                  </a>

                
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
          <Menu.Item>
              {({ active }) => (

                    <a onClick={()=> setActiveGenre(16)} className={classNames(
                  active ? 'bg-[#8850af] text-white' : 'text-white',
                  'block px-4 py-2 text-sm'
                  )}>
                  Animation
                  </a>

                
              )}
            </Menu.Item>
          </div>
         
        </Menu.Items>
      </Transition>
    </Menu>
            </li>
            </div>
        </ul>
        </div>
            <hr className='mx-20  border-[#7303c0]'/>
        </div>
        
    </div>
  )
}

export default NavbarTwo