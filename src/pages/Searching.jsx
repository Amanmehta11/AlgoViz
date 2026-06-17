import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Searching() {
  const [array, setArray] = useState([5, 3, 8, 2, 9, 1]);
  const [target, setTarget] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [algorithm, setAlgorithm] = useState("linear");
  const navigate = useNavigate();

const saveHistory = async (
  algorithmName,
  arrayData,
  targetValue,
  foundPosition
) => {
  try {
    await axios.post("http://localhost:5000/history", {
      algorithm: algorithmName,
      array: arrayData,
      target: Number(targetValue),
      foundIndex: foundPosition,
    });

    console.log("History Saved");
  } catch (error) {
    console.log(error);
  }
};

  const linearSearch = async () => {
    for (let i = 0; i < array.length; i++) {
      setActiveIndex(i);

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (array[i] == target) {
  setFoundIndex(i);

await saveHistory(
  "Linear Search",
  array,
  target,
  i
);

  return;
}
    }

    alert("Element not found ❌");
  };
  const handleSearch = () => {
    if (algorithm === "linear") {
      linearSearch();
    } else if (algorithm === "binary") {
      binarySearch();
    }
  };
  const binarySearch = async () => {
    let arr = [...array].sort((a, b) => a - b); // IMPORTANT
    setArray(arr);

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      setActiveIndex(mid);

      await new Promise((res) => setTimeout(res, 600));

      if (arr[mid] == target) {
  setFoundIndex(mid);

await saveHistory(
  "Binary Search",
  arr,
  target,
  mid
);

  return;
}else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    alert("Element not found ❌");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ color: "white" }}>Searching Visualizer</h1>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ color: "white" }}>Select Algorithm:</label>

          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            style={styles.select}
          >
            <option value="linear">Linear Search</option>
            <option value="binary">Binary Search</option>
          </select>
        </div>
        <input
          type="number"
          placeholder="Enter number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          style={styles.input}
        />

        <button style={styles.mainButton} onClick={handleSearch}>
          🔍 Start Search
        </button>
        <p style={{ color: "#e2e8f0", fontWeight: "bold" }}>
          Current Algorithm: {algorithm.toUpperCase()}
        </p>

        <div style={styles.barContainer}>
          {array.map((value, index) => (
            <div
              key={index}
              style={{
                ...styles.bar,
                height: value * 30 + "px",
                backgroundColor:
                  index === foundIndex
                    ? "#22c55e"
                    : index === activeIndex
                      ? "#ef4444"
                      : "#3b82f6",
              }}
            >
              {value}
            </div>
          ))}
        </div>

        <button style={styles.backButton} onClick={() => navigate("/")}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
  },
  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
  },

  input: {
    marginTop: "20px",
    padding: "12px",
    width: "220px",
    borderRadius: "10px",
    border: "none",
    textAlign: "center",
    outline: "none",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
  },
  card: {
    width: "400px", // ⭐ ADD THIS
    maxWidth: "90%",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    color:"white",
  },
  mainButton: {
    marginTop: "20px",
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(45deg, #3b82f6, #2563eb)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0px 5px 15px rgba(37,99,235,0.5)",
    transition: "0.3s",
  },
  backButton: {
    marginTop: "30px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    cursor: "pointer",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
  },
  barContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "10px",
    marginTop: "40px",
  },
  header: {
    width: "100%",
    backgroundColor: "#020617",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    alignItems: "center",
  },
  bar: {
    width: "40px",
    color: "white",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "5px",
    borderRadius: "5px",
  },
};

export default Searching;
