import { Divider, Modal } from "antd";
import MyButton from "./button";
import MyInput from "./input";
import MyUpload from "./upload";
import { ThemeContext } from "../context";
import { useContext, useEffect, useState } from "react";
const ModalEdit = ({ open, setOpen, idEdit, indexEdit }) => {
  const { setDataTable, dataTable } = useContext(ThemeContext);
  const [fullname, setFullname] = useState(idEdit.fullname);
  const [email, setEmail] = useState(idEdit.email);
  const [phone, setPhone] = useState(idEdit.phone);
  const [instance, setInstance] = useState(idEdit.instance);

  const handleEditDataTable = (e) => {
    e.preventDefault();
    const updatedDataTable = [...dataTable];
    updatedDataTable[indexEdit] = {
      ...updatedDataTable[indexEdit],
      fullname,
      email,
      phone,
      instance,
    };
    setOpen(false);
    setDataTable(updatedDataTable);
  };

  useEffect(() => {
    setFullname(idEdit.fullname);
    setEmail(idEdit.email);
    setPhone(idEdit.phone);
    setInstance(idEdit.instance);
  }, [idEdit]);

  return (
    <>
      <Modal
        title="Add New Student"
        centered
        open={open}
        onOk={() => {
          setOpen(false), handleEditDataTable(e);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        footer={null}
      >
        <Divider />
        <form
          onSubmit={handleEditDataTable}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex gap-4 items-center w-full">
            <MyInput
              type="text"
              name="fullname"
              title="Full Name"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
            <MyInput
              type="email"
              name="email"
              title="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex gap-4 items-center w-full ">
            <MyInput
              type="text"
              name="phone"
              title="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <MyInput
              type="text"
              name="instance"
              title="Instance"
              onChange={(e) => setInstance(e.target.value)}
              value={instance}
            />
          </div>
          <div className="flex gap-4 items-center w-full ">
            <MyInput type="password" name="password" title="Password" />
            <MyInput type="password" name="password" title="Re-type Password" />
          </div>
          <MyUpload />
          <Divider />
          <div className="flex justify-end">
            <MyButton type="submit">Save</MyButton>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default ModalEdit;
