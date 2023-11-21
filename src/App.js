import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header";
import Main from "./page/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </div>
  );
}

export default App;
