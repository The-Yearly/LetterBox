import { Reviews } from "./reviews";
export interface Users{
    id:number;
    name:string;
    username:string;
    movies_reviewed:number;
    movies_watched:number;
    favorites:number[];
    lists:number[];
    following:number[],
    followers:number[],
    films:number[],
    liked:number[],
    image:string;
    reviews:Reviews[],  
}