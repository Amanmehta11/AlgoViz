import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.watermark}>
  <div style={{ ...styles.watermarkBar, height: "160px" }}></div>
  <div style={{ ...styles.watermarkBar, height: "280px" }}></div>
  <div style={{ ...styles.watermarkBar, height: "160px" }}></div>
  <div style={{ ...styles.watermarkBar, height: "390px" }}></div>
  <div style={{ ...styles.watermarkBar, height: "280px" }}></div>
  <div style={{ ...styles.watermarkBar, height: "460px" }}></div>
  <div style={{ ...styles.watermarkBar, height: "340px" }}></div>
  <div style={{ ...styles.watermarkBar, height: "580px" }}></div>
</div>
      <h1><b> ALGOVIZ</b> </h1>
    
      <h3>"Visualize Algorithms in a Simple Way"</h3>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => navigate("/sorting")}>
          Sorting Visualizer
        </button>

        <button style={styles.button} onClick={() => navigate("/searching")}>
          Searching Visualizer
        </button>
        <button style={styles.button} onClick={() => navigate("/history")}>
          📜 View History
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
    position: "relative",
  overflow: "hidden",
  },

  watermark: {
  position: "absolute",
  left: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-evenly",
  opacity: 0.04,
  zIndex: 0,
  pointerEvents: "none",
},

watermarkBar: {
  width: "60px",
  backgroundColor: "white",
  borderRadius: "10px 10px 0 0",
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
