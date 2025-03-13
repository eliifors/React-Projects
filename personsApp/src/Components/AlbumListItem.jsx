import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useRemoveAlbumMutation, useRemoveUserMutation } from "../store";
import CircularProgress from "@mui/material/CircularProgress";
import PhotoList from "./PhotoList";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleClick = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <button
        style={{
          marginRight: "30px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <RiDeleteBin5Fill />
        )}
      </button>
      {album.title}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
}

export default AlbumListItem;
