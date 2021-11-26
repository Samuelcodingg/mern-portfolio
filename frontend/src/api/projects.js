import { API } from "../config";

export const getProjects = async () => {
    const response = await fetch(`${API}/projects/list`);
    const data = await response.json();
    return data;
};

export const getProjectById = async id => {
    const response = await fetch(`${API}/projects/list/${id}`);
    const data = await response.json();
    return data;
};