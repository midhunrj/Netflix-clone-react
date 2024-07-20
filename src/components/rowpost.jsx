import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './row.css'
import { apiKey, imageUrl } from './constants'
import axios from './axios'
function Rowpost(props) {
    const[movies,setMovies]=useState([])
    const[UrlId,setUrlId]=useState('')
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    useEffect(()=>{
     axios.get(props.url)
     .then(response=>{console.log("hell",response.data)
     setMovies(response.data.results)
    }).catch(err=>{
        //alert('Network error')
    })
    },[])
    const movieTrailer=(id)=>{
     console.log(id,"mov id");
     axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
     .then(response=>{
        console.log(response.data);
        if(response.data.results.length!==0)
        {
            setUrlId(response.data.results[0])
        }
        else{
            console.log('Array empty');
        }
     })
     .catch(err=>{

     })
     
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((movie)=>{
            return <img  onClick={()=>movieTrailer(movie.id)} className={props.isSmall?"smallPoster":"poster"} alt="posters" src={`${imageUrl+movie.backdrop_path}`}/>
            
            })}
                </div>
      {UrlId &&<Youtube opts={opts} videoId={UrlId.key}/>} 
    </div>
  )
}

export default Rowpost