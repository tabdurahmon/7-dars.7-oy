const { default: Link } = require("next/link");
import Navbar from "../components/Navbar";

const getData = async () => {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();
  return { data };
};

async function Home() {
  const { data } = await getData();
  return (
    <div className="min-h-screen bg-gray-100  p-6">
      <Navbar />;
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.products.map((prod) => {
          return (
            <Link key={prod.id} href={`singleProduct/${prod.id}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <h3 className="text-2xl font-semibold mb-3 text-gray-700">
                  {prod.title}
                </h3>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  className="w-full  h-48 object-cover mb-4 rounded-lg"
                />
                <p className="text-gray-500 truncate">{prod.description}</p>
                <div className="mt-4">
                  <span className="text-xl font-bold text-gray-800">
                    ${prod.price}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
