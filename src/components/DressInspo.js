import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../styles/Dressinspo.css";

function DressInspo() {
  return (
    <div className="dressinspo">
      <Box sx={{ width: 1200, height: 1400 }}>
        <ImageList variant="masonry" cols={2} gap={20}>
          {itemDatared.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <br />
      <div className="second">
        <Box sx={{ width: 1200, height: 1400 }}>
          <ImageList variant="masonry" cols={2} gap={20}>
            {itemDatasilk.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}

export default DressInspo;

const itemDatared = [
  {
    img: "https://images.pexels.com/photos/7682628/pexels-photo-7682628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    img: "https://images.pexels.com/photos/7682660/pexels-photo-7682660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/7682632/pexels-photo-7682632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    img: "https://images.pexels.com/photos/7682626/pexels-photo-7682626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/7683365/pexels-photo-7683365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/7683363/pexels-photo-7683363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/7682627/pexels-photo-7682627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/7683368/pexels-photo-7683368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const itemDatasilk = [
  {
    img: "https://images.pexels.com/photos/6939104/pexels-photo-6939104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/6939070/pexels-photo-6939070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/6939054/pexels-photo-6939054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/6939108/pexels-photo-6939108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/6939057/pexels-photo-6939057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/10016155/pexels-photo-10016155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/10016156/pexels-photo-10016156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
