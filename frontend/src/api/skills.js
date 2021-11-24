import { API } from "../config";

export const getSkills = () => {
    return fetch(`${API}/skills/list`).then(response => response.json());
};



