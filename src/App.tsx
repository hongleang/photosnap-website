import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Stories from "./page/Stories";
import Features from "./page/Features";
import Layout from "./page/Layout";
import Pricing from "./page/Pricing";
import NoMatch from "./page/NoMatch";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {

  return (
    <>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </>
  )
}

export default App
