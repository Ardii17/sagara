import { useNavigate } from "react-router-dom";
import MyButton from "../../ui/button";
import { Dropdown } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { device } = useContext(ThemeContext);
  return (
    <>
      {!device && (
        <section className="flex bg-white justify-between px-12 shadow py-4 h-20 max-h-20 fixed z-50 top-0 left-0 right-0">
          <div className="flex items-center gap-8">
            <a href="/">
              <img src="./Logo.svg" alt="Logo" />
            </a>
            <ul className="flex gap-4 items-center">
              <li>
                <a
                  href="#"
                  className="font-semibold opacity-50 hover:opacity-100"
                >
                  IT CERTIFICATION
                </a>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="font-semibold opacity-50 hover:opacity-100"
                      >
                        CAREERS
                      </a>
                      <i className="bx bx-chevron-down text-2xl" />
                    </div>
                  </a>
                </Dropdown>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold opacity-50 hover:opacity-100"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <MyButton onClick={() => navigate("/dashboard")}>SIGN IN</MyButton>
          </div>
        </section>
      )}
      {device && (
        <section className="flex bg-white justify-between w-full px-4 shadow py-4 absolute top-0 h-20">
          <a href="/">
            <img src="./Logo.svg" alt="Logo" />
          </a>
          <MyButton onClick={() => navigate("/dashboard")}>SIGN IN</MyButton>
        </section>
      )}
    </>
  );
}
