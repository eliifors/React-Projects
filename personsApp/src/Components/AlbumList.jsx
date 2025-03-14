import React from "react";
import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
} from "../store/apis/albumsApi";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
    );
  } else if (isError) {
    content = <div>Hata Var!</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <>
      <div>
        <div className="topArrangement">
          <h2>{user.name} Albümü</h2>
          <Button variant="outlined" color="error" onClick={handleAlbumAdd}>
            {results.isLoading ? (
              <CircularProgress
                color="error"
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
              <span>Albüm Ekle +</span>
            )}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;
