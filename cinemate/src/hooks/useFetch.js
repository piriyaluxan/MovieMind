import { useState,useEffect } from "react"

export const useFetch = (api,queryTerm="") => {
const [data,setData]=useState([]);
const url = `https://api.themoviedb.org/3/${api}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query=${queryTerm}`

useEffect(() =>{
    async function fetchMovies(){
      const response =await fetch(url);
      const json =await response.json();
      setData(json.results);
    }
    fetchMovies();
  },[url])

  return { data }
}
