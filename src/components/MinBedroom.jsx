import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MinBedroom = () => {
  const [bedroom, setBedroom] = useState([]);
  const { bathroom } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchBedroom() {
      try {
        const response = await fetch("http://localhost:3000/bedroom", {
          signal,
        });
        if (!response.ok) {
          throw new Error("Fetch bedroom is not ok");
        }
        const resBedroom = await response.json();
        setBedroom(resBedroom);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    }

    fetchBedroom();

    return () => {
      controller.abort();
    };
  }, [bathroom]);

  return (
    <div className="min-bedroom">
      {bedroom.map((bed) => (
        <div key={bed.id} className="bedroom-item">
          <div className="bedroom-top">
            <img src={bed.img} alt={bed.title} />
          </div>
          <div className="bedroom-bottom">
            <span>
              <h3>{bed.title}</h3>
              <p>{bed.categoryTitle}</p>
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
