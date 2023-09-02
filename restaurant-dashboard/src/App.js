import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./AppRoutes";
import SideBarMenu from "./components/sideBarMenu/SideBarMenu";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <SideBarMenu children={<AppRoutes />} />
    </>
  );
}

export default App;
