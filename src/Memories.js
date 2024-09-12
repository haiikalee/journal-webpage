import React from 'react';
import './index.css';
import kuromi from './assets/kuromi-sitting.gif'
import StandardImageList from './ImageList';
import Header from './Header';

const itemData = [
  {
    img: 'book.jpeg',
    title: 'Book',
  },
  {
    img: 'cat.jpeg',
    title: 'Cat'
  },
  {
    img: 'kkv.jpeg',
    title: 'KKV',
  },
  {
    img: 'museum4.jpeg',
    title: 'Museum',
  },
  {
    img: 'pd.jpeg',
    title: 'PD',
  },
  {
    img: 'sonny.jpeg',
    title: 'Sonny Angel',
  },
  {
    img: 'study.jpeg',
    title: 'Study',
  },
  {
    img: 'white-butter.jpeg',
    title: 'White Butter',
  },
]

export default function Memories () {
  return (
    <>
      <Header />
      <div className="memories-page">
        <img src={kuromi} className="kuromi-sitting" alt="kuromi"></img>
        <h1 className="page-title">Memories</h1>

        <div className='ucapan1'>
          <p className="isiucapan1">
            It just a photo gallery but it will be updated from time to time
          </p>
        </div>

        <div className='image-list'>
          <StandardImageList items={itemData} />
        </div>
      </div>
    </>
  );
}