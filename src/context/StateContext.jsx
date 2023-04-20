import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";
import Loading from "../components/Loading";

export const StateContext = createContext()
export const StateContextProvider = ({children})=>{
    const [movieList,setMovieList] = useState([])
    const [topRatedMovieList,setTopRatedMovieList] = useState([])
    const [comingSoonMovieList,setComingSoonMovieList] = useState([])
    const [filter,setFilter] = useState([])
    const [activeGenre,setActiveGenre] = useState()
    const allMovie = [...filter,...topRatedMovieList]
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetchMovieData(),
        fetchTopRatedMovieData(),
        fetchComingSoonMovieData()
    },[])

    const fetchMovieData = async()=>{
        const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fff8973657a2509d6a6069478c0f9e39&language=en-US&page=1`)
        const {results} = await api.json()
        // console.log(results);
        setMovieList(results)
        setFilter(results)
        setLoading(false)
    }
    const fetchTopRatedMovieData = async()=>{
        const api = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=fff8973657a2509d6a6069478c0f9e39&language=en-US&page=1`)
        const {results} = await api.json()
        setTopRatedMovieList(results)
        setLoading(false)
    }
    const fetchComingSoonMovieData = async()=>{
        const api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=fff8973657a2509d6a6069478c0f9e39&language=en-US&page=1`)
        const {results} = await api.json()
        setComingSoonMovieList(results)
        setLoading(false)
    }
    
    
    const initialState = {
        // movie:[],
        fav:[]
    }
    // useEffect(()=>{
    //     dispatch({type:"GET_POPULAR_MOVIE",payload:movieList})
    // },[movieList])
    const [state,dispatch] = useReducer(reducer,initialState)

    const data = {state,dispatch,movieList,setMovieList,topRatedMovieList,comingSoonMovieList,activeGenre,setActiveGenre,filter,setFilter,allMovie,loading,setLoading}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = ()=> useContext(StateContext);