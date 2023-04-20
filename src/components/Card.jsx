import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../context/StateContext";
import {AiFillHeart,AiFillStar,AiOutlinePlayCircle} from 'react-icons/ai'
import { Link, useParams } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({movie}) => {
  const { title, poster_path, release_date, vote_average} = movie
  const {dispatch} = StateContextCustom()
  const [video,setVideo] = useState([])
  const [detail,setDetail] = useState({})
  const { detailId } = useParams();
  useEffect(()=>{
    fetchDetailData(),
    fetchVideoData()
  },[detailId])

  
  const fetchVideoData = async ()=>{
    const api = await fetch(`https://api.themoviedb.org/3/movie/${detailId}/videos?api_key=fff8973657a2509d6a6069478c0f9e39&language=en-US`)
    const {results} = await api.json()
    setVideo(results)
  }
  // console.log(video);
  const trailer = video?.find(vd=> vd.name.includes("Official Trailer"))
// console.log(trailer);
  const fetchDetailData = async ()=>{
    const api = await fetch(`https://api.themoviedb.org/3/movie/ ${detailId}?api_key=fff8973657a2509d6a6069478c0f9e39&language=en-US`)
    const data = await api.json()
    setDetail(data)
  }
  


  const [heartBtn,setHeartBtn] = useState(false)
  const toggleHeartBtn = heartBtn ? "text-red-600" : null
  const handler = ()=>{
    setHeartBtn(heartBtn => !heartBtn)
    if(heartBtn === false){
       dispatch({type:"GET_FAV",payload:movie})
    }
    else{
      dispatch({type:"REMOVE_FAV",payload:movie})
    }
  }

    const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  return (
    <div>
      <Group position="center">
        <Link to={`/${movie.id}`}>
          <div onClick={() => setNoTransitionOpened(true)} className="border border-[#701ece] card-body opacity-90 transition-[1000ms] hover:opacity-100 cursor-pointer lg:w-[200px] md:w-[150px] w-[100px] lg:h-[290px] md:h-[235px] h-[175px] bg-slate-300">
            {/* <img
              className="lg:w-[200px] md:w-[150px] w-[100px] lg:h-[200px] md:h-[150px] h-[100px]"
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt=""
            /> */}
            <LazyLoadImage src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            className="lg:w-[200px] md:w-[150px] w-[100px] lg:h-[200px] md:h-[150px] h-[100px]"
            alt="Image Alt"
            effect="blur"
            loading="lazy"
          />
            <div className=" flex flex-col gap-2 px-2 bg-slate-300">
              <div className="pt-3 flex items-center h-[25px]">
              <h1 className="font-bold text-black lg:text-[17px] md:text-[12px] text-[9px]">{title.substring(0,20)}...</ h1>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="border lg:text-lg md:text-sm text-[10px]  border-[#701ece] px-2 rounded">{vote_average}</span>
                <button onClick={()=> handler()} >
                  <AiFillHeart className={`md:text-3xl lg:text-3xl text-1xl hover:text-red-600 ${toggleHeartBtn}`}></AiFillHeart> 
                </button>
              </div>
            </div>
          </div>
        </Link>

        <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}size="80%">
          <div className="flex md:flex-none flex-wrap justify-center modal p-5 items-center gap-5">
            <div className="sm:w-[30%] w-[50%] sm:h-auto modal-img">
              <img src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`} className=" sm:w-full w-[100%] p-1 " alt=""  />
              <div className="flex justify-center sm:text-5xl text-3xl hover:transition-[4000ms] sm:py-0 py-1 play-div">
              <a href={`https://www.youtube.com/watch?v=${trailer?.key}`} className="text-white play"><AiOutlinePlayCircle></AiOutlinePlayCircle></a>
              </div>
            </div>

            <div className="ml-10 sm:w-[50%] h-[30%] sm:text-sm text-xs">
              <h1 className="sm:text-3xl text-2xl text-purple-700">{detail.title}</h1>
              <div className="flex items-center">
                <p className="text-yellow-400"><AiFillStar></AiFillStar></p>
                <p className="flex text-pink-600"><span className="font-bold">{vote_average}</span>/10</p>
              </div>
                <p className="flex text-pink-600 mb-5">First Air date: <span className="font-bold ml-1">{detail.release_date}</span></p>
                <p className="text-pink-600">Overview: <span className="text-purple-700 tracking-wide">{detail.overview}</span></p>
            </div>
          </div>
        </Modal>
      </Group>
    </div>
  );
};

export default Card;
