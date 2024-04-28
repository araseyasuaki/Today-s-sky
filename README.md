#### 使用技術
* React
---
#### 使用API
(天気API)
*  https://weather.tsukumijima.net/api/forecast/city/130010

(都道府県API)
*  https://geoapi.heartrails.com/api/json?method=getPrefectures
---
今回はAPIを使い天気予報アプリを作りました。

まず選択肢として関東や東北などの地方を選択してから、それに合わせた都道府県を条件分岐でAPIから取得して表示させています。

検索ボタンを押したら選択した都道府県の気温や降水確率などの情報を天気APIを通して取得しています。
