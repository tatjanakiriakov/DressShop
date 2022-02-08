import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import "./Dresses.css";

function ExtravagantPinkOne() {
  return (
    <div className="dress-box">
      <Box sx={{ width: 1000, height: "auto" }}>
        <ImageList variant="masonry" cols={1} gap={18}>
          {ExtravagantPinkOneItems.map((item) => (
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

export default ExtravagantPinkOne;

const ExtravagantPinkOneItems = [
  {
    img: "https://images.pexels.com/photos/10990409/pexels-photo-10990409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "Extravagent pink one",
    description:
      "The extravagant pink one is one of our specials this winter. The fluffy looking design creates a beautiful shape and leaves the watcher speechless.",
    sizes: "S, M, L, XL",
    price: 299.99,
    link: "/ExtravagantPinkOne",
  },
];
