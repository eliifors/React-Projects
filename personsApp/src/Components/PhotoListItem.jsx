import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import CircularProgress from "@mui/material/CircularProgress";
import { useRemovePhotoMutation } from "../store";

function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div
      style={{ margin: "20px", cursor: "pointer", position: "relative" }}
      onClick={handleRemovePhoto}
    >
      <img src={photo.url} alt="" />
      <div className="deleteCircularDiv ">
        {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <RiDeleteBin5Fill />
        )}
      </div>
    </div>
  );
}

export default PhotoListItem;
