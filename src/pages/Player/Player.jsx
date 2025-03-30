import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGYwMjkwOWI5ZmQzYzUyMGVkY2Q2NGQ1NmJiN2E0NyIsIm5iZiI6MTc0MTk2NDYyNC4yLCJzdWIiOiI2N2Q0NDU1MDAwYzg1YzVhMjg2NTA4OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HYOd3ycx3CfcSvB78np_38wrYR3ULMrtUj1lAywF9Uo",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="player">
        <img
          src={back_arrow_icon}
          alt=""
          onClick={() => {
            navigate(-2);
          }}
        />
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameborder="0"
          allowFullScreen
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
    </>
  );
};

export default Player;
