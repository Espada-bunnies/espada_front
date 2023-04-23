import axios from 'axios';

import { API_URL } from '../lib/Constants';

// https://swr.vercel.app/ru
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props

export const api = axios.create({
  baseURL: API_URL,
});
