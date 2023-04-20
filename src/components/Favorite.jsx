import React, { useEffect, useState } from 'react'
import { StateContextCustom } from '../context/StateContext'
import { AiFillHeart, AiFillStar, AiOutlinePlayCircle } from 'react-icons/ai'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Favorite = () => {
    const {state:{fav},dispatch} = StateContextCustom()
    // console.log(fav);
    const [heartBtn,setHeartBtn] = useState(true)
    const toggleHeartBtn = heartBtn ? "text-red-600" : null
    // const handler = ()=>{
    //   if(comfirm("Are you sure to remove")){
    //     dispatch({type:"REMOVE_FAV",payload:fav})}
    //   }
    // }

    if(fav.length === 0){
      return(
        <div className='bg-black h-screen'>
          <Navbar/>
          <div className=' text-center w-[100%] h-[52%] flex'>
            <div className='m-auto'>
              <h1 className=' text-purple-600 text-lg'>Please add your favorite movie</h1>
              <Link to={'/'}>
                <button className=' bg-purple-500 text-purple-900 font-bold py-1 px-3 rounded'>Add</button>
              </Link>
            </div>
          </div>
        <Footer/>
      </div>
      )
    }else{
      return (
        <div className='bg-black'>
          <Navbar/>
          {fav.map(fav => {
            return(
              <div key={fav.id}>
               <div className='flex items-center mt-5 justify-center' >
                <div className='flex-wrap sm:w-[50%] w-[95%] gap-5 p-5 mb-10 fav bg-[#0e0e0e]'>
                  <img src={`https://image.tmdb.org/t/p/w300${fav.backdrop_path}`} className="w-[50%] h-[50%]" alt=""  />
                  <div>
                    <div className='flex justify-between items-center mt-3'>
                      <h1 className="sm:text-xl text-lg  text-purple-700">{fav.title}</h1>
            
                      <button onClick={()=> dispatch({type:"REMOVE_FAV",payload:fav})}>
                          <AiFillHeart className={`sm:text-3xl text-xl hover:text-red-600 ${toggleHeartBtn}`}></AiFillHeart> 
                      </button>
                    </div>
                    <div className="flex items-center">
                      <p className="text-yellow-400"><AiFillStar></AiFillStar></p>
                      <p className="flex text-pink-600 sm:text-base text-sm"><span className="font-bold">{fav.vote_average}</span>/10</p>
                    </div>
                      <p className="flex text-pink-600 mb-5 sm:text-base text-sm">First Air date: <span className="font-bold ml-1 ">{fav.release_date}</span></p>
                      <p className="text-pink-600 sm:text-base text-[13px]">Overview: <span className="text-purple-700 tracking-wide">{fav.overview}</span></p>
                  </div>
                </div>
               </div>
              </div>
            )
          })}
        <Footer/>
        </div>
      )
    }
  
}

export default Favorite