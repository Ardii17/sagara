import { Divider, message, Modal } from "antd";
import MyButton from "./button";
import MyInput from "./input";
import MyUpload from "./upload";
import { useContext, useState } from "react";
import { ThemeContext } from "../context";
const ModalAdd = ({ isOpen, setIsOpen }) => {
  const { setDataTable, dataTable } = useContext(ThemeContext);
  const [fullname, setFullname] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [instance, setInstance] = useState("");
  const handleAddDataTable = (e) => {
    e.preventDefault();
    const data = {
      photo: imageUrl ?? "./../Ellipse 2824.png",
      fullname,
      email,
      phone,
      instance,
      createdAt: Date.now(),
      key: dataTable.length + 1
    };
    if (password === confirmPassword) {
      setFullname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
      setInstance("");
      setDataTable([data, ...dataTable]);
      setIsOpen(false);
      message.success(`data uploaded successfully.`);
    } else {
      message.error(`data uploaded failed. password has to be same.`);
    }
  };

  return (
    <>
      <Modal
        title="Add New Student"
        centered
        open={isOpen}
        onCancel={() => {
          setIsOpen(false);
          setFullname("");
          setEmail("");
          setPhone("");
          setPassword("");
          setConfirmPassword("");
          setInstance("");
        }}
        footer={null}
      >
        <Divider />
        <form
          onSubmit={handleAddDataTable}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex gap-4 items-center w-full ">
            <MyInput
              required
              type="text"
              name="fullname"
              title="Full Name"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
            <MyInput
              required
              type="email"
              name="email"
              title="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex gap-4 items-center w-full ">
            <MyInput
              required
              type="number"
              name="phone"
              title="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <MyInput
              required
              type="text"
              name="instance"
              title="Instance"
              onChange={(e) => setInstance(e.target.value)}
              value={instance}
            />
          </div>
          <div className="flex gap-4 items-center w-full ">
            <MyInput
              required
              type="password"
              name="password"
              title="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <MyInput
              required
              type="password"
              name="password"
              title="Re-type Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <MyUpload setImageUrl={setImageUrl} imageUrl={imageUrl} />
          <Divider />
          <div className="flex justify-end">
            <MyButton type="submit">Save</MyButton>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default ModalAdd;
