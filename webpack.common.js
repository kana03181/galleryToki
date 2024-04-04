const path = require("path");
const globule = require("globule");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const StyleLintPlugin = require("stylelint-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// ==============================================
// 設定
// ==============================================
const dir = {
  src: "src",
  dist: "public",
  assets: "assets",
};

const settings = {
  pug: true,
  sass: true,
  ts: false,
  php: false,
};

// ==============================================
// エントリーポイント設定
// ==============================================
const entryPoints = {
  main: [`./${dir.src}/${dir.assets}/js/main.js`, `./${dir.src}/${dir.assets}/css/common.css`],
};

if (settings.ts) {
  entryPoints.main[0] = `./${dir.src}/${dir.assets}/ts/main.ts`;
}
if (settings.sass) {
  entryPoints.main[1] = `./${dir.src}/${dir.assets}/sass/common.scss`;
}

// ==============================================
// Pug の設定
// ==============================================
const templates = [];
if (settings.pug) {
  const documents = globule.find([`./${dir.src}/html/**/*.html`, `./${dir.src}/pug/**/*.pug`], {
    ignore: [`./${dir.src}/html/**/_*.html`, `./${dir.src}/pug/**/_*.pug`],
  });

  documents.forEach((document) => {
    const fileName = document
      .replace(`./${dir.src}/pug/`, "")
      .replace(`./${dir.src}/html/`, "")
      .replace(".pug", ".html");
    templates.push(
      new HtmlWebpackPlugin({
        filename: `${fileName}`,
        template: document,
        inject: false,
        minify: false,
      })
    );
  });
}

// ==============================================
// BrowserSync の設定
// ==============================================
const browserOptions = {
  host: "localhost",
  port: 3000,
  online: true,
  open: "external",
};

if (settings.php) {
  browserOptions.proxy = "http://localhost:8080/";
} else {
  browserOptions.server = { baseDir: [`${dir.dist}`] };
}

// ==============================================
// webpack モジュールエクスポート
// ==============================================
module.exports = {
  entry: {
    ...entryPoints,
  },
  output: {
    path: path.resolve(__dirname, dir.dist),
    filename: `./${dir.assets}/js/[name].bundle.js`,
    // assetModuleFilename: `${dir.assets}/img/[name][ext]`,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(js|ts|tsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true, //autofixモードの有効化
          failOnError: true, //エラー検出時にビルド中断
        },
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        enforce: "pre",
        use: ["sass-loader", "import-glob-loader"],
      },
      {
        test: /\.(pug|html)$/,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false,
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        enforce: "pre",
        use: [
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new BrowserSyncPlugin(browserOptions),
    new MiniCssExtractPlugin({
      filename: `./${dir.assets}/css/common.css`,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${dir.src}/${dir.assets}/img`,
          to: `${dir.assets}/img`,
          noErrorOnMissing: true,
        },
        {
          from: `${dir.src}/${dir.assets}/font`,
          to: `${dir.assets}/font`,
          noErrorOnMissing: true,
        },
        {
          from: `${dir.src}/${dir.assets}/pdf`,
          to: `${dir.assets}/pdf`,
          noErrorOnMissing: true,
        },
        {
          from: `${dir.src}/${dir.assets}/media`,
          to: `${dir.assets}/media`,
          noErrorOnMissing: true,
        },
        {
          from: `${dir.src}/php`,
          noErrorOnMissing: true,
        },
        {
          from: "*.txt",
          context: `${dir.src}/`,
          noErrorOnMissing: true,
        },
        {
          from: "*.json",
          context: `${dir.src}/`,
          noErrorOnMissing: true,
        },
        {
          from: "*.xml",
          context: `${dir.src}/`,
          noErrorOnMissing: true,
        },
        {
          from: "*.png",
          context: `${dir.src}/`,
          noErrorOnMissing: true,
        },
        {
          from: "*.icon",
          context: `${dir.src}/`,
          noErrorOnMissing: true,
        },
        {
          from: ".htaccess",
          context: `${dir.src}/`,
          noErrorOnMissing: true,
        },
        {
          from: "style.css",
          context: `${dir.src}/`,
          noErrorOnMissing: true,
        },
      ],
    }),

    new StyleLintPlugin({
      fix: true, // 自動修正可能なものは修正
      // failOnError: true, //エラー検出時にビルド中断
    }),
    ...templates,
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};
