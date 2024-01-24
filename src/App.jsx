import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import Contact from "./sections/contact/contact";
import Featured from "./sections/features/featured";
import Collect from "./sections/collect/collect";
import Header from "./sections/header/header";
import Latest from "./sections/latest/latest";
import Navbar from "./sections/navbar/navbar";
import Offer from "./sections/offer/offer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Offer />
      <Featured />
      <Collect />
      <Latest />
      <Contact />
    </>
  );
}

export default App;
