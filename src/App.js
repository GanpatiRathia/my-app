import "./App.css";
import Navlink from "./Navlink";
import Footer from "./Footer";
function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Navlink/> {/* Edit Navlink */}
      </header>
      <footer>
        <Footer/> {/* Add */}
      </footer>
    </div>
  );
}

export default App;
