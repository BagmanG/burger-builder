import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-49a30.firebaseio.com/'
});

export default instance;
