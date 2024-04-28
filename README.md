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

地方の選択肢は配列に書いていて、選択したらoptionのvalueで条件分岐をして、表示する都道府県をAPIから取得しています。

検索ボタンを押したら選択した都道府県の気温や降水確率などの情報を天気APIを通して取得しています。

