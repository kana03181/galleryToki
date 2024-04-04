# Orelop CLI 2.1.1

俺の Web サイト制作開発環境
Ore no Web Develop Command Line Interface 略して「Orelop CLI」です。

僕なりの Web サイト制作の開発環境ってことです。

昔は Gulp を使って開発環境を作っていましたが、Gulp をやめて webpack を使って実行する開発環境を作りました。
version1.0 では、webpack は JavaScript のバンドルとトランスパイルの目的だけで使っており、他のコンパイルは npm-scripts で書いていましたが、この version2.0 では、ほぼ全てのコンパイルを webpack で行っています。

## 概要

この開発環境で開発が可能な言語は以下のとおりです。

- HTML（Pug）
- CSS（Sass）
- JavaScript（TypeScript）
- PHP
- MySQL

です。

### HTML（Pug）

静的サイトは、純粋に HTML を書く方法と Pug を使う方法で開発できます。
pug を開発用にコンパイルする時には、`Prettier` による整形を行い、
本番環境用にコンパイルする場合は、HTML、Pug ともに minify 化されます。

### CSS（Sass / Scss）

CSS は通常の CSS や Sass/Scss での記述が可能です。
コンパイルは dart-sass でコンパイルしてます。
また、コンパイル時に、PostCSS によって様々な調整も行います。

- `Autoprefixer` によるベンダープレフィックス自動付加（対応ブラウザは `browserslist` で設定）
- `Css Declaration Sorter` によるプロパティの並び順の調整（`SMACSS` の順）
- `CSS MQPacker` による メディアクエリの最適化(複数のメディアクエリをまとめる)

フォーマットやルールの管理は、`Prettier`と `Stylelint`を使っています。
自動でルールの修正できるものは自動で行い、修正できないコードがあればエラーを出力します。

なお、開発用にコンパイルする際は、ソースマップを出力し、
本番環境用にコンパイル吸う場合は、minify 化されます。

### JavaScript（TypeScript）

JavaScript は、JavaScript をそのまま書くか、TypeScript よる開発が可能です。

ES6 以降の文法に関しては、IE11 ユーザーのことも考慮して、JavaScript の場合は `Babel` で、
TypeScript の場合は tsconfig の設定に基づき ES5 にトランスパイルします。

なお、機能などの API に関しては、JavaScirpt の場合は babel の設定で、`core-js`、`regenerator-runtime`を利用して必要なポリフィルを利用するようにしていますが、
TypeScript の場合は、`core-js`、`regenerator-runtime`を直接 `import` として読み込んでいます。

また、よく使うライブラリなどは予めインストールをしているので、
利用する際はエントリーポイントに `import` するだけで利用できます。

- jQuery
- Swiper
- GSAP
- object-fit-images

フォーマットやルールの管理は、`Prettier`と `Stylelint`を使っています。
自動でルールの修正できるものは自動で行い、修正できないコードがあればエラーを出力します。

なお、開発用にコンパイルする際は、ソースマップを出力し、
本番環境用にコンパイル吸う場合は、minify 化されます。

### PHP + MySQL

PHP + MySQL を開発することも可能です。

すでにローカル開発環境をお持ちの場合は、そちらをお使い頂ければと思いますが、
`Docker Comporse` を使った LAMP 環境を構築できるような設定ファイルも入れております。

- Nginx
- MySQL 5.7
- PHP 7
- phpMyAdmin

なお、開発時は `BrawserSync` による自動リロードも可能です。




### 画像

画像ファイルは、

- `imagemin-mozjpeg`
- `imagemin-pngquant`
- `imagemin-gifsicle`
- `imagemin-svgo`

を使って、画像の圧縮を一括で行います。
なお、「`.jpg`」と「`.png`」のファイルに関しては、自動で「`.webp`」のファイルを生成します。

ファイル名は元のファイル名（拡張子を含む）の後ろに「`.webp`」という拡張子が追加されます。
付属の「`.htaccess`」をサーバーに設置することで「`webp`」に対応しているブラウザから「`jpeg`」と「`png`」をリクエストされた際は、自動で「`webp`」を返します。

## 必要な環境

- Node.js 14 ~

### Node.js がインストールされているか確認する方法

ターミナルなどのコマンドラインツールを立ち上げて、以下のコマンドを入力

