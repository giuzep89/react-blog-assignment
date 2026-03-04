import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export async function getAllPosts() {
    const response = await axios.get(`${BASE_URL}/blogposts`);
    return response.data;
}

export async function getPostById(id) {
    const response = await axios.get(`${BASE_URL}/blogposts/${id}`);
    return response.data;
}

export async function createPost(postData) {
    const response = await axios.post(`${BASE_URL}/blogposts`, postData);
    return response.data;
}

export async function deletePostById(id) {
    await axios.delete(`${BASE_URL}/blogposts/${id}`);
}