
# アカウント作成

普段使い用のアカウントを作成する。  
初期ユーザーだけで使ってもいいが、設定をミスったときや `xrdp` を使用した際に同時ログインができないといった
障壁にぶつかりかねないので、2つあったほうが後々便利な気がする。  



## ユーザー作成

コマンドでユーザーを作成する。  

```bash
# アカウント作成
$ sudo adduser <ユーザー名>
=> パスワードを入力
=> 追加情報は入力の必要無し
```

参考: [Ubuntu 20\.04 : 初期設定 インストールと設定 : Server World](https://www.server-world.info/query?os=Ubuntu_20.04&p=initial_conf)  



## sudo グループに追加

作成したユーザーで `sudo` コマンドを使えるようにする。  


```bash
# グループ確認
$ sudo visudo
=> nano の閉じ方は Ctrl Shift X
=> vim の閉じ方は esc => :q

# アカウントで sudo を使えるようにする
$ sudo usermod -G sudo <ユーザー名>

# ログインしてみて管理者のみの visudo を実行してみる
$ sudo login
=> <ユーザー名>入力
$ sudo visudo
```

::: tip
記憶だと `wheel` ってグループだと思ってたけど、これは CentOS 仕様らしい。  
ちなみに big wheel (大物) が語源らしい。  
`sudo` のほうが分かりやすいよね。  

参考: [wheel \- セキュリティ](https://kaworu.jpn.org/security/wheel)  

また `visudo` を見てみると `admin` と `sudo` というグループがあった。  
この `admin` は後方互換性で残っているらしく、 Ubuntu 12.04LTS 以降は無視でOK。  

```bash
# visudo
# User privilege specification
root    ALL=(ALL:ALL) ALL

# Members of the admin group may gain root privileges
%admin ALL=(ALL) ALL

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

参考: [permissions \- What is the difference between the 'sudo' and 'admin' group? \- Ask Ubuntu](https://askubuntu.com/questions/43317/what-is-the-difference-between-the-sudo-and-admin-group)  

ちなみにこれの読み方は `<誰が> <どのホストで>=(<誰として>) <何ができるか>` という感じらしい。  
`%sudo   ALL=(ALL:ALL) ALL` を解読すると、

- %sudo: sudo というグループは
- ALL: どこでも
- (ALL:ALL): どのユーザーでも、どのグループでも
- ALL: なんでもできる

という要するに管理者って意味ですね。  
これはめっちゃ細く設定できるので、サーバーや制限ユーザー作成時にはちゃんと設定すべしな気がした。  

参考: [sudoers覚え書き \- Qiita](https://qiita.com/progrhyme/items/6f936033b9d23efb1741)  
:::
