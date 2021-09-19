import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todo from "./components/Todo";
import ThemeContextProvider from "./contexts/ThemContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Todo />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
