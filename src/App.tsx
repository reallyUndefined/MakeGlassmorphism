import Options from "./components/Options";
import Output from "./components/Output";
import Preview from "./components/Preview";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="min-h-screen bg-darkGray text-beige font-notoSans">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-4">
          <img src={logo} alt="" className="mx-auto w-32 rounded-md lg:w-44" />
        </div>
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
