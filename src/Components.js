import React from "react";
import Minicard from "./Minicard";
import { Doughnut } from "react-chartjs-2";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  CategoryScale,
} from "chart.js";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Components() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        <Minicard
          title="EARNINGS (MONTHLY)"
          price="$40,000"
          color="primary"
        ></Minicard>
        <Minicard
          title="EARNINGS (ANNUAL)"
          price="$215,000"
          color="success"
        ></Minicard>
        <Minicard title="TASKS" price="50%" color="info"></Minicard>
        <Minicard
          title="PENDING REQUESTS"
          price="18"
          color="warning"
        ></Minicard>
      </div>
      <div className="row">
        <div className="col-4">
          <Doughnut
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          ></Doughnut>
        </div>
        <div className="col-8">
          <Line
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Chart.js Line Chart",
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
          ></Line>
        </div>
      </div>
    </>
  );
}

export default Components;
