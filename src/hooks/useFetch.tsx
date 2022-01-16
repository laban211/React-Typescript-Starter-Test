import { useEffect, useState } from "react";
import { Optional } from "../types/Optional";
import { asyncDelay } from "../utils/async-delay";

/**
 * Custom hook used to fetch data, track if a fetch is currently active and if
 * there is an error.
 * @param url url to fetch data from
 */
const useFetch = <T,>(url: string) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Optional<string>>(undefined);

  const isError = error !== undefined;

  const fetchData = () => {
    setIsFetching(true);
    setError(undefined);

    asyncDelay(1_000)
      .then(() => fetch(url))
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  };

  const removeItemFromDataById = (id: string, getId: (item: T) => string) => {
    const hasItem = data.find((item) => getId(item)) !== undefined;

    if (!hasItem) {
      setError("Item doesn't exist");
      return;
    }

    fetch(`${url}/${id}`, { method: "DELETE" })
      .then(() => fetchData())
      .catch((e) => setError(e));
  };

  /** Allow the user to fetch again. Usefull if there is an error. */
  const retryFetch = fetchData;

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isFetching,
    data,
    isError,
    error,
    removeItemFromDataById,
    retryFetch,
  };
};

export { useFetch };
