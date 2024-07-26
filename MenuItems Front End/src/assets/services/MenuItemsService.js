import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8083/api/menuitems';

export const listMenuItems = ()=> axios.get(REST_API_BASE_URL);

export const createMenuItems= (menuItems) => axios.post(REST_API_BASE_URL, menuItems);

export const getMenuItems = (menuId) => axios.get(REST_API_BASE_URL+'/'+ menuId);

export const updateMenuItems = (menuId, menuItems) => axios.put(REST_API_BASE_URL+'/'+ menuId, menuItems);

export const deleteMenuItems = (menuId) => axios.delete(REST_API_BASE_URL+'/'+ menuId);