```bash:ターミナル
node -v
```

これで、Node.js のバージョンが表示されれば、Node.js はインストールされています。

なお、Docker を使った PHP の開発環境を構築する場合は、以下のツールも必要となります。

- Docker
- Docker Compose

こちらも予め、インストールしておいて下さい。

### Docker、Docker Comporse がインストールされているか確認する方法

ターミナルなどのコマンドラインツールを立ち上げて、以下のコマンドを入力

```
docker -v
```

これで、docker のバージョンが表示されれば、docker はインストールされています。

```
docker-comporse -v
```

これで、docker-comporse のバージョンが表示されれば、docker-comporse はインストールされています。

Mac OS での動作確認は行ってますが、Windows では動作確認はしてません。

## インストール

では、Orelop CLI の使い方を紹介します。

## 必要なファイル群をダウンロード

まずは、必要なファイル達をダウンロードします。

### Git をお使いの方は、このリポジトリを clone する

ターミナルなどのコマンドラインツールを起動し、開発を行うディレクトリで、このリポジトリを clone して下さい。

```
git clone https://gitlab.com/shibajuku/template/orelop-cli.git
```

### Git をお持ちじゃない場合は、zip ファイルをダウンロード

ダウロードボタンから、zip ファイルをダウンロードして、デスクトップなどに解凍しておいて下さい。

## ディレクトリ構造の確認

Orelop CLI は以下のようなディレクトリ構成になっています。

```
orelop-cli
├ .vscode
│　└ settings.json
│
├ config
│　├ mysql
│　├ nginx
│　└ php
│
├ src
│　├ assets
│　│ ├ img
│　│ │ └ logo-primary.svg
│　│ │
│　│ ├ js
│　│ │ ├ lib
│　│ │ │ ├ loading.js
│　│ │ │ ├ ScrollObserver.js
│　│ │ │ └ Toggle.js
│　│ │ └ main.js
│　│ │
│　│ ├ sass
│　│ │ ├ foundation
│　│ │ ├ global
│　│ │ │ ├ function
│　│ │ │ ├ mixin
│　│ │ │ └ settings
│　│ │ ├ layout
│　│ │ ├ object
│　│ │ │ ├ component
│　│ │ │ ├ project
│　│ │ │ └ utility
│　│ │ └ common.scss
│　│ │
│　│ ├ ts
│　│ │ ├ lib
│　│ │ │ ├ loading.js
│　│ │ │ ├ ScrollObserver.js
│　│ │ │ └ Toggle.js
│　│ │ └ main.ts
│　│ │
│　├ html
│　│ └ sample.html
│　│
│　├ php
│　│ ├ include
│　│ │ ├ config.php
│　│ │ ├ footer.php
│　│ │ ├ functions.php
│　│ │ ├ header.php
│　│ │ └ include.php
│　│ └ index.php
│　│
│　├ pug
│　│ ├ include
│　│ │ ├ _config.pug
│　│ │ ├ _footer.pug
│　│ │ ├ _head.pug
│　│ │ ├ _header.pug
│　│ │ └ _schema.pug
│　│ ├ layout
│　│ │ └ _main.pug
│　│ ├ mixin
│　│ │ └ _global-nav.pug
│　│ └ index.pug
│　│
│　├ .htaccess
│　└ humans.txt
│
├ .eslintignore
├ .eslintrc.json
├ .gitignore
├ .Prettierrc.json
├ .stylelintrc.json
│
├ babel.config.js
├ docker-compose.yml
├ postcss.config.js
├ tsconfig.json
├ webpack.common.js
├ webpack.dev.js
├ webpack.prod.js
│
├ package.json
├ package.json
└ yarn.lock
```

この src ディレクトリ内で開発を進めて行きます。

## 必要なパッケージをインストール

クローンまたは解凍した `orelop-cli` フォルダの名前を変更して、ターミナルなどのコマンドラインツールでそのディレクトリに移動しましょう。

```
cd [リネームしたorelop-cliフォルダ名]
```

移動したら、必要なパッケージをインストールする為に、以下のコマンドを実行します。

【npm の場合】

```
npm ci
```

【yarn の場合】

```
yarn install
```

このコマンドを実行すると、ルートディレクトリに配置してある、
`package.json`、`package-lock.json`（ `yarn.lock` ）の内容を元に、必要なパッケージをインストールしてくれます。

