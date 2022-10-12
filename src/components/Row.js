import React,{useEffect, useState} from 'react'
import baseUrl from '../baseUrl';
import './Row.css'

const base_url= "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {

    const [movies,setMovies]=useState([])

    async function fetchData(){
        const result = await baseUrl.get(fetchUrl)
        setMovies(result.data.results);
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(movies);
  return (
    <div className='row'>
        <h1> {title} </h1>
        <div className='posters'>
            {
                movies.map((movie)=>(
                    <img className='poster' src={`${base_url}${movie.backdrop_path}`}/>
                ))
            }
        </div>
    </div>
  )
}

export default Row