import axios from 'axios';

export const postCreateTicket = ({
  data = {},
  config = { loading: false }
} = {}) => {
  return axios.request({
    data,
    url: '/api/ticket/create',
    method: 'post',
    ...config
  });
};

export const getSearchUser = ({
  query = {},
  config = { loading: false, debounce: false }
} = {}) => {
  return axios.request({
    params: query,
    url: '/api/user/search',
    method: 'get',
    ...config
  });
};
