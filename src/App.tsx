import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  return (
    <BackgroundAnimation>
      <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl">
        <p className="flex flex-col gap-4 bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl">
          <span>Melody Motion</span>
          <span className="text-xl md:text-2xl lg:text-4xl">X</span>
          <span>Picxx</span>
        </p>
      </div>
    </BackgroundAnimation>
  );
}

export default App;
