import axios from 'axios'

export const getCharacter = async (page) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      return res.data
    } catch (err) {
      
    }
};
export const getEpisods = async (page) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`);
      return res.data
    } catch (err) {
      
    }
};
export const getLcoations = async (page) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`);
      return res.data
    } catch (err) {
      
    }
};
export const getCast = async (id) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      return res.data
    } catch (err) {
      
    }
};