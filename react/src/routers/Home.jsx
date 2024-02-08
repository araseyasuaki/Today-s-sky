import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/Choices">
        <section className="Keyvisual">
          <img src="/img/logo.svg" alt="今日の空模様のロゴ" />
          <img src="/img/kimg.png" alt="日本地図の画像" />
          <h1>
            <span>»</span>スタート<span>«</span>
          </h1>
        </section>
      </Link>
    </>
  );
};

export default Home;
