import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:barcode" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// function App() {
//   return (
//     <div style={{ color: "white", padding: "20px" }}>
//       <h1>App is rendering ✅</h1>
//     </div>
//   );
// }

// export default App;