コーヒーを飲んでインストールが終わるまでしばし待ちます。

### パッケージのアップデート

お使いのタイミングによっては、パッケージが古い場合があります。
最新になっていないパッケージを一覧表示する場合は、下記のコマンドをターミナルにドンして下さい。

【npm の場合】

```
npm outdated
```

【yarn の場合】

```
yarn outdated
```

全て最新にする場合は、以下のコマンドをターミナルにドンでアップデートできます。

【npm の場合】

```
npm update
```

【yarn の場合】

```
yarn upgrade
```

ただし、アップデートによって仕様が変わる場合はありますのでご注意下さい。
個別にパッケージをアップデートする場合は以下のコマンドをターミナルにドンして下さい。

【npm の場合】

```
npm update [更新したいパッケージ名]
```

【yarn の場合】

```
yarn upgrade [更新したいパッケージ名]
```

もし、必要のないパッケージがある場合は、下記のコマンドで削除して下さい。

【npm の場合】

```
npm uninstall [削除したいパッケージ名]
```

【yarn の場合】

```
yarn remove [削除したいパッケージ名]
```

また、npm や yarn 自体のアップデートをする場合は以下のコマンドをターミナルにドンして下さい。

【npm の場合】

```
npm update npm
```

【yarn の場合】

```
npm install yarn -g
```

## 開発を開始する

開発を開始する際は、以下のコマンドを実行するとファイルの監視が始まります。

【npm の場合】

```
npm run dev
```

【yarn の場合】

```
yarn run dev
```

この `npm run dev` （`yarn run dev`）というコマンドを実行すると、まずルートディレクトリに `public` というフォルダを生成し、`src` フォルダから、必要なファイルを `public` フォルダにコピーしたり、コンパイルします。そして、`src` フォルダのウォッチ（監視）を開始し、ローカルサーバが立ち上がります。

ウォッチ中はファイルの変更を感知し、変更があれば自動でコンパイルします。
ウォッチを停止するには、「control」+「c」でウォッチを停止できます。

ウォッチ中は、`src` フォルダの中で開発を進めて下さい。

## HTML の開発

HTML は、`src/html` フォルダ内で開発して下さい。
必要に応じて、`src/html` フォルダ内に新たなフォルダを作ってもらっても構いません。

保存したり、新規のファイルを作成するとディレクトリの構造を保ったまま、 `public`フォルダの直下にコピーされます。

従って、相対パスを書く場合は、`public` ファイル内の構造を基準に考えてください。

### 例：`src/html` 直下にある HTML ファイルに common.css をリンクする場合

```html
<link href="assets/css/common.css" rel="stylesheet" />
```

なお、Pug による開発を行わない場合は、`src` 内の `pug` フォルダは削除しておいて下さい。

## Pug の開発

Pug は、`src/pug` フォルダ内で開発して下さい。

保存したり、新規のファイルを作成するとディレクトリの構造を保ったまま、 `public`フォルダの直下にコンパイルされます。

必要に応じて、`src/pug` フォルダ内に新たなフォルダを作ってもらっても構いません。

従って、相対パスを書く場合は、`public` ファイル内の構造を基準に考えてください。

### 例：`src/pug` 直下にある HTML ファイルに common.css をリンクする場合

```pug
 link(href="assets/css/common.css", rel="stylesheet")
```

なお、`src/html` フォルダを使わない場合は、`src` 内の `html` フォルダを削除しておいて下さい。

なおデフォルトでは各ファイルを以下のようなルールで保存しています。

- コンポーネントは `include` フォルダ内に作成
- レイアウトなどの継承ファイルは `layout` フォルダ内に作成
- mixin は `mixin` フォルダ内に作成

コンパイル後ファイルを生成したくないパーシャルファイルを作成する場合は、ファイル名を `_` から初めて下さい。

## CSS の開発

CSS を開発する場合は、`src/assets/css` フォルダ内で開発して下さい。

保存したり、新規のファイルを作成するとディレクトリの構造を保ったまま、 `public/assets/css`フォルダ内に保存されます。

その際、`PostCSS` や、`Prettier`、`Stylelint`を用いて、以下のような中間処理を行います。

