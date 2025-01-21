import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://19429ba06ff2.vps.myjino.ru/api',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});
