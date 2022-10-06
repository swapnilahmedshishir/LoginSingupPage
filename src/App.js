import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientSingUP from "./component/ClientSingUp/ClientSingUP";
import Erro from "./component/Erro/Erro";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Privacy from "./component/Privacy/Privacy";
import Terms from "./component/Terms/Terms";
import WorkerSingUp from "./component/WorkerSingUp/WorkerSingUp";
import logo from "./images/logo-netOne-primary.png";

function App() {
  return (
    <div className="app">
      <Link to="/home">
        <img className="logo" src={logo} alt="logo_img" />{" "}
      </Link>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/singup" element={<ClientSingUP />} />
        <Route path="/worker/singup" element={<WorkerSingUp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </div>
  );
}

export default App;
