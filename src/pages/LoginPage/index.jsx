import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import CSS của carousel

const LoginPage = () => {
  const items = [
    {
      image: 'https://picsum.photos/id/1/2500/2500',
      title: 'Item 1',
      time: '2023-01-01',
    },
    {
      image: 'https://picsum.photos/id/2/2500/2500',
      title: 'Item 2',
      time: '2023-01-02',
    },
    {
      image: 'https://picsum.photos/id/3/2500/2500',
      title: 'Item 3',
      time: '2023-01-03',
    },
    {
      image: 'https://picsum.photos/id/4/2500/2500',
      title: 'Item 4',
      time: '2023-01-04',
    },
    {
      image: 'https://picsum.photos/id/5/2500/2500',
      title: 'Item 5',
      time: '2023-01-05',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
      {items.map((item, index) => (
        <div key={index} style={{ padding: '10px' }}>
          <div
            style={{
              backgroundImage: `url(${item.image})`,
              height: '200px',
              backgroundSize: 'cover',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '10px',
              color: 'white',
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default LoginPage;
