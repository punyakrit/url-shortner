import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div>
      <main className="min-h-screen container">
        <Header/>
        <Outlet />
      </main>
      <footer className="p-10 text-center  bg-gray-900  text-white mt-10">
        Made by Punyakrit ❤️
      </footer>
    </div>
  );
}


export default AppLayout;
