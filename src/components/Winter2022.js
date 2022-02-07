import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "../styles/Winter2022.css";

function Winter2022() {
  return (
    <div className="winter2022">
      <div className="items">
        <h1>Winter2022 Collection</h1>
        <ImageList sx={{ width: 1000, height: 1800 }}>
          {Winter2022Data.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              />
              <p>{item.caption}</p>
              <p>{item.price}</p>
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default Winter2022;

const Winter2022Data = [
  {
    img: "https://images.pexels.com/photos/10990410/pexels-photo-10990410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Beige Winter Dress",
    price: 99.99,
  },
  {
    img: "https://images.pexels.com/photos/10990409/pexels-photo-10990409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "Extravagent pink one",
    price: 299.99,
  },
  {
    img: "https://images.pexels.com/photos/6598968/pexels-photo-6598968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "The short red one",
    price: 78.95,
  },
  {
    img: "https://images.pexels.com/photos/6598967/pexels-photo-6598967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "The little black one",
    price: 800.0,
  },
];
