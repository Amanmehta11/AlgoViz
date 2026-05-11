import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sorting() {
  const [array, setArray] = useState([5, 3, 8, 2, 9, 1]);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [activeIndex, setActiveIndex] = useState([]);
  const [speed, setSpeed] = useState(500);
  const navigate = useNavigate();

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 6; i++) {
      newArray.push(Math.floor(Math.random() * 10) + 1);
    }
    setArray(newArray);
  };

  const bubbleSort = async () => {
    let arr = [...array];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setActiveIndex([j, j + 1]);

        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          setArray([...arr]);
        }

        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }

    setActiveIndex([]); // reset after sorting
  };
  const handleSort = () => {
    if (algorithm === "bubble") {
      bubbleSort();
    } else if (algorithm === "selection") {
      selectionSort();
    } else if (algorithm === "insertion") {
      insertionSort();
    }
  };
  const selectionSort = async () => {
    let arr = [...array];

    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        setActiveIndex([minIndex, j]);

        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }

        await new Promise((res) => setTimeout(res, speed));
      }

      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

      setArray([...arr]);
    }

    setActiveIndex([]);
  };
  const insertionSort = async () => {
    let arr = [...array];

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        setActiveIndex([j, j + 1]);

        arr[j + 1] = arr[j];
        j--;

        setArray([...arr]);
        await new Promise((res) => setTimeout(res, speed));
      }

      arr[j + 1] = key;
      setArray([...arr]);
    }

    setActiveIndex([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.row}>
          <label style={styles.label}>Select Algorithm:</label>

          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            style={styles.select}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
          </select>
        </div>

        <h1 style={{ marginTop: "10px", marginBottom: "10px" ,color:"white"}}>
  Sorting Visualizer
</h1>

        <div style={styles.row}>
          <span style={styles.label}>Speed:</span>

          <button style={styles.button} onClick={() => setSpeed(800)}>
            SLOW
          </button>
          <button style={styles.button} onClick={() => setSpeed(400)}>
            MED
          </button>
          <button style={styles.button} onClick={() => setSpeed(100)}>
            FAST
          </button>
        </div>

        {/* MAIN BUTTONS */}
        <div style={styles.row}>
          <button style={styles.button} onClick={generateArray}>
            Generate New Array
          </button>

          <button style={styles.button} onClick={generateArray}>
            Reset
          </button>
        </div>
        <div style={styles.mainButtonWrapper}>
          <button style={styles.mainButton} onClick={handleSort}>
            ▶ Start Sorting
          </button>
        </div>

        <h3>Current Algorithm: {algorithm.toUpperCase()}</h3>
        <div style={styles.barContainer}>
          {array.map((value, index) => (
            <div
              key={index}
              style={{
                ...styles.bar,
                height: value * 30 + "px",
                backgroundColor: activeIndex.includes(index)
                  ? "red"
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
  card: {
    width: "500px",
    maxWidth: "95%",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
  },
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
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
  },
  backButton: {
    marginTop: "30px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    cursor: "pointer",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },

  mainButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  speedContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    backgroundColor: "#ef4444",
    color: "white",
    textAlign: "center",
    padding: "10px",
    marginTop: "30px",
  },
  button: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  barContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "10px",
    marginTop: "40px",
  },

  bar: {
    width: "30px",
    color: "white",
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: "#2563eb",
    justifyContent: "center",
    paddingBottom: "5px",
    borderRadius: "4px",
  },
  row: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "15px",
  flexWrap: "wrap",
},

label: {
  color: "#e2e8f0",
  fontWeight: "500",
},

select: {
  padding: "6px",
  borderRadius: "6px",
  border: "none",
},
};

export default Sorting;
