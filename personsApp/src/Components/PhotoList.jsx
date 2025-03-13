import React from "react";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import PhotoListItem from "./PhotoListItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();
  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
    );
  } else if (isError) {
    content = <div>Hata Var!</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <>
      <div>
        <div className="topArrangement">
          <h2>{album.title} Fotoğrafları</h2>
          <Button variant="outlined" color="error" onClick={handlePhotoAdd}>
            {results.isLoading ? (
              <CircularProgress
                color="error"
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
              <span>Fotoğraf Ekle +</span>
            )}
          </Button>
        </div>
      </div>
      <div className="photoDiv">{content}</div>
    </>
  );
}

export default PhotoList;
