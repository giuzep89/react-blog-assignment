import axios from 'axios';

// I have to admit: this patten was suggested by AI, but I find it incredibly clever.
// All the API functions in one file so that I can call them whenever needed.
// For now I'm just using the getPostById one as practice.

const BASE_URL = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api';
const HEADERS = {
    'novi-education-project-id': 'c5b1327a-6c34-419a-8701-6b842cba268c'
};

export async function getAllPosts() {
    const response = await axios.get(`${BASE_URL}/blogposts`, { headers: HEADERS });
    return response.data;
}

export async function getPostById(id) {
    const response = await axios.get(`${BASE_URL}/blogposts/${id}`, { headers: HEADERS });
    return response.data;
}

export async function createPost(postData) {
    const response = await axios.post(`${BASE_URL}/blogposts`, postData, { headers: HEADERS });
    return response.data;
}

export async function deletePostById(id) {
    await axios.delete(`${BASE_URL}/blogposts/${id}`, { headers: HEADERS });
}