import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "../styles/Winter2022.css";

function LongDresses() {
  return (
    <div className="winter2022">
      <div className="items">
        <h1>Long Dress Collection</h1>
        <ImageList sx={{ width: 1000, height: 1000 }}>
          {LongDressesData.map((item) => (
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

export default LongDresses;

const LongDressesData = [
  {
    img: "https://images.pexels.com/photos/11022097/pexels-photo-11022097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Black'n White",
    price: 300.99,
  },
  {
    img: "https://images.pexels.com/photos/9799803/pexels-photo-9799803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "Free pink",
    price: 99.99,
  },
  {
    img: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "Elegant Cherry",
    price: 699.99,
  },
];
