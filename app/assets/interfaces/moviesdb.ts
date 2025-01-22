import { Bio } from "./bio";
import { Crew } from "./crew";
import { MovieDetails } from "./moviedetails";
export interface Moviedb{
    movie_id:number;
    movie_title:string;
    movie_banner:string
    movie_poster:string;
    movie_views:number;
    movie_likes:number;
    movie_views_this_week:number;
    movie_likes_this_week:number;
  }