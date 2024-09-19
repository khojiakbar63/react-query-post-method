import { reqLocal } from "../axios.config";

export const postAPI = {
  get: async () => {
    try {
      const res = await reqLocal.get("/posts");
      return res.data;
    } catch (err) {
      throw new Error("Failed to fetch posts");
    }
  },
  create: async (data) => {
    try {
      const res = await reqLocal.post("/posts", data);
      return res.data;
    } catch (err) {
      throw new Error("Failed to create post");
    }
  },
  update: async (id, data) => {
    try {
      const res = await reqLocal.put(`/posts/${id}`, data);
      return res.data;
    } catch (err) {
      throw new Error("Failed to update post");
    }
  },
  delete: async (id) => {
    try {
      const res = await reqLocal.delete(`/posts/${id}`);
      return res.data;
    } catch (err) {
      throw new Error("Failed to delete post");
    }
  },
};
