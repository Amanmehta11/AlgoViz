import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>AlgoViz 🚀</h1>
      <p>Visualize Algorithms in a Simple Way</p>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => navigate("/sorting")}>
          Sorting Visualizer
        </button>

        <button style={styles.button} onClick={() => navigate("/searching")}>
          Searching Visualizer
        </button>
      </div>
    </div>
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

  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
  },

  button: {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Home;