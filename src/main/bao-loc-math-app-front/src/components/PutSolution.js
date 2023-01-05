import { useState, useEffect, useCallback } from "react";

const PutSolution = (props) => {
  const [error, setError] = useState(null);
  const [call, setCall] = useState(true); // Empeche la requete d'etre appeller plusieurs fois

  const putSolutionHandler = useCallback(async () => {
    if (call) {
      setCall(false);
      const request = "/results/" + props.solution.id;
      try {
        const response = await fetch(request, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(props.solution),
        });
        if (!response.ok) {
          throw new Error("Il y a eu un problème.");
        }
        // const data = await response.json();
        // console.log(data);
        props.onValidation();
      } catch (error) {
        setError(error.message);
      }
    }
  }, [props, call]);

  useEffect(() => {
    putSolutionHandler();
  }, [putSolutionHandler]);

  return <>{error && <p>{error}</p>}</>;
};

export default PutSolution;
