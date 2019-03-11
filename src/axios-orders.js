import axios from 'axios';

const instance = axios.create( {
    baseURL: 'https://my-burger-project-6d1a9.firebaseio.com'
});

export default instance;