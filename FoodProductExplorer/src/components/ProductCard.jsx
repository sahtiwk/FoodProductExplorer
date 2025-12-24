function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px" }}>
      <img
        src={product.image_front_small_url}
        alt={product.product_name}
        width="100"
      />
      <h3>{product.product_name || "Unnamed product"}</h3>
      <p>Category: {product.categories || "N/A"}</p>
      <p>Nutri-Score: {product.nutriscore_grade?.toUpperCase() || "N/A"}</p>
    </div>
  );
}

export default ProductCard;
