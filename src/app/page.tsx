
'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";


export default function Home() {

  const [videos, setVideos] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [scrollingStarted, setScrollingStarted] = useState(false);

  const api = process.env.NEXT_PUBLIC_API_KEY

  useEffect(() => {
    if (searchKey) {

      fetchVideos(searchKey);
    }
    fetchVideos('')
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nextPageToken]);

  const fetchVideos = async (searchKey?: string, nextPageToken: string = '') => {
    setLoading(true);
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchKey}&part=snippet&key=${api}&pageToken=${nextPageToken}`);
    setVideos((prevVideos: any) => [...prevVideos, ...response.data.items]);
    setNextPageToken(response.data.nextPageToken);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setLoading(true);
      fetchVideos(searchKey, nextPageToken);
    }
   
  };

  const handleSearch = () => {
    setVideos([]);
    setNextPageToken('');
    fetchVideos(searchKey);
  };

  return (
    <main className="flex w-full min-h-screen justify-center">
       <div className="fixed w-full h-44 bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-2xl">Welcome to Test Infinite Scroll</h1>
      </div>

      <div className="fixed h-20 w-full   justify-center flex items-center "> <div className="w-72 h-8 gap-x-10 rounded-md"><input
        type="text"
        className="w-2/3 pl-2 h-full rounded-md text-black"
        placeholder="Search here"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
        <button className="bg-green-700 p-1 ml-5 rounded-md" onClick={handleSearch}>Search</button></div>
        </div>

      <div className="w-full flex flex-col justify-center items-center ">
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
          {videos.map((video: any, index: any) => (
            <div className="w-72  h-60 rounded-md my-2 border" key={video.id.videoId + `${index}-${Date.now()}`}>
              <div className="w-72 p-2 h-40 border flex items-center justify-center rounded-md"><img className=" p-1 border w-full h-full" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /></div>
              <div className="p-2 h-44"> <h3>{video.snippet.title}</h3></div>
            </div>
          ))}
        </div>
          {loading && (
            <div className="w-full flex justify-center items-center">
                <PuffLoader color="#fff" size={40} />
            </div>
          )}
      </div>
    </main>
  );
}
