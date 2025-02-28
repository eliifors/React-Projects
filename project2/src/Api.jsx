import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client ID jgDVVindwWAVqwCBn7kTMWVaiygIs2woY0nvDXSB0Yw",
    },
    params: {
      query: term,
    },
  });
};

export default searchImages;
