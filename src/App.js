import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { GlobalSTyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import { SingleProductPage } from "./Pages/SingleProductPage";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";


function App() {

  const theme = {
    colors : { 
      FontFace: "Kanit, sans-serif",
      mainColor: "black",
      themecolor: "#0877B6",
      fontSize: "2rem",
    },
    media : {
      tab: "998px",
      mobile: "1250px"

    }
  }
  return (
    <ThemeProvider theme = {theme}>
    <GlobalSTyle />
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/singleproduct/:id" element={<SingleProductPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
