import React, { useState } from "react";

export default function CountDownTimer() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  let interval;
  const startTimer = () => {
    const countDownDate = new Date();

    countDownDate.setDate(countDownDate.getDate() + 13);
    countDownDate.setHours(0, 0, 0, 0);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
    }, 1000);
  };
  startTimer();
  return (
    <div className="flex gap-2 pb-4">
      <div className="h-8 w-8 bg-[#F55266] text-white text-sm font-light rounded-md flex items-center justify-center">
        <p className="text-center">{days}d</p>
      </div>
      <p className="text-gray-400">:</p>
      <div className="h-8 w-8 bg-[#F55266] text-white text-sm font-light rounded-md flex items-center justify-center">
        <p>{hours}h</p>
      </div>
      <p className="text-gray-400">:</p>
      <div className="h-8 w-8 bg-[#F55266] text-white text-sm font-light rounded-md flex items-center justify-center">
        <p>{minutes}m</p>
      </div>
    </div>
  );
}
