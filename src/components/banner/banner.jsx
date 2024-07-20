import React,{useEffect,useState} from 'react'
import './banner.css'
import {imageUrl,apiKey} from '../constants'
import axios from '../axios.js'
function Banner() {
    const [movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`)
        .then((response)=>{
            console.log(response.data);
            console.log(response.data.results[0]);
            console.log(response.data.results[0].backdrop_path);
            setMovie(response.data.results[0])
        })
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner-buttons'>
                <button className='button'>play</button>
                <button className='button'>My list</button></div>
                <h1 className='description'>{movie?movie.overview:""}
                    </h1></div>
                    <div className='fade_bottom'></div>
                    </div>
                    
  )
}

export default Banner