"use client"
import { useEffect, useState } from 'react';
import useSWR, { mutate } from 'swr';
import { SiSpotify } from 'react-icons/si';

interface SpotifyData {
  songUrl: string;
  title: string;
  artist: string;
}

const NowPlaying = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      mutate('/api/spotify');
    }, 5000); // Refresh every 5 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<SpotifyData>('/api/spotify', fetcher);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<{
    trackName: string;
    artistName: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    if (data) {
      setCurrentlyPlaying({
        trackName: data.title,
        artistName: data.artist,
        url: data.songUrl,
      });
    }
  }, [data]);

  return (
    <>
      <h1 className='w-full bg-slate-900 overflow-x-scroll text-white text-center text-xs space-x-1 fixed z-30 flex justify-center items-center  md:text-sm h-5'> 
      <SiSpotify size={12} color={'#26a552'} className='mr-1' /> 
      Currently Listening to:{" "}
      {currentlyPlaying?.trackName ? (
        <>
          <a
            className='hover:underline underline-offset-1 text-green-300'
            target='_blank'
            href={currentlyPlaying.url}
          >
            {currentlyPlaying.trackName}
          </a>
         <span className=''>by {currentlyPlaying?.artistName} 🔥 </span> 
         </>
      ) : (
        <span>nothing 😴</span>
      )}
      </h1>
   </>
      
  );
};

export default NowPlaying;
