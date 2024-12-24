import { Reviews } from "./reviews";
export interface Users{
    id:number;
    name:string;
    username:string;
    movies_reviewed:number;
    movies_watched:number;
    favorites:number[];
    following:number[],
    followers:number[],
    films:number[],
    liked:number[],
    watchlist:number[],
    image:string;
    reviews:Reviews[],  
    list:number[],
}