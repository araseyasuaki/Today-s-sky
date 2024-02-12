import React, { useState, useEffect } from 'react';
import Weather from './Weather/Weather';

const Choices = () => {
  const [PrefecturesData, setPrefecturesData] = useState([]);
  const [AreaData, setAreaData] = useState([]);
  const [AreaValue, setAreaValue] = useState('130010');
  const [btn, setBtn] = useState(false);
  const btnSwitch = () => {
    setBtn(!btn);
  }
  const RegionData = [
    { text: '北海道地方' },
    { text: '東北地方' },
    { text: '関東地方' },
    { text: '中部地方' },
    { text: '関西地方' },
    { text: '中国地方' },
    { text: '四国地方' },
    { text: '九州地方' },
    { text: '沖縄地方' },
  ];
  const hokkaidouArea = [
    { text: '宗谷地方', value: '011000' },
    { text: '上川・留萌地方', value: '012000' },
    { text: '網走・北見・紋別地方', value: '016000' },
    { text: '十勝地方', value: '013000' },
    { text: '釧路・根室地方', value: '014100' },
    { text: '胆振・日高地方', value: '014030' },
    { text: '石狩・空知・後志地方', value: '015000' },
    { text: '渡島・檜山地方', value: '017000' },
  ];
  const AreaType = [
    { fcode: 1, lcode: 6 },
    { acode: 7, bcode: 8, ccode: 7, dcode: 11 },
    { fcode: 14, lcode: 22 },
    { fcode: 23, lcode: 29 },
    { fcode: 30, lcode: 34 },
    { fcode: 35, lcode: 38 },
    { acode: 39, bcode: 44, ccode: 45 },
  ];
  const okinawaArea = [
    { text: '沖縄本島地方', value: '471000' },
    { text: '大東島地方', value: '472000' },
    { text: '宮古島', value: '473000' },
    { text: '八重山地方', value: '474000' },
  ];
  useEffect(() => {
    fetch('https://geoapi.heartrails.com/api/json?method=getPrefectures')
      .then((response) => response.json())
      .then((data) => {
        const Prefectures = data.response.prefecture;
        setPrefecturesData(Prefectures);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const AreaBtn = (e) => {
    const index = e.target.selectedIndex;
    let AreaChoices = [];
    if (index === 1) {
      AreaChoices = [...hokkaidouArea];
    } else if (index === 2) {
      for (
        let i = AreaType[index - 2].fcode;
        i <= AreaType[index - 2].lcode;
        i++
      ) {
        AreaChoices.push({ text: PrefecturesData[i], value: `0${i + 1}0010` });
      }
    } else if (index === 3) {
      for (
        let i = AreaType[index - 2].acode;
        i <= AreaType[index - 2].bcode;
        i++
      ) {
        AreaChoices.push({ text: PrefecturesData[i], value: `0${i + 1}0010` });
      }
      for (
        let i = AreaType[index - 2].ccode;
        i <= AreaType[index - 2].dcode;
        i++
      ) {
        AreaChoices.push({
          text: PrefecturesData[i + 2],
          value: `${i + 3}0010`,
        });
      }
    } else if (index === 9) {
      AreaChoices = [...okinawaArea];
    } else if (index === 8) {
      for (
        let i = AreaType[index - 2].acode;
        i <= AreaType[index - 2].bcode;
        i++
      ) {
        AreaChoices.push({ text: PrefecturesData[i], value: `${i + 1}0010` });
      }
      for (
        let i = AreaType[index - 2].ccode;
        i <= AreaType[index - 2].ccode;
        i++
      ) {
        AreaChoices.push({ text: PrefecturesData[i], value: `${i + 1}0010` });
      }
    } else if (index > 3) {
      for (
        let i = AreaType[index - 2].fcode;
        i <= AreaType[index - 2].lcode;
        i++
      ) {
        AreaChoices.push({ text: PrefecturesData[i], value: `${i + 1}0010` });
      }
    }
    setAreaData(AreaChoices);
  };
  const arase = (e) => {
    const AreaIndex = e.target.selectedIndex;
    const areaValueData = e.target.options[AreaIndex].value;
    setAreaValue(areaValueData);
  };
  return (
    <>
      <div className='formbg01' id={`${btn ? 'no' : '' }`}>
        <img className='formimg01' src="../mapofjapan.png" alt="" />
      </div>
      <div className='box' id={`${btn ? 'no' : '' }`}>
        <div className='formbg02'>
          <img className='formimg02' src="../logo.svg" />
        </div>
      </div>
      <form id={`${btn ? 'no' : '' }`}>
        <section>
          <h3>地方</h3>
          <select onChange={AreaBtn}>
            <option value="">選択してください</option>
            {RegionData.map((data, index) => (
              <option key={index}>{data.text}</option>
            ))}
          </select>
        </section>
        <section>
          <h3>都道府県（地方）</h3>
          <select onChange={arase}>
            <option value="">選択してください</option>
            {AreaData.map((data, index) => (
              <option value={data.value} key={index}>
                {data.text}
              </option>
            ))}
          </select>
        </section>
          <div onClick={btnSwitch}>検索</div>
      </form>
      <Weather AreaValue={AreaValue} btn={btn} btnSwitch={btnSwitch} />
    </>
  );
};

export default Choices;
