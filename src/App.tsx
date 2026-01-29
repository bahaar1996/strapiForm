import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppProvider from "./context/AppContext";
import Application from "./pages/application/Application";
import Login from "./pages/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/application"
          element={
            <div className="bg-blue-950 min-h-screen flex flex-col items-center ">
              <AppProvider>
                <Application />
              </AppProvider>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
