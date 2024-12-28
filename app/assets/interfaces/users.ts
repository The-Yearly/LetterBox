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
    reviews:number[],
    list:number[],
}