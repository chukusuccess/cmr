// import { Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h2 className="text-red-500">bsjbksbks</h2>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import { Audience } from "./screens/Audience";
import { Dj } from "./screens/Dj";
import { Home } from "./screens/Home";
import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dj" element={<Dj />} />
      <Route path="/audience" element={<Audience />} />
    </Routes>
  );
};
