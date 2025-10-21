import HomePage from "./components/HomePage.js";
import Navbar from "./components/Navbar.js";

function App() {

  return (
    <>
    <div> 
      <div className="min-h-screen">
        <Navbar/>
        <HomePage/>
      </div>
    </div>
    </>
  );
}

export default App;
