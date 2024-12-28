import { Bio } from "./bio";
import { Crew } from "./crew";
import { MovieDetails } from "./moviedetails";
export interface Movie{
    id:number;
    name:string;
    banner:string
    poster:string;
    views:number;
    likes:number;
    cast:string[];  
    bio:Bio;
    crew:Crew;
    details:MovieDetails;
    genres:string[]|null
  }