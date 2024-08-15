import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Back End", "Front End", "Quality Assurance", "UI/UX"],
    datasets: [
      {
        label: "Student",
        data: [289, 200, 300, 120],
        backgroundColor: "#A51535",
        barThickness: 50, // Atur lebar bar di sini
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Agar chart menyesuaikan tinggi kontainer
    scales: {
      y: {
        beginAtZero: true, // Memastikan sumbu y mulai dari 0
        ticks: {
          stepSize: 100, // Mengatur jarak antar ticks
        },
        min: 0, // Batas minimum
        max: 400, // Batas maksimum
        grid: {
          drawBorder: true,
          color: "rgba(0, 0, 0, 0.1)", // Warna garis grid
        },
      },
      x: {
        categoryPercentage: 1.0, // Mengatur kategori agar mengisi penuh
        barPercentage: 1.0, // Mengatur bar agar mengisi penuh
        grid: {
          drawBorder: true,
          color: "rgba(0, 0, 0, 0.1)", // Warna garis grid
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Students", // Judul chart
        align: "start", // Mengatur judul di sebelah kiri
        position: "top", // Posisi judul di atas chart
        padding: {
          bottom: 20,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
