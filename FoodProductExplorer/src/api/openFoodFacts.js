import axios from "axios";

const api = axios.create({
  baseURL: "https://world.openfoodfacts.org",
  headers: {
    "User-Agent": "FoodProductExplorer/1.0 (your.email@example.com)",
  },
});

export const fetchProducts = async ({ page = 1, pageSize = 20 }) => {
  const response = await api.get("/cgi/search.pl", {
    params: {
      search_terms: "",
      json: true,
      page,
      page_size: pageSize,
    },
  });

  return response.data.products;
};

export const searchProductsByName = async ({ query, page = 1, pageSize = 20 }) => {
  const response = await api.get("/cgi/search.pl", {
    params: {
      search_terms: query,
      json: true,
      page,
      page_size: pageSize,
    },
  });

  return response.data.products;
};
