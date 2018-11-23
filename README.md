# TensorFlow.js Drill

20181123 JavaScript つまみ食いハンズオン用

## 準備

### Node インストール

Node.js (npm) のインストールが必要です。
インストールされていない人は [公式サイト](https://nodejs.org/ja/) からダウンロードしてインストールしてください。

### firebase-drill をダウンロード

[JavaScript つまみ食いハンズオン用のリポジトリ](https://github.com/todays-mitsui/tensorflow-drill) を用意しています。
`git clone` するか、 ZIP 形式でダウンロードして手元に準備しておいてください。

### テスト用ローカルサーバーの立ち上げ

必要なライブラリを読み込み。
tensorflow-drill のディレクトリ内で最初の一回だけ下記のコマンドを実行する。

```console
npm install
```

サーバー立ち上げ

```console
# アヤメデータ分類問題 のとき
npm run iris

# 数字認識 のとき
npm run mnist

# 物体認識 のとき
npm run cifar
```

## 資料

1. [アヤメデータ分類問題  - Iris.ipynb](https://colab.research.google.com/drive/1fZwWFYbLNycPU0Jyop2l8DHIqQVfn4-R)
2. [文字認識, 数字認識 - MINST.ipynb](https://colab.research.google.com/drive/1RH1d26CtdHks8k-Uh1Y_0FXySDy6MG3u)
3. [写真から物体認識 - CIFAR10.ipynb](https://colab.research.google.com/drive/1YTjV35K06uKZsVaKMzbo1o6ctC34L1NB)
