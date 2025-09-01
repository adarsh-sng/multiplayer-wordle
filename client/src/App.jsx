import "./App.css";
import { Board } from "./Components/Board";

function App() {
  return (
    <div className="min-h-[100dvh] bg-neutral-900 text-white flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8 sm:mb-12">
        <div className="text-base sm:text-lg font-medium tracking-wide  mb-1 text-pink-300">
          Multiplayer
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.3em] text-pink-300">
          WORDLE
        </h1>
      </div>
      <Board />
    </div>
  );
}

export default App;
