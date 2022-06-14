import { useQuery } from 'react-query';
import { Category } from '../models';

const useCategories = () => {
    return useQuery<Category[], Error>(['categories'], async () => {
        const response = await fetch(`/category`);
        return await response.json();
    }, {cacheTime: 0})
}

export {
    useCategories
};
