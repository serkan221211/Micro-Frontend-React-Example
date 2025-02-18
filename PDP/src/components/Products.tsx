const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$59.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "$129.99",
    image: "https://via.placeholder.com/150",
  },
];

const Products = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-3"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
