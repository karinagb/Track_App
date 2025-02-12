import Header from "../components/Header";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-5xl font-extrabold text-green-500">Track App</h1>
        <p className="text-gray-300 mt-3 text-lg max-w-md">
          Search for your favorite tracks by ISRC code and get instant details.
        </p>
      </div>
    </div>
  );
}

export default Home;
