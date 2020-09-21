import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPeople = async (search) => {
  const { data } = await instance.get("/people", { params: { search } });
  return data;
};

export default instance;
