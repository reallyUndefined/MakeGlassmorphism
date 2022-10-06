import { useEffect, useState } from "react";

const useIsItImg = (url: string) => {
  const [validImg, setValidImg] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.headers.get("Content-Type"))
      .then((data) => {
        if (data?.split("/")[0].toLowerCase() === "image") {
          setValidImg(true);
        } else {
          setValidImg(false);
        }
      })
      .catch(() => setValidImg(false));
  }, [url]);

  return validImg;
};

export default useIsItImg;
