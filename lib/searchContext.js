import {createContext ,useState} from "react";

import {InDevEnv} from "@lib/scripts/CheckIfInDevEnv";
import {ShufflingAlgo} from "@lib/scripts/ShufflingAlgo";

export const SearchContext = createContext({
    showsFounded: [],
    actorsFounded: [],
    loading: null,
    error: null,
});

const SearchContextProvider = ({children}) => {
  const [showsFounded,setShowsFounded] = useState([]);
  const [actorsFounded,setActorsFounded] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const TMDB__API_KEY = InDevEnv ? process.env.NEXT_PUBLIC__TMDB__API_KEY : process.env.NEXT_PUBLIC_VERCEL_TMDB__API_KEY;

  const searchHandler = async (searchValue, type) => {
    try{
      setError(false);
      setLoading(true);
      
      const searchRes = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${TMDB__API_KEY}&language=en-US&page=1&query=${searchValue}&include_adult=false`);
      
      if(!searchRes.ok){
        throw Error("Something Went Wrong");
        return;
      }
      
      let searchData = await searchRes.json();
      
      if(type === "person") setActorsFounded(() => searchData.results.filter(searchDataItem => !!searchDataItem.known_for_department && searchDataItem.known_for_department.toLowerCase() === "acting"))
      if(type !== "person") setShowsFounded(searchData.results.sort((a,b) => b.popularity - a.popularity));
      
      setError(false);
      setLoading(false);

    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  }

  
  const searchMostPapularActors = async () =>{
    try{
      setError(false);
      setLoading(true);

      const API_BASE = `https://api.themoviedb.org/3/person/popular?api_key=${TMDB__API_KEY}&language=en-US&page=`;

      const Multi_Promises__List = [fetch(API_BASE+1), fetch(API_BASE+2), fetch(API_BASE+3)];

      const reqs = await Promise.allSettled(Multi_Promises__List);

      if(reqs.every(req => req.status !== "fulfilled")){
        throw Error("Something Went Wrong");
        return;
      }

      const popularActors_List__01 = (await reqs[0].value.json()).results;
      const popularActors_List__02 = (await reqs[1].value.json()).results;
      const popularActors_List__03 = (await reqs[2].value.json()).results;

      let popularActors__MegaList = [];

      if(popularActors_List__01.length) popularActors__MegaList = [...popularActors__MegaList, ...popularActors_List__01];
      if(popularActors_List__02.length) popularActors__MegaList = [...popularActors__MegaList, ...popularActors_List__02];
      if(popularActors_List__03.length) popularActors__MegaList = [...popularActors__MegaList, ...popularActors_List__03];
      
      setError(false);
      setLoading(false);

      setActorsFounded(ShufflingAlgo(popularActors__MegaList.filter(popularActor => popularActor?.known_for_department?.toLowerCase() === "acting")));

    } catch(err) {
      setError(true);
      setLoading(false);
      
      console.log(err);
    }
  }
  const searchTrendingShows = async (type) =>{
    try{
      setError(false);
      setLoading(true);
      
      const trendingShowsRes = await fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${TMDB__API_KEY}`);
      
      if(!trendingShowsRes.ok){
        throw Error("Something Went Wrong");
        return;
      }
      
      const trendingShowsData = await trendingShowsRes.json();
      
      setError(false);
      setLoading(false);
      
      setShowsFounded(trendingShowsData.results);

    } catch(err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  }

    return <SearchContext.Provider value={{
            showsFounded ,
            actorsFounded,
            loading,
            error ,
            searchHandler,
            searchMostPapularActors,
            searchTrendingShows
        }}>
        {children}
    </SearchContext.Provider>
}

export default SearchContextProvider;