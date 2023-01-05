import { useState, useEffect, useCallback, memo } from "react";

const DeleteResult = (props) => {
  const [error, setError] = useState(null);
  const [call, setCall] = useState(true); // Empeche la requete d'etre appeller plusieurs fois

  const deleteResultHandler = useCallback(async () => {
    if (call) {
      setCall(false);
      const request = "/results/" + parseInt(props.solution.id);
      try {
        const response = await fetch(request, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(props.solution),
        });
        if (!response.ok) {
          throw new Error("Il y a eu un problème.");
        }
        // const data = await response.json();
        props.onValidation();
      } catch (error) {
        setError(error.message);
      }
    }
  }, [props, call]);

  useEffect(() => {
    deleteResultHandler();
  }, [deleteResultHandler]);

  return <>{error && <p>{error}</p>}</>;
};

export default memo(DeleteResult);
