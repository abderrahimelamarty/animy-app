const axios = require("axios");

export const getAnimes = async () => {
  try {
    const options = {
      params: {
        page: "1",
        size: "100",
      },
      headers: {
        "X-RapidAPI-Key": "5c0679ac3cmsh796f651b5c8084ap1587b2jsn8e69c8a80849",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    const {
      data: { data },
    } = await axios.get("https://anime-db.p.rapidapi.com/anime", options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
