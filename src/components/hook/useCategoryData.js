import { useEffect,useState } from 'react';
import Http from '../../libs/http';

export const useCategoriesData = () => {
    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Http.instance
            .get("https://dog.ceo/api/breeds/image/random/20")
            .then(response => {
                setCategories(response.data.message);
                setLoading(false);
            })
            .catch(error => console.log("ERROR",error));
    },[]);

    return { categories,loading };
};