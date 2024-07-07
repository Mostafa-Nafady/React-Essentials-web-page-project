import { useState, useEffect } from "react";

export default function InProgressBar({ modalISOpen }) {
  const TIMER = 3000;
  const [timeInterval, setTimeInterval] = useState(TIMER);

  useEffect(() => {
    let interval;

    if (modalISOpen) {
      console.log("DeleteConfirmation");

      interval = setInterval(() => {
        setTimeInterval((prevTimeInterval) => {
          // console.log("prevTimeInterval", prevTimeInterval);
          return prevTimeInterval - 10;
        });
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [modalISOpen]);
  useEffect(() => {
    let timer_X;
    if (modalISOpen) {
      setTimeInterval(() => {
        console.log("timeInterval", TIMER);
        return TIMER;
      });
      timer_X = setTimeout(() => {
        onConfirm();
      }, 3000);
    }
    return () => {
      clearTimeout(timer_X);
    };
  }, [modalISOpen]);

  return <progress value={timeInterval} max={TIMER} />;
}
