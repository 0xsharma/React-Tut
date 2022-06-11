import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Appbar from "./components/Appbar";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";


function App() {
  return (
    <div >
      <Router>
        <div>
          <Appbar />
          <Routes>

            <Route path="/" element={<>Home Page</>} />

            <Route path="/page1" element={<Page1 />} />

            <Route path="/page2" element={<Page2 />} />

            <Route path="/page3" element={<Page3 />} />

            <Route path="*" element={<>Invalid Page</>} />

          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
