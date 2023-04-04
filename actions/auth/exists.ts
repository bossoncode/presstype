import axios from "axios";

const blogExists = async (email: string) => {
  try {
    const response = await axios.get(`/api/auth/exists?email=${email}`);
    return response;
  } catch (error) {
    return error;
  }
};

export default blogExists;
