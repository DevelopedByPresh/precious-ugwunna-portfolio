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
    <div className='z-30 text-sm overflow-x-scroll justify-center font-programme  text-white h-fit w-full flex  flex-row space-x-1 items-center fixed bg-black'>
      
      <h1 className='flex flex-row items-center'> <SiSpotify size={12} color={'#26a552'} className='md:mr-2 mr-1' /> Currently Listeng to: </h1>
      {currentlyPlaying?.trackName ? (
        <p className='flex flex-row items-center space-x-1'>
          <a
            className='hover:underline underline-offset-1 text-green-300'
            target='_blank'
            href={currentlyPlaying.url}
          >
            {currentlyPlaying.trackName}
          </a>{' '}
         <span className=''>by {currentlyPlaying.artistName} 🔥 </span> 
        </p>
      ) : (
        <p>Nothing 😴</p>
      )}
    </div>
  );
};

export default NowPlaying;
