import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://my-burger-goanpixie.firebaseio.com/'
});

export default instance;


