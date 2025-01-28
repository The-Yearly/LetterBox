export interface Top5{
    user_id:number;
    name:string;
    user_name:string;
    user_passwd:string;
    user_bio:string;
    user_userPic:string
    followers_no:number;
    movie_id_1:number|null;
    poster_1:string|null;
    movie_id_2:number|null;
    poster_2:string|null;
    movie_id_3:number|null;
    poster_3:string|null;
    movie_id_4:number|null;
    poster_4:string|null;
    movie_id_5:number|null;
    poster_5:string|null;
    movies_watched_count:number ;
    reviews_count:number;
}