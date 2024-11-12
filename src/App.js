// src/App.js
import React, { useState } from "react";
import ActivityChart from "./ActivityChart";
import "./App.css"; // Your global styles
import InputForm from "./components/InputForm";

function App() {
  const [activities, setActivities] = useState({
    sleep: 0,
    reading: 0,
    exercise: 0,
    study: 0,
  });

  const handleFormSubmit = (newActivities) => {
    setActivities(newActivities);
  };

  return (
    <div className="App">
      <h1>오늘의 활동 기록</h1>
      <InputForm onSubmit={handleFormSubmit} />
      <ActivityChart activities={activities} />
    </div>
  );
}

export default App;
