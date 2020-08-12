# README

# アプリ名: Glue
## 🌐 App URL

### **https://glue1.herokuapp.com/**  

## :octocat: テスト用アカウント
### email: test@com
### password: 11111111

## 📦 Features
### グループでチャットを行えます。
### 場所についてコメントがされた場合にはチャット画面に表示されます。
<p align="center">
  <img src="/public/README-images/スクリーンショット 2020-08-12 12.17.41.png" width=80%>
</p>

### グループごとに場所を登録しておけます。
<p align="center">
  <img src="/public/README-images/スクリーンショット 2020-08-12 12.17.59.png" width=80%>
</p>

### こちらの画面で場所の追加を行えます。
<p align="center">
  <img src="/public/README-images/スクリーンショット 2020-08-12 12.18.11.png" width=80%>
</p>

### 場所についてコメントができます。
<p align="center">
  <img src="/public/README-images/スクリーンショット 2020-08-12 11.51.55.png" width=80%>
</p>


## 制作背景
### 私には２ヶ月に1回必ず集まって飲み会を行う6人の仲間がいます。
### 決まったお店で飲み会を行います。
### 当日の時間を確認するのに、LINEだと店を予約した時間を報告するトークまで遡るのが面倒です。
### また、LINEグループも多数あります。二ヶ月に一度のことなので、「どのグループだっけ？」ってよくなります。
### 趣味がかぶっている仲間もいます。
### 趣味をする場所について今起きてることを知らせることができればもっと繋がりができるかも？！
### そう思い、このアプリをつくりました。

## 実装予定
### ユーザーごとにアイコンを設定できるようにする。

# DB設計
## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|presence: true|

### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages
- has_many :stores
- has_many :inform