import { API } from '../config';

//api call to get all the coder
export const getCoder = async () => {
    const response = await fetch(`${API}/coders/list`);
    const data = await response.json();
    return data;
}