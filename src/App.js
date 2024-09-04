import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import BookingPage from "./components/BookingForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reserve-table" element={<BookingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
