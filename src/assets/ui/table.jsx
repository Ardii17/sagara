import { useContext, useEffect, useState } from "react";
import { Table, Button, Pagination, Space } from "antd";
import { useSearchParams } from "react-router-dom";
import { ThemeContext } from "../context";

const MyTable = ({
  filterColumnTable,
  setIdDelete,
  setModalDelete,
  setIdEdit,
  setIndexEdit,
  setModalEdit,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { dataTable } = useContext(ThemeContext);
  const [columnsData, setColumnsData] = useState([]);

  const handleTableChange = (pagination, filters, sorter) => {
    setCurrentPage(pagination.current);
  };

  useEffect(() => {
    setColumnsData(
      columns.filter((column) =>
        Object.keys(filterColumnTable)
          .filter((key) => filterColumnTable[key] === true)
          .includes(column.key)
      )
    );
  }, [filterColumnTable]);

  const columns = [
    {
      title: "Foto Profile",
      dataIndex: "photo",
      key: "photo",
      render: (text) => (
        <img
          src={text}
          alt="profile"
          style={{ width: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
      sorter: (a, b) => a.fullname.localeCompare(b.fullname),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Instance",
      dataIndex: "instance",
      key: "instance",
      sorter: (a, b) => a.instance.localeCompare(b.instance),
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdat",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record, index) => (
        <Space size="middle">
          <button
            onClick={() => {
              setIdDelete(record.key), setModalDelete(true);
            }}
          >
            <i className="bx bx-trash text-xl text-red-700" />
          </button>
          <button
            onClick={() => {
              setIdEdit(record), setModalEdit(true), setIndexEdit(index);
            }}
          >
            <i className="bx bx-edit text-xl  text-yellow-500" />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="shadow rounded">
      <Table
        columns={columnsData}
        dataSource={
          query
            ? dataTable.filter((col) =>
                col.fullname.toLowerCase().includes(query.toLowerCase())
              )
            : dataTable
        }
        pagination={true}
        scroll={{ x: "100%" }} // Responsif scroll horizontal
      />
    </div>
  );
};

export default MyTable;
