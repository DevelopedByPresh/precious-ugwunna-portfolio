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
    <div className='z-30 text-sm text-center font-programme space-x-2 text-white h-fit w-full flex justify-center items-center fixed bg-black'>
      <SiSpotify size={12} color={'#1ED760'} />
      <h1 className=''>Currently Listeng to</h1>
      {currentlyPlaying?.trackName ? (
        <p>
          <a
            className='hover:underline underline-offset-1 text-green-300'
            target='_blank'
            href={currentlyPlaying.url}
          >
            {currentlyPlaying.trackName}
          </a>{' '}
          by {currentlyPlaying.artistName} 🔥
        </p>
      ) : (
        <p>Nothing 😴</p>
      )}
    </div>
  );
};

export default NowPlaying;
