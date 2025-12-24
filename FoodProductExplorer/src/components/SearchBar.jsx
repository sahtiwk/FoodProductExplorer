function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search food products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