- `Autoprefixer` によるベンダープレフィックス自動付加（対応ブラウザは `Autoprefixer` の `default`）
- `Css Declaration Sorter` によるプロパティの並び順の調整（`SMACSS` の順）
- `CSS MQPacker` による メディアクエリの最適化(複数のメディアクエリをまとめる)
- `Prettier` によるフォーマットとルールのチェック
- `Stylelint` によるルールのチェック（修正できるものは自動修正）

## Sass/Scss の開発

Sass/Scss で開発する場合は、`src/assets/sass` フォルダ内で、開発して下さい。

インポート元の sass ファイルはデフォルトでは、`common.scss` としています。

なお、予め FLOCSS の設計を元にした、ディレクトリを用意していますが、必要に応じて変更してもらって構いません。
また、予め 俺流の reset.css「Oreset.css」（`foundation/_oreset.scss`）や俺流フレキシブル CSS グリッドシステム「Olex 2.0」（`layout/_grid.scss`）、俺流スクロールエフェクトの「Oreroll」（`component/_inview.scss`）も用意しています。

`scss` のインポートは、`@use` を使って各ディレクトリの`_index.scss`に読み込んで下さい。

### 読み込みのサンプル
コンポーネントのsassを作成
```sass:common.scss
// sass/object/project/_logo.scss
@charset 'UTF-8';
@use "sass:math";
@use "../../global" as *;

/*
  Logo
*/
.p-logo {
  // ロゴのスタイル
}

```

ディレクトリ内の「_index.scss」に @use で読み込み
```sass:common.scss
// sass/object/project/_index.scss
@use "logo";
@use "hero";
```



scss は、ファイルを保存したり、新規のファイルを作成すると `public/assets/css`フォルダ内に`css` をコンパイルします。

その際、`PostCSS` や、`Prettier`、`Stylelint`を用いて、以下のような中間処理を行います。

- `Autoprefixer` によるベンダープレフィックス自動付加（対応ブラウザは `Autoprefixer` の `default`）
- `Css Declaration Sorter` によるプロパティの並び順の調整（`SMACSS` の順）
- `CSS MQPacker` による メディアクエリの最適化(複数のメディアクエリをまとめる)
- `Prettier` によるフォーマットとルールのチェック
- `Stylelint` によるルールのチェック（修正できるものは自動修正）

また、開発時のデバックを行いやすいように、ソースマップも `public/assets/css`フォルダに出力します。

## JavaScript の開発

JavaScript は、`src/assets/js` フォルダ内で開発して下さい。

インポート元のエントリーポイントとなる JavaScript ファイルの名前をデフォルトでは、`main.js` としています。

なお、デフォルトで以下のライブラリをインストールしています。

- jQuery
- Swiper
- GSAP
- object-fit-images

利用する場合は、`main.js`の下記の部分のコメント外してお使い下さい。

【jQuery を使う場合】

```javascript:main.bundle.js
import $ from 'jquery'; // コメントを外す
// import Swiper from 'swiper';
// import ScrollObserver from './lib/ScrollObserver';
// import Toggle from './lib/Toggle';
// import { dropdown } from './lib/dropdown';
// import { inview } from './lib/inview';
```

また、モジュール単位で JavaScript ファイルを作成する場合は、
エントリーポイントとなる `main.js` にインポートしてお使い下さい。

```javascript:main.js
import $ from 'jquery';
import 'sub';
```

JavaScript は、ファイルを保存したり、新規のファイルを作成すると `public/assets/js`フォルダ内に各 JavaScript ファイルをバンドルした`main.bundle.js` というファイルをコンパイルします。

その際、`babel`や、`Prettier`、`ESlint`を用いて、以下のような中間処理を行います。

- `babel`、`core-js`、`regenerator-runtime` による ES5 へのトランスパイルとポリフィルの設定
- `Prettier` によるフォーマットとルールのチェック
- `Stylelint` によるルールのチェック（修正できるものは自動修正）

また、開発時のデバックを行いやすいように、ソースマップも `public/assets/js`フォルダに出力します。

## TypeScript の開発

TypeScript は、`src/assets/ts` フォルダ内で開発して下さい。

開発に当たっては webpack.config.js の 20 行目付近にある以下の設定を変更して下さい。

```javascript: webpack.config.js
const settings = {
  sass: true,
  ts: true, // これを true にする
  php: false,
};
```

