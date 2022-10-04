import Options from "./components/Options";
import Output from "./components/Output";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="min-h-screen bg-darkGray text-beige">
      <div className="container px-4 py-8 mx-auto">
        <Options />
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <Preview />
          <Output />
        </div>
      </div>
    </div>
  );
}

export default App;
