import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Home</h1>
        <p className="text-lg text-center mb-4">
          Hoş geldiniz! Web sitemizde gezinmekten keyif alacağınızı umuyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Özellik 1</h2>
            <p>
              Bu özellik, kullanıcılarımıza sunduğumuz en iyi hizmetlerden
              biridir.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Özellik 2</h2>
            <p>
              Bu özellik, kullanıcı deneyimini artırmak için tasarlanmıştır.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Özellik 3</h2>
            <p>Bu özellik, performansı ve verimliliği artırır.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Daha Fazla Bilgi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
