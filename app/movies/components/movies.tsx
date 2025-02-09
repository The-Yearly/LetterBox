'use client'
import { useState,useEffect } from "react"
import styles from "../styles/movies.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { Genres } from "@/app/assets/interfaces/genres"
import { Language } from "@/app/assets/interfaces/languages"
export default function AllMovies(){
    const [movies,setMovie]=useState<Moviedb[]|null>(null)
    const [filter,setFilter]=useState(0)
    const [showFilter,setShowFilters]=useState(false)
    const [showGenreFilter,setShowGenreFilters]=useState(false)
    const [showLangFilter,setShowLangFilters]=useState(false)
    const [genres,setGenres]=useState<Genres[]|null>(null)
    const [selectedGenre,setSelectedGenre]=useState(0)
    const [langs,setLangs]=useState<Language[]|null>(null)
    const [selectedLang,setSelectedLang]=useState(0)
    useEffect(() => {
        fetch("https://letter-box-steel.vercel.app/movies") .then(
            response => response.json() .then(
            data => setMovie(data)
            )
        )
    }, [])
    
    useEffect(()=>{
        const fetchdata=async(selectedGenre:number,selectedLang:number)=>{

         if(selectedGenre!=0 && selectedLang==0){
            const moviefetch=await fetch("https://letter-box-steel.vercel.app/genres/"+selectedGenre)
            setMovie(await moviefetch.json())
        }
        else if(selectedLang!=0 && selectedGenre==0){
            const moviefetch=await fetch("https://letter-box-steel.vercel.app/languages/movies/"+selectedLang)
            setMovie(await moviefetch.json())
        }
        const genres=await fetch("https://letter-box-steel.vercel.app/allgenres")
        const langres=await fetch("https://letter-box-steel.vercel.app/languages")
        setGenres(await genres.json())
        setLangs(await langres.json())
    }

    fetchdata(selectedGenre,selectedLang)},[selectedGenre,selectedLang])
    
    function Filter(){
        return(
            <div id={styles.filterBox}>
                <button id={styles.filter} onClick={()=>{setShowFilters(!showFilter)}}>Filter</button>
                <div className={showFilter==true?styles.showFilter:styles.hideFilters}>
                    <ul id={styles.FilterlistBox} >
                        <li onClick={()=>{setFilter(1)}}>Genres</li>
                        <li onClick={()=>{setFilter(2)}}>Languages</li>
                        <li onClick={()=>{setFilter(0);setSelectedGenre(0);setSelectedLang(0)}}>Clear</li>
                    </ul>
                </div>
                <button id={styles.genrefilter} onClick={()=>{setShowGenreFilters(!showGenreFilter);}} className={filter==1?styles.showFilters:styles.hideFilters}>Genre</button>
                <div className={(showGenreFilter==true && filter==1)?styles.showFilter:styles.hideFilters}>
                    <ul id={styles.GenreBox} >
                        {genres?.map(genre=><li key={genre.genre_id} onClick={()=>{setSelectedGenre(genre.genre_id);setSelectedLang(0)}}>{genre.genre_name}</li>)}
                    </ul>
                </div>
                <button id={styles.genrefilter} onClick={()=>{setShowLangFilters(!showLangFilter);}} className={filter==2?styles.showFilters:styles.hideFilters}>Languages</button>
                <div className={showLangFilter==true && filter==2?styles.showFilter:styles.hideFilters}>
                    <ul id={styles.GenreBox} >
                        {langs?.map(lang=><li key={lang.language_id} onClick={()=>{setSelectedLang(lang.language_id);setSelectedGenre(0)}}>{lang.language_name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
    if(movies!=null){
        return(
            <>
                <div id={styles.allMovies}>
                {Filter()}
                <p id={styles.filmsheading}>All Movies</p>
                    <ul id={styles.all_movies}>
                        {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                    </ul>
                </div>
            </>
        )
}
} 