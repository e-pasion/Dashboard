import "./App.css";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import Notifications from "./pages/Notifications";
import TableList from "./pages/TableList";
import Typography from "./pages/Typography";
import UserProfile from "./pages/UserProfile";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <div className="ml-72">
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/icons" element={<Icons />}></Route>
            <Route path="/maps" element={<Maps />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
            <Route path="/table" element={<TableList />}></Route>
            <Route path="/typo" element={<Typography />}></Route>
            <Route path="/user" element={<UserProfile />}></Route>

          </Routes>

      </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;
