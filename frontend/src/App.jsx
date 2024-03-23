import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/loading/Loading";
const Home = lazy(() => import("./pages/Home"));
const EditNote = lazy(() => import("./pages/EditNote"));
const NewNote = lazy(() => import("./pages/NewNote"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/create" element={<NewNote />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
