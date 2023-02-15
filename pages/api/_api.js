import GhostContentAPI from '@tryghost/content-api';

const url = process.env.API_URL;
const key = process.env.API_KEY;

export const api = GhostContentAPI({
  url: url,
  key: key,
  version: 'v5.0',
});
