import axios from 'axios';

class Http{
    static instance = new Http();

    get = async (uri) => {
        return await axios.get(uri);
    }

    post = async (uri, body = undefined, options = undefined) => {
        return await axios.post(uri,body,options);
    }

}

export default Http;