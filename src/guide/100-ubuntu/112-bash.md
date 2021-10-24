
# bash

開発者の命。  
bash シェルを使いやすいように設定する。  



## .bashrc の設定

`.bashrc` にシェルの設定を追加する。  

```bash
# （一応）設定のコピー
$ cd ~
$ cp .bashrc .bashrc.copy

# 編集
$ vim .bashrc

# 設定を適用する
$ source .bashrc
```

`.bashrc` は以下のように変更した。  

```diff
--- .bashrc.copy        2021-10-22 22:05:38.282716481 +0900
+++ .bashrc     2021-10-22 23:02:09.275169060 +0900
@@ -119,0 +120,11 @@
+# ディレクトリ全表示
+alias ll='ls -al'
+
+# open コマンド置き換え
+alias open='xdg-open'
+
+# bash history
+export HISTSIZE=50000
+export HISTFILESIZE=50000
+export HISTCONTROL=ignoredups
```

// TODO: rm -i と LC 系やる  

参考: [unixのシェル\( bash \)の便利な設定\(1文字ショートカットとヒストリ\)。gitブランチ表示｜プログラムメモ](https://pgmemo.tokyo/data/archives/95.html)  
参考: [\[linux\]\[bash\] これぐらい書いとかないと仕事にならない \.bashrc 記述例 \| バシャログ。](http://bashalog.c-brains.jp/11/07/08-184205.php)  
参考: [Ubuntu でも Mac の open コマンドみたいなのを使いたい \- モノラルログ](https://matsuoshi.hatenablog.com/entry/2019/02/13/122347)  

::: tip
`.bashrc` はシェルを起動するたびに、`.profile` は初回ログイン時に読み込まれるらしい。  
`.profile` 内で `.bashrc` を呼び出すので、とりあえず `.bashrc` に追記すれば正解。  
（環境変数 `export` 系は `.profile` が良いらしいけど、shellに関してしか設定しないし...。）  

適用順番は `.profile` -> `.bashrc`  

参考: [ユーザーの環境変数を設定するbashの設定ファイルと、カスタムプロンプトについて \| OXY NOTES](https://oxynotes.com/?p=5418)  
参考: [bash の初期化ファイル \.profile, \.bashrc, \.bash\_profile の使い分けと管理方針 \- A Memorandum](https://blog1.mammb.com/entry/2019/12/01/090000)  

----

`ubuntu Budgie 20.04.3 LTS` だと以下のファイルがあった。  

- .bash_history
- .profile
- .bashrc
- .bash_logout

ubuntu は `.profile` 系らしい。  
今まで centOS が多かったからこういう差異が楽しい。  
ちなみに `.bash_profile` を作成すると、そっちが優先して読み込まれて `.profile` は無視されるので注意！  

参考: [bash \- I cannot find \.bash\_profile in ubuntu \- Ask Ubuntu](https://askubuntu.com/questions/510709/i-cannot-find-bash-profile-in-ubuntu)
:::
