import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import Footer from "./components/footer/footer.component";
import Testimonials from "./routes/testimonials/testimonials.component";
import Blog from "./routes/blog/blog.component";
import Join from "./routes/join/join.component";
import ScrollToTop from "./utils/hooks/scrollToTop";
import CareerInWebdev from "./routes/articles/career-in-webdev/webdevcareer.component";

function App() {
  return (
    <>
      <Navigation />

      <ScrollToTop />

      <div className="yes">
        <Routes>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="join" element={<Join />} />
          <Route path="blog" element={<Blog />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route
            path="blog/articles/career-in-webdev"
            element={<CareerInWebdev />}
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
