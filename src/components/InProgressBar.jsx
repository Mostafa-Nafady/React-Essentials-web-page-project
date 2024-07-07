import { useState, useEffect } from "react";

export default function InProgressBar({ modalISOpen, onConfirm }) {
  const TIMER = 3000;
  const [timeInterval, setTimeInterval] = useState(0);
  /*this to close the the Modal when the timeInterval became 0  */
  /*we separate this action in another useEffect to be sure that the in progress component is already rendered */
  /*where the onConfirm function contain state change cause the App component re-rendered and also the inProgress component  */

  /*So to be sure that the in progress is mounted we can change the other state that might cause in progress re-render */
  useEffect(() => {
    if (timeInterval === 0) onConfirm();
  }, [timeInterval]);
  ///*************************////
  ///*************************////
  ///*************************////
  useEffect(() => {
    let interval;

    if (modalISOpen) {
      console.log("DeleteConfirmation");
      /*to be sure that the Time interval start from TIMER at each modal is open */
      setTimeInterval(() => {
        console.log("timeInterval", TIMER);
        return TIMER;
      });
      interval = setInterval(() => {
        setTimeInterval((prevTimeInterval) => {
          //   console.log("prevTimeInterval", prevTimeInterval);

          return prevTimeInterval - 10;
        });
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [modalISOpen]);
  useEffect(() => {
    return () => {};
  }, [modalISOpen]);

  return (
    <>
      <progress value={timeInterval} max={TIMER} />
      <div>{timeInterval}</div>
    </>
  );
}
