import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/history");
      setHistory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sortingHistory = history.filter((item) =>
    item.algorithm.includes("Sort"),
  );

  const searchingHistory = history.filter((item) =>
    item.algorithm.includes("Search"),
  );

  const deleteHistory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/history/${id}`);

      fetchHistory();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
        padding: "20px",
        textAlign: "center",
        color: "#1e293b",
      }}
    >
      <h1 style={{ color: "white" }}>Algorithm History</h1>
      <h2 style={{ color: "white" }}>Sorting History</h2>

      {sortingHistory.map((item) => (
        <div
          key={item._id}
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: "15px",
            margin: "15px auto",
            borderRadius: "12px",
            maxWidth: "500px",
            color: "white",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3>{item.algorithm.toUpperCase()}</h3>

          <p>
            <strong>Array:</strong> {item.array.join(", ")}
          </p>
          {item.target !== undefined && (
            <p>
              <strong>Target:</strong> {item.target}
            </p>
          )}

          {item.foundIndex !== undefined && (
            <p>
              <strong>Found Index:</strong> {item.foundIndex}
            </p>
          )}

          <p>
            <strong>Time:</strong> {new Date(item.createdAt).toLocaleString()}
          </p>
          <button
            onClick={() => deleteHistory(item._id)}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            🗑 Delete
          </button>
        </div>
      ))}
      <h2 style={{ color: "white", marginTop: "40px" }}>Searching History</h2>

      {searchingHistory.map((item) => (
        <div
          key={item._id}
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: "15px",
            margin: "15px auto",
            borderRadius: "12px",
            maxWidth: "500px",
            color: "white",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h3>{item.algorithm.toUpperCase()}</h3>

          <p>
            <strong>Array:</strong> {item.array.join(", ")}
          </p>

          <p>
            <strong>Target:</strong> {item.target}
          </p>

          <p>
            <strong>Found Index:</strong> {item.foundIndex}
          </p>

          <p>
            <strong>Time:</strong> {new Date(item.createdAt).toLocaleString()}
          </p>

          <button
            onClick={() => deleteHistory(item._id)}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            🗑 Delete
          </button>
        </div>
      ))}
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        ⬅ Back
      </button>
    </div>
  );
}

export default History;
