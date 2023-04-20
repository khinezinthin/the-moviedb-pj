import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../context/StateContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Navbar from './Navbar'
import NavbarTwo from "./NavbarTwo";
import Footer from './Footer'
import Card from "./Card";
import Loading from "./Loading";

const Movie = () => {
  const {movieList,loading,setLoading} = StateContextCustom();
//   console.log(movie);
  

  // if(loading){
  //   return <Loading/>
  // }

  return (
    <div className="bg-[#000]">
      <Navbar/>
      <NavbarTwo />
      {/* <Splide
        aria-label="My Favorite Images"
        options={{
          fixedWidth: "100%",

          type:'loop'
        }}
      >
        {movie.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=""
              />
            </SplideSlide>
          );
        })}
      </Splide> */}

      <div className="flex items-center flex-wrap justify-center lg:gap-10 md:gap-9 gap-5 pb-10 mx-3">
        {movieList.map((movie) => {
          return (
            <div key={movie.id}>
              <Card  movie={movie}/>
            </div>
          );
        })}
      </div>
      <Footer/>
      
    </div>
  );
};

export default Movie;
