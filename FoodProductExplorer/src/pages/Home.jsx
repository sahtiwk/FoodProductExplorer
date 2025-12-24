import { useEffect, useState } from "react";
import { fetchProducts, searchProductsByName } from "../api/openFoodFacts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = searchQuery
        ? await searchProductsByName({ query: searchQuery })
        : await fetchProducts({ page: 1 });

      setProducts(data);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts({ page: 1 });
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Food Product Explorer</h1>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;