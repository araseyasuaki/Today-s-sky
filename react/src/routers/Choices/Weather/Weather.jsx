import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Weather = ({ AreaValue, btn, btnSwitch }) => {
  const [w, setw] = useState(null);
  useEffect(() => {
    fetch(`https://weather.tsukumijima.net/api/forecast/city/${AreaValue}`)
      .then((response) => response.json())
      .then((data) => {
        setw(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [AreaValue]);
  return (
    <main id={`${btn ? '' : 'no'}`}>
      {w ? (
        <section>
          <header>
            <img
              onClick={btnSwitch}
              src="../public/arrow.png"
            />
            <h3>{w.title}</h3>
          </header>

          <section className="weatherlogo">
            <img src={w.forecasts[0].image.url} />
            <ul>
              <li>{w.forecasts[0].telop}</li>
              <li>
                <p>min:{w.forecasts[0].temperature.min.celsius}°</p>
                <p>MAX:{w.forecasts[0].temperature.max.celsius}°</p>
              </li>
            </ul>
          </section>

          <section className="precipitation">
            <h3>降水確率</h3>
            <ul>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T00_06}</p>
                <p>0-6時</p>
              </li>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T06_12}</p>
                <p>6-12時</p>
              </li>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T12_18}</p>
                <p>12-18時</p>
              </li>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T18_24}</p>
                <p>18-24時</p>
              </li>
            </ul>
          </section>

          <section className='notice'>
            <h3>お知らせ</h3>
            <p>{w.description.text}</p>
          </section>

          <section className="schedule">
            <ul>
              <li>
                <p>今日</p>
                <p>
                  MAX:{w.forecasts[0].temperature.max.celsius}°
                </p>
                <p>
                  MAX:{w.forecasts[0].temperature.max.celsius}°
                </p>
                <img src={w.forecasts[0].image.url} />
              </li>
              <li>
                <p>明日</p>
                <p>
                  min:{w.forecasts[1].temperature.min.celsius}°
                </p>
                <p>
                  MAX:{w.forecasts[1].temperature.max.celsius}°
                </p>
                <img src={w.forecasts[1].image.url} />
              </li>
              <li>
                <p>明後日</p>
                <p>
                  min:{w.forecasts[2].temperature.min.celsius}°
                </p>
                <p>
                MAX:{w.forecasts[2].temperature.max.celsius}°
                </p>
                <img src={w.forecasts[2].image.url} />
              </li>
            </ul>
          </section>
        </section>
      ) : (
        <p>Loading weather data...</p>
      )}
    </main>
  );
};

export default Weather;

// {
//   "publicTime": "2024-02-12T17:00:00+09:00",
//   "publicTimeFormatted": "2024/02/12 17:00:00",
//   "publishingOffice": "岡山地方気象台",
//   "title": "岡山県 岡山 の天気",
//   "link": "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=330000",
//   "description": {
//       "publicTime": "2024-02-12T16:32:00+09:00",
//       "publicTimeFormatted": "2024/02/12 16:32:00",
//       "headlineText": "",
//       "bodyText": "　岡山県は、高気圧に覆われて晴れています。\n\n　１２日夜は、高気圧に覆われて晴れるでしょう。\n\n　１３日は、引き続き、高気圧に覆われて晴れる見込みです。",
//       "text": "　岡山県は、高気圧に覆われて晴れています。\n\n　１２日夜は、高気圧に覆われて晴れるでしょう。\n\n　１３日は、引き続き、高気圧に覆われて晴れる見込みです。"
//   },
//   "forecasts": [
//       {
//           "date": "2024-02-12",
//           "dateLabel": "今日",
//           "telop": "晴れ",
//           "detail": {
//               "weather": "晴れ",
//               "wind": "南西の風　後　北の風",
//               "wave": "０．５メートル"
//           },
//           "temperature": {
//               "min": {
//                   "celsius": null,
//                   "fahrenheit": null
//               },
//               "max": {
//                   "celsius": null,
//                   "fahrenheit": null
//               }
//           },
//           "chanceOfRain": {
//               "T00_06": "--%",
//               "T06_12": "--%",
//               "T12_18": "--%",
//               "T18_24": "0%"
//           },
//           "image": {
//               "title": "晴れ",
//               "url": "https://www.jma.go.jp/bosai/forecast/img/100.svg",
//               "width": 80,
//               "height": 60
//           }
//       },
//       {
//           "date": "2024-02-13",
//           "dateLabel": "明日",
//           "telop": "晴れ",
//           "detail": {
//               "weather": "晴れ",
//               "wind": "北の風　後　南の風",
//               "wave": "０．５メートル"
//           },
//           "temperature": {
//               "min": {
//                   "celsius": "-1",
//                   "fahrenheit": "30.2"
//               },
//               "max": {
//                   "celsius": "16",
//                   "fahrenheit": "60.8"
//               }
//           },
//           "chanceOfRain": {
//               "T00_06": "0%",
//               "T06_12": "0%",
//               "T12_18": "0%",
//               "T18_24": "0%"
//           },
//           "image": {
//               "title": "晴れ",
//               "url": "https://www.jma.go.jp/bosai/forecast/img/100.svg",
//               "width": 80,
//               "height": 60
//           }
//       },
//       {
//           "date": "2024-02-14",
//           "dateLabel": "明後日",
//           "telop": "曇り",
//           "detail": {
//               "weather": "くもり",
//               "wind": "北東の風　後　南の風",
//               "wave": "０．５メートル"
//           },
//           "temperature": {
//               "min": {
//                   "celsius": "3",
//                   "fahrenheit": "37.4"
//               },
//               "max": {
//                   "celsius": "17",
//                   "fahrenheit": "62.6"
//               }
//           },
//           "chanceOfRain": {
//               "T00_06": "20%",
//               "T06_12": "20%",
//               "T12_18": "20%",
//               "T18_24": "20%"
//           },
//           "image": {
//               "title": "曇り",
//               "url": "https://www.jma.go.jp/bosai/forecast/img/200.svg",
//               "width": 80,
//               "height": 60
//           }
//       }
//   ],
//   "location": {
//       "area": "中国",
//       "prefecture": "岡山県",
//       "district": "南部",
//       "city": "岡山"
//   },
//   "copyright": {
//       "title": "(C) 天気予報 API（livedoor 天気互換）",
//       "link": "https://weather.tsukumijima.net/",
//       "image": {
//           "title": "天気予報 API（livedoor 天気互換）",
//           "link": "https://weather.tsukumijima.net/",
//           "url": "https://weather.tsukumijima.net/logo.png",
//           "width": 120,
//           "height": 120
//       },
//       "provider": [
//           {
//               "link": "https://www.jma.go.jp/jma/",
//               "name": "気象庁 Japan Meteorological Agency",
//               "note": "気象庁 HP にて配信されている天気予報を JSON データへ編集しています。"
//           }
//       ]
//   }
// }
