import logo from './logo.svg';
import './App.css';
import { Routes, Route ,Switch} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import DashboardMedium from './pages/DashboardMedium';
import DashboardMore from './pages/DashboardMore';

function App() {  
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard-medium" element={<DashboardMedium />} />
            <Route path="/dashboard-more" element={<DashboardMore />} />
        </Routes>
    </div>
  );
}

export default App;
