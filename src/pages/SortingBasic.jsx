// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Sorting() {
//   const [array, setArray] = useState([5, 3, 8, 2, 9, 1]);
  
//   const [activeIndex, setActiveIndex] = useState([]);
//   const [speed, setSpeed] = useState(500);
//   const navigate = useNavigate();

//   const generateArray = () => {
//     const newArray = [];
//     for (let i = 0; i < 6; i++) {
//       newArray.push(Math.floor(Math.random() * 10) + 1);
//     }
//     setArray(newArray);
//   };

//   const bubbleSort = async () => {
//     let arr = [...array];

//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         setActiveIndex([j, j + 1]);

//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;

//           setArray([...arr]);
//         }

//         await new Promise((resolve) => setTimeout(resolve, speed));
//       }
//     }

//     setActiveIndex([]); // reset after sorting
//   };
  


//   return (
//      <div style={{ width: "100%", overflowX: "hidden" }}>
//     <div style={styles.header}>
//   <h2>SORTING VISUALIZER</h2>
//   <p>ALGORITHM LAB</p>
// </div>

//     <div style={styles.container}>
//       <div style={{ marginTop: "20px", textAlign: "center" }}>
//           <label>Select Algorithm: </label>

          
//         </div>
//         <button style={styles.button} onClick={() => navigate("/")}>
//   ⬅ Back
// </button>
      
      
//       <h1>Sorting Visualizer</h1>

//       {/* SPEED SECTION */}



// {/* MAIN BUTTONS */}
// <div style={styles.buttons}>
//   <button style={styles.button} onClick={generateArray}>
//     Generate New Array
//   </button>

//   <button onClick={bubbleSort}>
//     Start Sorting
//   </button>

// </div>
      
//       <div style={styles.barContainer}>
//         {array.map((value, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.bar,
//               height: value * 30 + "px",
//               backgroundColor: activeIndex.includes(index) ? "red" : "#3b82f6",
//             }}
//           >
//             {value}
//           </div>
//         ))}
//       </div>
     
// </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   minHeight: "100vh",
//   backgroundColor: "#e5e7eb",
//   width: "100%",              // add this
//   boxSizing: "border-box",
//    width: "100%",
//   overflowX: "hidden",
// },
// speedContainer: {
//   display: "flex",
//   gap: "10px",
//   marginTop: "20px",
//   alignItems: "center",
// },
// footer: {
//   width: "100%",
//   backgroundColor: "#ef4444",
//   color: "white",
//   textAlign: "center",
//   padding: "10px",
//   marginTop: "30px",
// },
//   button: {
//   padding: "10px 18px",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   backgroundColor: "white",
//   cursor: "pointer",
//   fontWeight: "bold",
// },
//   barContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     gap: "10px",
//     marginTop: "40px",
//   },
//  header: {
//   width: "100%",
//   boxSizing: "border-box",  // ⭐ IMPORTANT
//   backgroundColor: "#111",
//   color: "white",
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "15px 30px",
//   alignItems: "center",
// },
//   bar: {
//     width: "30px",
//     color: "white",
//     display: "flex",
//     alignItems: "flex-end",
//     backgroundColor: "#2563eb",
//     justifyContent: "center",
//     paddingBottom: "5px",
//     borderRadius: "4px",
//   },
// };

// export default Sorting;
