import axios from "axios";

 const baseURL = "https://CharteredProApp-2.onrender.com/Accounts"

 export const fetchAccountants = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data; 
  } catch (error) {
    console.error('Error fetching accountants:', error);
    throw error; 
  }
};

export const fetchAccountantDetails = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching accountant details:', error);
    throw error;
  }
};