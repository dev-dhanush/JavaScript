import { useState } from "react";

const useLike = () => {
  let [like, setLike] = useState(false);
  let [unlike, setUnlike] = useState(false);
  const handleLike = () => {
    setLike(!like);
    setUnlike(false)
  };
  const handleUnlike = () => {
    setUnlike(!unlike);
    setLike(false)
  };
  return { like, handleLike,unlike, handleUnlike };
};

export default useLike;
