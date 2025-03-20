export const fetchProducts = async () => {
    const response = await fetch('/data/products.json'); // Fetch from local JSON file
    const data = await response.json();
    return data;
  };
  