インポート元のエントリーポイントとなる TypeScript ファイルの名前をデフォルトでは、`main.ts` としています。

なお、デフォルトで以下のライブラリをインストールしています。

- jQuery
- Swiper
- GSAP
- object-fit-images

利用する場合は、`main.ts`の下記の部分のコメント外してお使い下さい。

【jQuery を使う場合】

```javascript:main.ts
import $ from 'jquery'; // コメントを外す
// import Swiper from 'swiper';
// import ScrollObserver from './lib/ScrollObserver';
// import Toggle from './lib/Toggle';
// import { dropdown } from './lib/dropdown';
// import { inview } from './lib/inview';
```

また、モジュール単位で JavaScript ファイルを作成する場合は、
エントリーポイントとなる `main.js` にインポートしてお使い下さい。

```javascript:main.ts
import $ from 'jquery';
import 'sub';
```

TypeScript は、ファイルを保存したり、新規のファイルを作成すると `public/assets/js`フォルダ内に各 JavaScript ファイルをバンドルした`main.bundle.js` というファイルをコンパイルします。

その際、`babel`や、`Prettier`、`ESlint`を用いて、以下のような中間処理を行います。

- `tsconfig.json`、`core-js`、`regenerator-runtime` に基づいて ES5 へのトランスパイル
- `Prettier` によるフォーマットとルールのチェック
- `Stylelint` によるルールのチェック（修正できるものは自動修正）

また、開発時のデバックを行いやすいように、ソースマップも `public/assets/js`フォルダに出力します。

## PHP の開発

PHP での開発を行うには、`src/php` フォルダ内で開発して下さい。
必要に応じて、`src/php` フォルダ内に新たなフォルダを作ってもらっても構いません。

開発に当たっては webpack.config.js の 20 行目付近にある以下の設定を変更して下さい。

```javascript: webpack.config.js
const settings = {
  sass: true,
  ts: false,
  php: true, // これを true にする
};
```

これにより PHP ファイル更新時の自動リロードが有効になります。

なお、ファイルを保存したり、新規のファイルを作成するとディレクトリの構造を保ったまま、 `public`フォルダの直下にコピーされます。

従って、相対パスを書く場合は、`public` ファイル内の構造を基準に考えてください。

### 例：`src/php` 直下にある HTML ファイルに common.css をリンクする場合

```html
<link href="assets/css/common.css" rel="stylesheet" />
```

なお、PHP による開発を行わない場合は、`src` 内の `php` フォルダは削除しておいて下さい。

続いて環境を用意しましょう。

### XAMPP や MAMP を使う場合

PHP は XAMPP や MAMP を使って開発される場合は、この `Orelop CLI`のディレクトリを `htdocs` などの公開フォルダに配置して開発して下さい。

なお、お使いの環境の `http` のポート番号に合わせて `bs.config.js` 7 行目にある `proxy` の `8080` の部分をお使いのポート番号に変更して下さい。

そして、ルートディレクトリにある `config` フォルダは不要になりますので、削除しておいて下さい。

### Docker を使う場合

`docker-compose.yml`を使って Niginx PHP MySQL phpMyAdmin の環境を作ることができます。

*ウォッチ停止中*に、ルートディレクトリをターミナルなどのコマンドラインツールで開き、以下のコマンドを実行することで、環境をインストールすることが出来ます。

```bash:ターミナル
docker-compose up -d
```

これでコンテナをバックグラウンドで立ち上げることが出来ますが、
初回は、Docker の Image 　や　 Container が無いため時間がかかります。

おいしいコーヒーを淹れましょう。

インストールが終わったら、以下のコマンドを実行して、コンテナが立ち上がっていることを確認しましょう。

```bash:ターミナル
docker ps
```

Docker での開発が終わったら、「control」+「c」でウォッチを停止し、以下のコマンドで コンテナを停止しましょう。

```bash:ターミナル
docker-comporse down
```

以下のコマンドを実行して、コンテナが停止していることを確認しましょう。

```bash:ターミナル
docker ps
```

なお、コンテナを停止しても、Docker Image は消えません。

```bash:ターミナル
docker images
```

なお、引き続き開発を行う際は、再度以下のコマンドを実行して、コンテナを起動します。

```bash:ターミナル
docker-compose up -d
```

