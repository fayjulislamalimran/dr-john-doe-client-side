import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Dr John Doe - ${title}`;
  }, [title]);
};

export default useTitle;
