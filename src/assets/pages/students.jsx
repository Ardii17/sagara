import { Checkbox, Dropdown, Input } from "antd";
import HomeLayout from "../components/Home/layout";
import MyButton from "../ui/button";
import MyTable from "../ui/table";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context";
import ModalAdd from "../ui/modaladd";
import { Link, useNavigate } from "react-router-dom";
import ModalDelete from "../ui/modaldelete";
import ModalEdit from "../ui/modaledit";

export default function StudentsPage() {
  const { device, dataTable } = useContext(ThemeContext);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [idEdit, setIdEdit] = useState(null);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [indexEdit, setIndexEdit] = useState(0);
  const [modalAddStudent, setModalAddStudent] = useState(false);
  const navigate = useNavigate();
  const [columTable, setColumnTable] = useState({
    photo: true,
    fullname: true,
    email: true,
    phone: true,
    instance: true,
    createdat: true,
    actions: true,
  });

  const onChange = (value) => {
    setColumnTable({
      ...columTable,
      [value.target.name]: value.target.checked,
    });
  };

  const items = [
    {
      key: "1",
      label: (
        <Checkbox
          onChange={onChange}
          name="photo"
          defaultChecked={columTable.photo}
        >
          Foto Profile
        </Checkbox>
      ),
    },
    {
      key: "2",
      label: (
        <Checkbox
          onChange={onChange}
          disabled
          name="fullname"
          defaultChecked={columTable.fullname}
        >
          Full Name
        </Checkbox>
      ),
    },
    {
      key: "3",
      label: (
        <Checkbox
          onChange={onChange}
          name="email"
          defaultChecked={columTable.email}
        >
          Email
        </Checkbox>
      ),
    },
    {
      key: "4",
      label: (
        <Checkbox
          onChange={onChange}
          name="phone"
          defaultChecked={columTable.phone}
        >
          Phone Mumber
        </Checkbox>
      ),
    },
    {
      key: "5",
      label: (
        <Checkbox
          onChange={onChange}
          name="instance"
          defaultChecked={columTable.instance}
        >
          Instance
        </Checkbox>
      ),
    },
    {
      key: "6",
      label: (
        <Checkbox
          onChange={onChange}
          name="createdat"
          defaultChecked={columTable.createdat}
        >
          Created At
        </Checkbox>
      ),
    },
  ];

  const itemsFilter = [
    {
      key: "1",
      label: <Link to="#">Instance</Link>,
    },
    {
      key: "2",
      label: <Link to="#">Date</Link>,
    },
    {
      key: "3",
      label: <Input placeholder="Search Filtered" />,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/students?query=${e.target.search.value}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeLayout>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="font-semibold text-xl">Data Students</h2>
        {!device ? (
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Dropdown
                menu={{
                  items: itemsFilter,
                }}
                placement="bottom"
                arrow
              >
                <button className="flex bg-white py-1 px-4 rounded shadow items-center gap-2">
                  <i className="bx bx-filter text-lg" />
                  <p>Filter</p>
                </button>
              </Dropdown>
              <MyButton
                onClick={() => setModalAddStudent(true)}
                className="flex py-1 gap-2 font-normal px-4 items-center justify-center"
              >
                <i className="bx bx-plus text-lg" />
                <p>Add User</p>
              </MyButton>
            </div>
            <div className="flex gap-4">
              <form onSubmit={handleSearch}>
                <Input
                  size="small"
                  placeholder="Search"
                  name="search"
                  className="py-2"
                  prefix={<i className="bx bx-search" />}
                />
              </form>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <button className="flex bg-white py-1 px-2 rounded shadow items-center">
                  <i className="bx bx-cog text-lg" />
                </button>
              </Dropdown>
            </div>
          </div>
        ) : (
          <>
            {!mobileSearch && <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-4">
                <button className="py-2 px-4 rounded shadow bg-white">
                  <i className="bx bx-filter text-xl" />
                </button>
                <button
                  onClick={() => setModalAddStudent(true)}
                  className="py-2 px-4 rounded shadow bg-[#A51535]"
                >
                  <i className="bx bx-plus text-xl text-white" />
                </button>
              </div>
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => setMobileSearch(true)}
                  className="py-2 px-4 rounded shadow bg-white"
                >
                  <i className="bx bx-search text-xl" />
                </button>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow
                >
                  <button className="py-2 px-4 rounded shadow bg-white">
                    <i className="bx bx-cog text-xl" />
                  </button>
                </Dropdown>
              </div>
            </div>}
            {mobileSearch && (
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setMobileSearch(false)}
                  className="py-2 px-4 rounded shadow bg-white"
                >
                  <i className="bx bx-left-arrow-alt text-xl" />
                </button>
                <form
                  onSubmit={handleSearch}
                  className="flex gap-2 w-full grow"
                >
                  <Input
                    size="small"
                    placeholder="Search"
                    name="search"
                    className="py-2 px-4"
                  />
                  <button
                    type="submit"
                    className="py-2 px-4 rounded shadow bg-[#A51535]"
                  >
                    <i className="bx bx-search text-xl text-white" />
                  </button>
                </form>
              </div>
            )}
          </>
        )}
        <div className="h-full w-full shadow">
          <MyTable
            filterColumnTable={columTable}
            setIdDelete={setIdDelete}
            setModalDelete={setModalDelete}
            setIdEdit={setIdEdit}
            setModalEdit={setModalEdit}
            setIndexEdit={setIndexEdit}
          />
        </div>
      </div>
      <ModalAdd isOpen={modalAddStudent} setIsOpen={setModalAddStudent} />
      {idDelete && (
        <ModalDelete
          open={modalDelete}
          setOpen={setModalDelete}
          idDelete={idDelete}
        />
      )}
      {idEdit && (
        <ModalEdit
          open={modalEdit}
          setOpen={setModalEdit}
          idEdit={idEdit}
          indexEdit={indexEdit}
        />
      )}
    </HomeLayout>
  );
}
