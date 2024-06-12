import "./App.css";
import AddStudent from "./components/AddStudent";
import AllStudent from "./components/AllStudent";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/add" exact component={AddStudent} />
        <Route path="/" exact component={AllStudent} />
      </div>
    </Router>
  );
}

export default App;
