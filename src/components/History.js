import { useEffect, useState } from "react";
import { getAllHistory } from "../Api/Handellapi";
export function History() {
  const [allHistory, setAllHistory] = useState();
  useEffect(() => {
    getAllHistory().then((data) => {
      setAllHistory(data);
    });
  }, []);
  return (
    <>
      {allHistory?.map((history, index) => (
        <div key={index} className="history  divcss">
          <p className="history-p">
            the task {history?.title} has been {history?.typeOfModification} by
            the {history?.userName} at {history?.date}
          </p>
        </div>
      ))}
    </>
  );
}
