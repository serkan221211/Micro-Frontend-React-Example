import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">About</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Biz Kimiz?</h2>
          <p className="mb-4">
            Biz, kullanıcılarımıza en iyi hizmeti sunmayı amaçlayan bir ekibiz.
            Misyonumuz, kaliteli ve güvenilir çözümler sunmaktır.
          </p>
          <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
          <p>
            Vizyonumuz, sektörde lider konuma gelmek ve yenilikçi çözümlerle
            fark yaratmaktır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
