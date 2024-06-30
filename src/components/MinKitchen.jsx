import React, { useEffect, useState } from "react";

const MinBedroom = () => {
  const [kitchen, setKitchen] = useState([]);


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchKitchen() {
      try {
        const response = await fetch("http://localhost:3000/kitchen", {
          signal,
        });
        if (!response.ok) {
          throw new Error("Fetch bedroom is not ok");
        }
        const resBedroom = await response.json();
        setKitchen(resBedroom);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    }

    fetchKitchen();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="min-bedroom">
      {kitchen.map((k) => (
        <div key={k.id} className="bedroom-item">
          <div className="bedroom-top">
            <img src={k.img} alt={k.title} />
          </div>
          <div className="bedroom-bottom">
            <span>
              <h3>{k.title}</h3>
              <p>{k.categoryTitle}</p>
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