import Navbar from "@/components/nav";
import { Outlet, Route, Routes } from "react-router-dom";
import { Footer, FooterMobile } from "./components/footer";
import { MainPage } from "./pages";
import AboutPage from "./pages/about";
import ArticlesPage from "./pages/articles";
import ContactUsPage from "./pages/contact-us";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-background-default" >
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about/*" element={<AboutPage />} />
        <Route path="articles/*" element={<ArticlesPage />} />
        <Route path="contact-us/*" element={<ContactUsPage />} />
      </Routes>
      <Footer />
      <FooterMobile />
    </div>
  );
}
