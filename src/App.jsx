import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingCarousel from "./components/LandingCarousel";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Register from "./components/Register";
import NoSidebarLayout from "./layouts/NoSidebarLayout";
import SidebarLayout from "./layouts/SidebarLayout";
import ListTestimonials from "./components/ListTestimonials";
import ProtectedRoutes from "./components/ProtectedRoute";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <LandingCarousel />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsappButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Tanpa Sidebar */}
        <Route
          path="/login"
          element={
            <NoSidebarLayout>
              <Login />
            </NoSidebarLayout>
          }
        />
        <Route
          path="/register"
          element={
            <NoSidebarLayout>
              <Register />
            </NoSidebarLayout>
          }
        />
        <Route
          path="/"
          element={
            <NoSidebarLayout>
              <LandingPage />
            </NoSidebarLayout>
          }
        />

        {/* Routes DENGAN Sidebar */}
        <Route element={<SidebarLayout />}>
          {/* Projects */}
          <Route
            path="/admin"
            element={
              <ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>
            }
          />
          {/* Testimonials */}
          <Route
            path="/admin/testimonial"
            element={
              <ProtectedRoutes>
                <ListTestimonials />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
