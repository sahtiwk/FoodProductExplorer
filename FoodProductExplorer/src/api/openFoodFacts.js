import axios from "axios";

const api = axios.create({
    baseURL: "https://world.openfoodfacts.org/",
    headers: {
        "User-Agent": "FoodProductExplorer/1.0 (sathwikreddydudipala@gmail.com)"
    }
});

export const searchProducts = async({query, page= 1, pageSize= 20}) => {
    const res = await api.get("/cgi/search.pl", {
        params: {
            search_terms: query,
            json: true,
            page,
            page_size: pageSize
        }
    });
    return res.data.products;
}

export const getProductByCategory = async ({category, page=1}) => {
    const res= await api.get("/api/v2/search", {
        params: {
            categories_tags_en: category,
            page,
            page_size: 20
        }
    });
    return res.data.products;
}