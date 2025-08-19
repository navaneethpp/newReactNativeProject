// This API Service is used for getting jokes
// https://jokeapi.dev/ = For getting api
// This API provider doesn't need to authentication

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v2.jokeapi.dev/',
});

// Request
api.interceptors.request.use(
  config => {
    console.log('Request: ', config.url);
    config.headers['X-Demo-Header'] = 'Navaneeth';
    return config;
  },
  error => Promise.reject(error),
);

// Response
api.interceptors.response.use(
  response => {
    console.log('Response: ', response.status);
    return response;
  },
  error => {
    console.error('Error: ', error.message);
    return Promise.reject(error);
  },
);

// Calling
export async function getJoke() {
  try {
    const res = await api.get('/joke/Any?blacklistFlags=nsfw,religious,sexist');

    let joke = '';

    // if the joke single
    if (res.data.type === 'single') {
      joke = res.data.joke;
    } else if (res.data.type === 'twopart') {
      // if the joke have two parts
      joke = `${res.data.setup} - ${res.data.delivery}`;
    }

    console.log('Joke: ', joke);
    return joke;
  } catch (err) {
    console.error('Failed to fetch joke: ', err);
    throw err;
  }
}
