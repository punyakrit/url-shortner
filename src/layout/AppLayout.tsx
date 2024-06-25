import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <main className="min-h-screen container">
        Appbar
        <Outlet />
      </main>
      <footer className="p-10 text-center  bg-gray-900  text-white mt-10">
        Made by Punyakrit ❤️
      </footer>
    </div>
  );
}


export default AppLayout;
