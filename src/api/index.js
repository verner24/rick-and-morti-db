const axios = require('axios');

const apiUrl = 'https://rickandmortyapi.com/api';

const getCharacters = async (page) => axios.get(`${apiUrl}/character/?page=${page}`);

module.exports = {
  getCharacters,
};