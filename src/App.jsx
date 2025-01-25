import Board from "./components/Board";

function App() {
  return (
    <main className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-medium text-center">CL Web3 Grants Database</h1>
        <p className="text-[#ffffff7a] max-w-[45rem] text-center">
          Empowering Web3 projects with a dynamic grant database of over 80 opportunities.
          <br />
          The database is updated every 48 hours to ensure the most accurate and active
          opportunities.
        </p>
      </div>
      <Board />
      <div className="flex flex-col items-center space-y-4">
        <div className="w-[14.625rem] my-8">
          <a href="https://www.cornarolabs.xyz">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        <footer>
          <p className="flex flex-col items-center space-y-2 mt-4 text-[#ffffff7a]/20 text-xs">
            <span>© Cornaro Labs 2025. All rights reserved.</span> For inquiries, please reach out
            to us at info@cornarolabs.xyz
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
