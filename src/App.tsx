import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";
import Drawer from "./components/Drawer";
import TutorialsPage from "./pages/TutorialsPage";
import TasksPage from "./pages/TasksPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Box>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
