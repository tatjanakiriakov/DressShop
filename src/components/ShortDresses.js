import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "../styles/Winter2022.css";

function ShortDresses() {
  return (
    <div className="winter2022">
      <div className="items">
        <h1>Short Dress Collection</h1>
        <ImageList sx={{ width: 1000, height: 1000 }}>
          {ShortDressesData.map((item) => (
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

export default ShortDresses;

const ShortDressesData = [
  {
    img: "https://images.pexels.com/photos/4725136/pexels-photo-4725136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Blue Tone",
    price: 199.99,
  },
  {
    img: "https://images.pexels.com/photos/6773224/pexels-photo-6773224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Pink Tone",
    price: 299.99,
  },
];
