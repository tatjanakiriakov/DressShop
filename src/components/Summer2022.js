import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button } from "@mui/material";
import "../styles/Winter2022.css";

function Summer2022() {
  return (
    <div className="winter2022">
      <div className="items">
        <h1>Summer2022 Collection</h1>
        <ImageList sx={{ width: 1000, height: 800 }}>
          {Summer2022Data.map((item) => (
            <Button href={item.link}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                />
                <p>{item.caption}</p>
                <p>{item.price}</p>
                <ImageListItemBar title={item.title} position="below" />
              </ImageListItem>
            </Button>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default Summer2022;

const Summer2022Data = [
  {
    img: "https://images.pexels.com/photos/10545734/pexels-photo-10545734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Bavaria",
    price: 199.99,
    link: "/bavaria",
  },
  {
    img: "https://images.pexels.com/photos/5321680/pexels-photo-5321680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "Sunflowery",
    price: 299.99,
    link: "/sunflowery",
  },
];
