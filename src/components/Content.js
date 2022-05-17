import React, {useState} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "../styles/Content.css";

export default function Content() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return (
        <div>
          <Banner />
          <About currentPage={currentPage} />
        </div>
      );
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
      return <About currentPage={currentPage} />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-container">
      <div className="content-wrapper">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
