import React, { useState } from "react";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const MyUpload = ({ setImageUrl, imageUrl }) => {
  const handleChange = (info) => {
    setImageUrl(URL.createObjectURL(info.file.originFileObj));
    message.success(`${info.file.name} file uploaded successfully.`);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/GIF files!");
    }
    const isSmallerThan800px = file.size / 1024 / 1024 < 1; // Check if file size is less than 1 MB
    if (!isSmallerThan800px) {
      message.error("Image must be smaller than 1MB!");
    }
    return isJpgOrPng && isSmallerThan800px; // Return false if the file type is incorrect
  };

  return (
    <Dragger
      name="file"
      multiple={false}
      showUploadList={false}
      onChange={handleChange}
      beforeUpload={beforeUpload}
      action="YOUR_UPLOAD_URL_HERE" // Ganti dengan URL upload yang sesuai
      style={{
        padding: "20px",
        border: "1px dashed #d9d9d9",
        borderRadius: "4px",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{ width: "100%", maxWidth: "800px", maxHeight: "800px" }}
        />
      ) : (
        <div style={{ textAlign: "center" }}>
          <UploadOutlined style={{ fontSize: "20px" }} />
          <p style={{ margin: "10px 0", fontWeight: "bold" }}>
            Click to upload or drag and drop
          </p>
          <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>
            SVG, PNG, JPG or GIF
            <br />
            (max, 800 X 800px)
          </p>
        </div>
      )}
    </Dragger>
  );
};

export default MyUpload;
