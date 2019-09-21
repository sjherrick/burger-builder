import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c941b.firebaseio.com/'
});

export default instance;