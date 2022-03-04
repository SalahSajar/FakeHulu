import React , {useState}from 'react';

export const useSearch = () => {
  const [showsFounded,setShowsFounded] = useState(null);
  const [actorsFounded,setActorsFounded] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchHandler = async (searchValue, type) => {
    try{
      setError(false);
      setLoading(true);

      const searchRes = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US&page=1&query=${searchValue}&include_adult=false`);

      if(!searchRes.ok){
        throw Error("Something Went Wrong");
        return;
      }

      let searchData = await searchRes.json();

      
      if(type === "person") setActorsFounded(() => searchData.results.filter(searchDataItem => searchDataItem.known_for_department.toLowerCase() === "acting"))
      if(type !== "person") setShowsFounded(searchData);
      
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

      const popularActorsRes = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US&page=1`);

      if(!popularActorsRes.ok){
        throw Error("Something Went Wrong");
        return;
      }

    const popularActors = await popularActorsRes.json();

      setError(false);
      setLoading(false);
      setActorsFounded(() => {
        return popularActors.results.filter(
          (popularActor) => popularActor.known_for_department.toLowerCase() === "acting"
        )
      });

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
      
      const trendingShowsRes = await fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}`);
      
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

  return {
    searchHandler,
    searchMostPapularActors,
    actorsFounded,
    searchTrendingShows,
    showsFounded,
    loading,
    error
  }
}
