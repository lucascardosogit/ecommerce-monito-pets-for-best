import axios from 'axios';
import { Item } from './types/ItemType';
import { Pet } from './types/PetType';

const API_URL = 'http://localhost:3025'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getItems = async (): Promise<Item[]> => {
    try {
    const response = await api.get('/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const getItemsById = async (id: number): Promise<Item> => {
    try {
    const response = await api.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching items in id ${id}:`, error);
    throw error;
  }
};

export const getPets = async (): Promise<Pet[]> => {
    try {
    const response = await api.get('/pets');
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const getPetsById = async (id: number): Promise<Pet> => {
    try {
    const response = await api.get(`/pets/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pets in id ${id}:`, error);
    throw error;
  }
};



//Pedir ajuda para verificar se as rotas da API estão certas e começar a fazer os componentes e estilização da página