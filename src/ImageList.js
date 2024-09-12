import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList({ items }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={250}>
      {items.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${process.env.PUBLIC_URL}/images/${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${process.env.PUBLIC_URL}/images/${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}