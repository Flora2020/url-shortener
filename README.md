# 短網址產生器（url shortener）

## 環境建置與需求 (prerequisites)
#### 環境
- Node.js 10.15.0

#### 套件
- express 4.17.1
- express-handlebars 5.2.0
- body-parser 1.19.0
- mongoose 5.11.15

#### 資料庫
MongoDB Community Server

## 安裝與執行 (installation and execution)
1. 選定一個資料夾，用來存放本專案。開啟終端機，移動至該資料夾，下載本專案
```
git clone https://github.com/Flora2020/url-shortener.git
```
2. 移動至本專案資料夾
```
cd url-shortener
```
3. 安裝套件
```
npm install
```
4. 啟動伺服器
```
node app.js
```
5. 若終端機出現下列字樣，代表伺服器成功啟動，並且與資料庫連線
```
express is listening on http://localhost:3000
mongodb connected!
```
6. 執行本專案：打開瀏覽器，於網址列輸入
```
http://localhost:3000
```

## 功能 (features)
- 輸入原網址，按下「Shorten」按鈕，即可產生短網址
- 於瀏覽器網址列輸入短網址，可到達原網址之頁面

## 預覽圖（preview image）
![This is a preview image.](https://github.com/Flora2020/images/blob/main/url-shortener.jpg?raw=true "This is a preview image.")