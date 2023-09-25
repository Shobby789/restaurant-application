import "./App.css";
import AppRoutes from "./AppRoutes";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar children={<AppRoutes />} />
    </div>
  );
}

export default App;
