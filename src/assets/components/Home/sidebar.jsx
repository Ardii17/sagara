import { useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { device, sidebarActive, setSidebarActive } = useContext(ThemeContext);
  const outSidebarRef = useRef();

  useEffect(() => {
    const handleClickOutsideSidebar = () => {
      if (outSidebarRef.current) {
        if (!outSidebarRef.current.contains(event.target)) {
          setSidebarActive(false);
        }
      }
    };

    window.addEventListener("mousedown", handleClickOutsideSidebar);

    return () => {
      window.removeEventListener("mousedown", handleClickOutsideSidebar);
    };
  }, []);

  return (
    <>
      {!device && (
        <section className="w-1/5 bg-black py-6 px-4 hidden md:block">
          <div className="flex flex-col gap-10">
            <img src="./../image 75.svg" alt="Logo" className="w-40" />
          </div>
          <div className="mt-8 font-semibold text-gray-100">
            <p>MENU</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to={"/dashboard"}>
                  <button
                    className={`${
                      pathname.split("/")[1] === "dashboard"
                        ? "bg-[#A51535]"
                        : ""
                    } w-full py-2 justify-start flex px-4 gap-4 rounded items-center`}
                  >
                    <i className="bx bxs-dashboard"></i> Dashboard
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/students"}>
                  <button
                    className={`${
                      pathname.split("/")[1] === "students"
                        ? "bg-[#A51535]"
                        : ""
                    } w-full py-2 justify-start flex px-4 gap-4 rounded items-center`}
                  >
                    <i className="bx bxs-graduation"></i> Students
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}

      {/* Mobile Sidebar */}
      {device && (
        <section
          ref={outSidebarRef}
          className={` ${
            sidebarActive ? "left-0" : "-left-1/2"
          } w-1/2 bg-black py-6 px-4 block md:hidden fixed top-0 bottom-0 z-20 transition-all`}
        >
          <div className="flex flex-col gap-10">
            <img src="./../image 75.svg" alt="Logo" className="w-40" />
          </div>
          <div className="mt-8 font-semibold text-gray-100">
            <p>MENU</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to={"/dashboard"} onClick={() => setSidebarActive(false)}>
                  <button
                    className={`${
                      pathname.split("/")[1] === "dashboard"
                        ? "bg-[#A51535]"
                        : ""
                    } w-full py-2 justify-start flex px-4 gap-4 rounded items-center`}
                  >
                    <i className="bx bxs-dashboard"></i> Dashboard
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/students"} onClick={() => setSidebarActive(false)}>
                  <button
                    className={`${
                      pathname.split("/")[1] === "students"
                        ? "bg-[#A51535]"
                        : ""
                    } w-full py-2 justify-start flex px-4 gap-4 rounded items-center`}
                  >
                    <i className="bx bxs-graduation"></i> Students
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
