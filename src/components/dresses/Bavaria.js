import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import "./Dresses.css";

function Bavaria() {
  return (
    <div className="dress-box">
      <Box sx={{ width: 1000, height: "auto" }}>
        <ImageList variant="masonry" cols={1} gap={18}>
          {BavariaItems.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.caption}
                loading="lazy"
              />
              <div className="description-section">
                <p className="caption">{item.caption}</p>
                <p className="price">Original Price: {item.price}</p>
                <p className="description">{item.description}</p>
                <p className="sizes">Available Sizes are {item.sizes}</p>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default Bavaria;

const BavariaItems = [
  {
    img: "https://images.pexels.com/photos/10545734/pexels-photo-10545734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Bavaria",
    price: 199.99,
    link: "/bavaria",
    sizes: "S, M",
    description:
      "The Bavaria dress is a very special one. It reminds people to stay in the nature and be free.",
  },
];
