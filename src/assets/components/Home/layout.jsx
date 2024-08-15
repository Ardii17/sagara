import { useContext } from "react";
import { ThemeContext } from "../../context";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";

const items = [
  {
    label: <Link to="/">Logout</Link>,
    key: "0",
  },
];

export default function HomeLayout({ children }) {
  const { device, sidebarActive, setSidebarActive } = useContext(ThemeContext);

  return (
    <section className="flex h-screen max-h-screen w-screen max-w-screen">
      <Sidebar />
      <section className="w-full h-screen bg-slate-100 flex flex-col overflow-auto">
        <div
          className={`${
            device ? "justify-between" : "justify-end"
          } flex py-2 bg-white px-4 shadow`}
        >
          {device && (
            <button onClick={() => setSidebarActive(!sidebarActive)}>
              <i className="bx bx-menu text-xl" />
            </button>
          )}
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <div className="flex gap-4 items-center justify-center cursor-pointer">
                <div className="flex flex-col items-end justify-center">
                  <p className="font-semibold">Muhammad Ardiansyah Firdaus</p>
                  <p>Admin</p>
                </div>
                <img
                  src="./../Ellipse 2824.png"
                  alt="Profile Image"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </a>
          </Dropdown>
        </div>
        <div className={`flex-grow`}>
          <div
            className={`${
              sidebarActive
                ? "absolute inset-0 bg-black bg-opacity-50 pointer-events-none z-10"
                : ""
            }`}
          ></div>
          {children}
        </div>
      </section>
    </section>
  );
}
