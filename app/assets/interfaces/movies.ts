import { Bio } from "./bio";
export interface Movie{
    id:number;
    name:string;
    banner:string
    poster:string;
    views:number;
    likes:number;
    cast:string[];  
    bio:Bio;
  }