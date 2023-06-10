import { NextApiRequest, NextApiResponse } from 'next';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

const callbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { code } = req.query;

    // Exchange the authorization code for an access token
    const { body } = await spotifyApi.authorizationCodeGrant(code as string);
    const accessToken = body.access_token;

    // Set the access token for future requests
    spotifyApi.setAccessToken(accessToken);

    // Handle further logic or redirect to another page

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error handling callback:', error);
    res.status(500).json({ message: 'Error handling callback' });
  }
};

export default callbackHandler;
