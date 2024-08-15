import { useContext } from "react";
import HomeLayout from "../components/Home/layout";
import BarChart from "../ui/barchart";
import { ThemeContext } from "../context";

export default function DashboardPage() {
  const { dataTable } = useContext(ThemeContext);

  return (
    <HomeLayout>
      <div className="flex flex-col gap-4 px-4 py-4 h-full">
        <div className="flex justify-between">
          <button className="py-2 px-4 flex text-sm items-center justify-center gap-2 bg-white rounded shadow">
            <img src="./../calendar.png" alt="Calendar Image" /> Dec 29, 2023 -
            Jan 4, 2024
          </button>
          <button className="py-2 px-4 flex items-center justify-center gap-2 bg-white rounded shadow">
            Daily <i className="bx bx-chevron-down text-xl" />
          </button>
        </div>
        <div className="flex gap-4 items-center flex-col md:flex-row justify-center flex-wrap">
          <div className="bg-white rounded flex justify-between items-start w-full shadow flex-1 h-auto p-4">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="font-semibold">Total Student</p>
              <p className="font-bold text-xl">{dataTable.length}</p>
              <p className="flex items-center gap-2">
                <img src="./../ic-trending-up-24px.svg" alt="Tranding" />
                <span className="text-[#00B69B]">8.5%</span> Up from yesterday
              </p>
            </div>
            <img src="./../Icon.svg" alt="" />
          </div>
          <div className="bg-white rounded flex justify-between items-start w-full shadow flex-1 h-auto p-4">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="font-semibold">Total Certified Student</p>
              <p className="font-bold text-xl">510</p>
              <p className="flex items-center gap-2">
                <img src="./../ic-trending-up-24px.svg" alt="Tranding" />
                <span className="text-[#00B69B]">8.5%</span> Up from yesterday
              </p>
            </div>
            <img src="./../Icon-1.svg" alt="" />
          </div>
          <div className="bg-white rounded flex justify-between items-start w-full shadow flex-1 h-auto p-4">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="font-semibold">Total Certification Student</p>
              <p className="font-bold text-xl">510</p>
              <p className="flex items-center gap-2">
                <img src="./../ic-trending-up-24px.svg" alt="Tranding" />
                <span className="text-[#00B69B]">8.5%</span> Up from yesterday
              </p>
            </div>
            <img src="./../Icon-2.svg" alt="" />
          </div>
        </div>
        <div className="bg-white h-full rounded shadow w-full flex items-center p-4">
          <BarChart />
        </div>
      </div>
    </HomeLayout>
  );
}
