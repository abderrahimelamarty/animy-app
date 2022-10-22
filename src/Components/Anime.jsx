import React, { useState, useEffect } from "react";
import Favorite from "@material-ui/icons/Favorite";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";


function Anime({ anime }) {


  
  const [image, setImage] = useState(anime.image);
  const [name, setName] = useState(anime.title);
  const [web_url, setWeb_url] = useState(anime.link);
  

 

 
   
  return (
    <div>
      <Card elevation={6} height={500}>
        <CardMedia
          style={{ height: 200,weight:100 }}
          image={
          anime.image
          }
          title={anime.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {anime.title}
          </Typography>
          
         

         
        
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(anime.link, "_blank")}
          >
            view
          </Button>

         
          
          
        </CardActions>
      </Card>
    </div>
  );
}

export default Anime;