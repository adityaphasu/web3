import Board from "./components/Board";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-40 lg:pt-32 pb-5">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-medium text-center">CL Web3 Grants Database</h1>
          <p className="text-[#ffffff7a] max-w-[45rem] text-center px-4">
            Empowering Web3 projects with a dynamic grant database of over 80 opportunities.
            <br />
            The database is updated every 48 hours to ensure the most accurate and active
            opportunities.
          </p>
        </div>
        <div className="w-[80%] mx-auto my-6">
          <div className="flex items-center pt-3 gap-5 font-medium text-white mb-0.5 border-b border-gray-600">
            <p className="relative">
              Search Grants
              <span className="w-full absolute bg-[#00bbfc] h-0.5 left-0 bottom-0"></span>
            </p>
          </div>
          <Board />
        </div>
      </main>
      <footer className="flex flex-col items-center space-y-2 pb-8">
        <div className="w-[14.625rem] mb-1">
          <a href="https://www.cornarolabs.xyz" target="_blank" rel="noreferrer">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        <div>
          <p className="flex flex-col items-center space-y-2 mt-4 text-[#ffffff7a]/20 text-xs text-center">
            <span>© Cornaro Labs 2025. All rights reserved.</span> For inquiries, please reach out
            to us at info@cornarolabs.xyz
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
