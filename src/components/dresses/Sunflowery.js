import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import "./Dresses.css";

function Sunflowery() {
  return (
    <div className="dress-box">
      <Box sx={{ width: 1000, height: "auto" }}>
        <ImageList variant="masonry" cols={1} gap={18}>
          {SunfloweryItems.map((item) => (
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

export default Sunflowery;

const SunfloweryItems = [
  {
    img: "https://images.pexels.com/photos/5321680/pexels-photo-5321680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "Sunflowery",
    price: 299.99,
    link: "/sunflowery",
    description:
      "The Sunflowery dress contains a lot of happiness and life. It is very youthful and reminds people of a little kid playing in the garden.",
    sizes: "S, M, L",
  },
];
