import { MutableRefObject, Ref, RefObject, useEffect, useState } from "react";

const useRefDimensions = (ref: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const boundingRect = ref.current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width, height });
    }
  }, [ref]);

  return dimensions;
};

export default useRefDimensions;
