import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>about</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
