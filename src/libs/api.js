import Http from './http';
const API_URL = "http://localhost:56225/api/";

export const Post = async (endpoint,body,header = "") => {
    return await Http.instance.post(`${API_URL}${endpoint}`,body,{
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header
        }
    });
};


