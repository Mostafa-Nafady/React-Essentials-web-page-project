import { useState, useEffect } from "react";
const TIMER = 3000;
export default function DeleteConfirmation({
  onConfirm,
  onCancel,
  modalISOpen,
}) {
  const [timeInterval, setTimeInterval] = useState(TIMER);
  console.log("DeleteConfirmation  outSide useEffect");

  useEffect(() => {
    let interval;

    if (modalISOpen) {
      console.log("DeleteConfirmation");
      console.log("timeInterval", timeInterval);
      interval = setInterval(() => {
        setTimeInterval((prevTimeInterval) => prevTimeInterval - 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [modalISOpen]);
  useEffect(() => {
    let timer_X;
    if (modalISOpen) {
      setTimeInterval(TIMER);
      timer_X = setTimeout(() => {
        onConfirm();
      }, 3000);
    }
    return () => {
      clearTimeout(timer_X);
    };
  }, [onConfirm, modalISOpen]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions" className="flex flex-col">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
        <progress value={timeInterval} max={TIMER} />
      </div>
    </div>
  );
}
