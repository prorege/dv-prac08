// src/components/InputForm.js
import React, { useState } from "react";
import "./InputForm.css"; // 새로운 스타일을 불러옵니다

function InputForm({ onSubmit }) {
  const [sleep, setSleep] = useState("");
  const [reading, setReading] = useState("");
  const [exercise, setExercise] = useState("");
  const [study, setStudy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      sleep: parseFloat(sleep) || 0,
      reading: parseFloat(reading) || 0,
      exercise: parseFloat(exercise) || 0,
      study: parseFloat(study) || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-group">
        <label htmlFor="sleep">잠 시간 (시간)</label>
        <input
          id="sleep"
          type="number"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
          placeholder="예: 8"
        />
      </div>
      <div className="form-group">
        <label htmlFor="reading">독서 시간 (시간)</label>
        <input
          id="reading"
          type="number"
          value={reading}
          onChange={(e) => setReading(e.target.value)}
          placeholder="예: 2"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exercise">운동 시간 (시간)</label>
        <input
          id="exercise"
          type="number"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="예: 1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="study">공부 시간 (시간)</label>
        <input
          id="study"
          type="number"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
          placeholder="예: 3"
        />
      </div>
      <button type="submit" className="submit-btn">
        제출
      </button>
    </form>
  );
}

export default InputForm;
