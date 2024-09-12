import React from 'react';
import kuromi from './assets/kuromi-sitting.gif';
import StandardImageList from './ImageList';
import './index.css';
import Header from './Header';

const itemData = [
  {
    img: 'bfast.jpeg',
    title: 'bfast',
  },
  {
    img: 'kkv.jpeg',
    title: 'Bukit Bintang',
  },
  {
    img: 'kooky.jpeg',
    title: 'Kooky Plate',
  },
  {
    img: 'sushi-mentai.jpeg',
    title: 'Sushi',
  },
  {
    img: 'tasik-cermin.jpeg',
    title: 'Tasik Cermin',
  },
  {
    img: 'tasik-cermin2.jpeg',
    title: 'Tasik Cermin',
  },
  {
    img: 'tasik-cermin3.jpeg',
    title: 'Tasik Cermin',
  },
]

export default function About () {
  return (
    <>
      <Header />
      <div className="first-date-page">
        <img src={kuromi} className="kuromi-sitting" alt="kuromi"></img>
        <h1 className ="page-title">First Date</h1>

        <div className="ucapan1">
          <p class="isiucapan1">
              Our first date was on 21st July 2024. It was my mom birthday btw, it would be easier for me to remember haha. I was just getting back from my parent's house. It was so random and unexpected that I asked you for a date. I wasn't plan anything at all. But from the unexpected thing, here we are. Both committed to each other.
          </p>
          <p class="isiucapan1">P/s: I don't take a lot of photos during the first, so bear with me k hehe</p>
          <div className="image-list">
            <StandardImageList items={itemData} />;
          </div>
        </div>
        
      </div>
    </>
  );
}