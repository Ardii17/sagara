import React, { useContext, useState } from "react";
import { Button, Divider, Modal } from "antd";
import { ThemeContext } from "../context";
const ModalDelete = ({ open, setOpen, idDelete }) => {
  const { handleDeleteDataTable } = useContext(ThemeContext);

  const handleOk = (e) => {
    handleDeleteDataTable(idDelete);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="Delete Student"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            backgroundColor: "#A51535",
            color: "White",
          },
        }}
      >
        <Divider />
        <p className="text-lg font-semibold">
          Are you sure you want to delete this student?
        </p>
        <Divider />
      </Modal>
    </>
  );
};
export default ModalDelete;
