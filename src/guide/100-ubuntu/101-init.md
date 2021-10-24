
# アップデートとエディタ

これをしないと始まらない。  

参考: [Ubuntu のアップデート方法 \- Qiita](https://qiita.com/masoo/items/8ebc51a6a9f32417d4a3)  

```bash
# アップデート確認
$ sudo apt update

# パッケージをアップデートする
$ sudo apt dist-upgrade

# アップデートで必要なくなったパッケージの削除
$ sudo apt autoremove
```

私の宗派は `Vim` なのでついでにインストール。  
（どうせ設定編集でしか使わないし...矢印つかえるし...）  

```bash
# エディタのインストール
$ sudo apt install vim
```
