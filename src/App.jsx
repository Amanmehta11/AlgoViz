import { Routes, Route, useNavigate } from "react-router-dom";
import Sorting from "./pages/Sorting";
import Searching from "./pages/Searching";
import Home from "./pages/Home";
import History from "./pages/History";
// import SortingBasic from "./pages/SortingBasic";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sorting" element={<Sorting />} />
      <Route path="/searching" element={<Searching />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
    color: "white",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#3b82f6",
    color: "white",
  },
};

export default App;
