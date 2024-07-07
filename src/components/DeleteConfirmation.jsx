import { useState, useEffect } from "react";
import InProgressBar from "./InProgressBar";
export default function DeleteConfirmation({
  onConfirm,
  onCancel,
  modalISOpen,
}) {
  console.log("DeleteConfirmation  outSide useEffect");

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div className="flex flex-col justify-center items-center gap-1">
        <div id="confirmation-actions">
          <button onClick={onCancel} className="button-text">
            No
          </button>
          <button onClick={onConfirm} className="button">
            Yes
          </button>
        </div>
        <InProgressBar modalISOpen={modalISOpen} />
      </div>
    </div>
  );
}
