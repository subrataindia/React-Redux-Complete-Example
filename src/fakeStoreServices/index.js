function services() {
  const getAllProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      return await res.json();
    } catch (e) {
      return e;
    }
  };

  return {
    getAllProducts,
  };
}

const fakeStoreServices = services();

export default fakeStoreServices;
