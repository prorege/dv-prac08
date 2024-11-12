// src/ActivityChart.js
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function ActivityChart({ activities }) {
  // 하드코딩된 평균 시간
  const averageTimes = {
    sleep: 8, // 대한민국 평균 수면 시간
    reading: 1, // 대한민국 평균 독서 시간
    exercise: 0.5, // 대한민국 평균 운동 시간
    study: 3, // 대한민국 평균 공부 시간
  };

  // 항목 이름을 영어로 매핑
  const labelMap = {
    수면: "sleep",
    독서: "reading",
    운동: "exercise",
    공부: "study",
  };

  const [userTimes, setUserTimes] = useState({
    sleep: activities.sleep || 0,
    reading: activities.reading || 0,
    exercise: activities.exercise || 0,
    study: activities.study || 0,
  });

  const totalTime =
    userTimes.sleep + userTimes.reading + userTimes.exercise + userTimes.study;

  const otherTime = Math.max(0, 24 - totalTime);

  const data = {
    labels: ["수면", "독서", "운동", "공부", "기타"],
    datasets: [
      {
        label: "오늘의 활동",
        data: [
          userTimes.sleep,
          userTimes.reading,
          userTimes.exercise,
          userTimes.study,
          otherTime,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#E4E4E4",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#E4E4E4",
        ],
      },
    ],
  };

  const options = {
    responsive: true, // 차트 크기 자동 조정
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          // 툴팁에 "오늘의 활동"과 "대한민국 평균" 표시
          label: function (context) {
            const label = context.label;
            const userValue = userTimes[labelMap[label]] || 0;
            const avg = averageTimes[labelMap[label]] || 0;

            // 기본 툴팁 텍스트에 활동 시간과 평균 시간 추가
            return `${label}: ${userValue}h (오늘의 활동) | 대한민국 평균: ${avg}h`;
          },
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  useEffect(() => {
    setUserTimes({
      sleep: activities.sleep || 0,
      reading: activities.reading || 0,
      exercise: activities.exercise || 0,
      study: activities.study || 0,
    });
  }, [activities]);

  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "400px", width: "400px" }}
    >
      <h2>오늘의 활동 vs 평균 비교</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ActivityChart;