今度は、すぐに立ち上がると思います。

そして、また開発が終わったら以下のコマンドで コンテナを停止しましょう。

```bash:ターミナル
docker-comporse down
```

案件が終わってイメージを削除するには `docker images` で image の ID を確認後、以下のコマンドを入力します。

```bash:ターミナル
docker rmi ［imageのID］
```


#### WordPressの場合
WordPressを利用するには、`docker-comporse.yml` にある、「LAMP環境用」の設定をすべて削除し、「WordPress用」のコメントをすべて取り除くことでWordPressによる開発環境が作れます。

WordPressは `/public` フォルダ内に `wp-content` フォルダ以下の構成のみがマウントされるようにしています。


従って開発前に `webpack.common.js` の「dist」フォルダのパスと `package.json` の「creanup」のスクリプトのパスを WordPressで作成するテーマフォルダまでのパスに変更する必要があります。


## MySQL の開発

Docker で環境を作った場合は、デフォルトで `docker_db` というデータベースをひとつ作ってあります。

開発中はそのデータベースを使ってアプリを開発してもらえればと思います。
なお、そのデータベースを触れるユーザーも作ってあります。

PHP から、データベースを操作する際は、それらデータベースの名前や、ホスト名、データベースのユーザ名とパスワードをまとめた定数化した PHP ファイルを、`config/php/database.php` というファイルで作ってあります。

従って、データベースに接続したい PHP ファイルで、その設定ファイルを読み込めばすぐにデータベースに接続できます。

```php:index.php
<?php
  // ファイルの読み込み
  require_once('../config/php/database.php');

  try {
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);
    echo '接続成功';
  } catch (PDOException $e) {
    //　例外発生時の処理
    echo 'エラー' . h($e->getMessage());
    exit();
  }
?>
```

MySQL にログインする方法が、MAMP や XAMPP などとすこし違って、
まず、MySQL のコンテナに入らないといけません。

```bash:ターミナル
docker-compose exec mysql bash
```

するとターミナルが、`root@xxxxxxxxxxxx:/#` のようになると思いますが、これで、`mysql` コマンドが実行できます。

```
mysql -u docker_user -p
```

で、パスワードを入力してエンターを押すと、MySQL モニタにログインできます。

なお、`docker_user` というユーザーは管理者権限ではないので、`create database` はできません。

docker_db というデータベースだけを操作できる権限ですので、このデータベースを使ってアプリを作ってください。

### phpMyAdmin を使う

phpMyAdmin を使う場合は、

http://localhost:8888

にアクセスして下さい。

すると、phpMyAdmin が開きます。

### 本番用にコンパイルする

開発が完了し、本番用のファイルを作成するには、以下コマンドを利用します。

【npm の場合】

```
npm run prod
```

【yarn の場合】

```
yarn run prod
```

基本的には `dev` コマンドと同様で必要なファイルのコピーやコンパイルを行います。

ですが、以下の部分が異なります。

- HTML（Pug）ファイルの minify 化
- CSS（Sass/Scss）ファイルの minify 化
- JS（TypeScript）ファイルの minify 化
- ソースマップは出力しない

コンパイルしたデータは、圧縮処理され本番にふさわしいデータを作成します。

あとは、`public`フォルダ内のデータをデプロイして頂ければと思います。

`.heaccess`や `humans.txt`は必要に応じてアップロードして下さい。

### デプロイ

GitHub Actions を使った自動デプロイ環境を利用できます。

自動デプロイ環境を利用するにはまず、`.github` フォルダ内の `_workflows` を `workflows` にリネームします（「_」を削除するだけ）


`.github/workflows/deploy.yml` を開き、
「local-dir」と「server-dir」を環境に合わせて変更して下さい。

また、GitHub リポジトリの「settings」の「secrets」、「actions」から「New repository secret」をクリックして、下記のように FTP の情報を登録して下さい。

Name：FTP_SERVER
Value：ホスト名（サーバ名）

Name：FTP_USERNAME
Value：FTP ユーザー名

Name：FTP_PASSWORD
Value：FTP パスワード

これで、`main` ブランチに `push` すると、自動的に本番環境にビルドされ、、ビルドに成功すると「local-dir」で指定したファイルが、「server-dir」で指定したディレクトリ内にアップロードされます。
