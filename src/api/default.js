import axios from "axios";
export const defaultFN = () => {
  throw new Error("Not Implemented");
};

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default {
  search: async (value) => {
    const posts = await client.get("/posts");

    return posts.data.filter((post) => post.title.indexOf(value) > 0);
  },
};
