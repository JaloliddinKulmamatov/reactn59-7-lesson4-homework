import React, { useEffect, useState } from "react";

const MinBedroom = () => {
  const [bath, setBath] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchBath() {
      try {
        const response = await fetch("http://localhost:3000/bathroom", {
          signal,
        });
        if (!response.ok) {
          throw new Error("Fetch bedroom is not ok");
        }
        const resBedroom = await response.json();
        setBath(resBedroom);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    }

    fetchBath();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="min-bedroom">
      {bath.map((b) => (
        <div key={b.id} className="bedroom-item">
          <div className="bedroom-top">
            <img src={b.img} alt={b.title} />
          </div>
          <div className="bedroom-bottom">
            <span>
              <h3>{b.title}</h3>
              <p>{b.categoryTitle}</p>
            </span>
            <span>
              <button>-</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MinBedroom;
