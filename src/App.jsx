import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import NavigationBar from "./components/NavigationBar";
import Tentang from "./pages/Tentang";
import Interior from "./pages/Interior";
import Eksterior from "./pages/Eksterior";
import Kontak from "./pages/Kontak";
import Notfound from "./pages/Notfound";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <WhatsappButton />
        <Routes>
          <Route path="/" element={<Beranda />}></Route>
          <Route path="/interior" element={<Interior />}></Route>
          <Route path="/eksterior" element={<Eksterior />}></Route>
          <Route path="/tentang" element={<Tentang />}></Route>
          <Route path="/kontak" element={<Kontak />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
