import { useState } from "react";

const useCount = () => {
  let [like, setLike] = useState(false);
  let [unlike, setUnlike] = useState(false);
  const handleLike = () => {
    setLike(like+1);
  };
  const handleUnlike = () => {
    setUnlike(unlike+1);
  };
  return { like, handleLike,unlike, handleUnlike };
};

export default useCount;
