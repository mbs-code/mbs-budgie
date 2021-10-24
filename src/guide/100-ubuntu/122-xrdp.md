
# XRDP

簡単に言うとリモートデスクトップ。  
Linux 系には VNC っていうリモート操作用の仕組みが備わっているが、それとは違ってリモートで直接ログインする感じ。  
VNC はログイン中のユーザーを操作する仕組み。  
逆に GUI でログイン中のユーザーに対しては接続できない。  

VNC  が google のリモートデスクトップ  
XRDP が windows のリモートデスクトップ、という認識が近い。  

それもあってかとても軽量で、セキュリティ性も高いのでおすすめ。  



## XRDP 接続の設定

```bash
# インスコ
$ sudo apt install xrdp

# （一応）設定のコピー
$ cd /etc/xrdp
$ sudo cp startwm.sh startwm.sh.copy

# 編集
$ sudo vim startwm.sh

# 設定を適用するための再起動
$ sudo systemctl restart xrdp
```

`sshd_config` の編集箇所は下の通り。  
起動時に budgie desktop を起動するようにする。  

```diff
$ diff -U 0 startwm.sh.copy startwm.sh
--- startwm.sh.copy     2021-10-21 00:34:14.996716937 +0900
+++ startwm.sh  2021-10-21 00:34:35.852593748 +0900
@@ -33 +33 @@
-test -x /etc/X11/Xsession && exec /etc/X11/Xsession
+test -x /etc/X11/Xsession && exec /etc/X11/Xsession /usr/bin/budgie-desktop
```

参考: [Remote Desktop and Ubuntu Budgie 19.04](http://www.novofirmus.com/2020/07/27/remote-desktop-and-ubuntu-budgie-19-04/)



## RDP 接続を行う

Windows の場合、 `リモート デスクトップ接続` アプリを実行する。  


<img :src="$withBase('/assets/win-remote-02.png')" height="240px">  
<img :src="$withBase('/assets/win-remote-03.png')" height="240px">  

`login failed for display 0` ってでてきたらパスワードが違う系。  
他のエラーならそもそも接続できないと思われ。  


:::warning
日本語の windows から接続するとほぼ 100% で JIS キーボードと認識されます。  
キーボードレイアウトを USKEY にしていても無駄です。；；  

色々対処法があるようですが、接続時に IME を英語にするやり方がシンプルで楽でした。  
RDP は接続時に環境の言語情報を送るので、英語にしておくと入力を US キーボードとして認識してくれます。  
**接続時だけでOK** です。  

<img :src="$withBase('/assets/xrdp-01.png')" height="240px">  
<img :src="$withBase('/assets/xrdp-02.png')" height="240px">  

Windows 10 デフォルトの切り替えショートカットは `Alt + Ctrl` です。  

（これで2日は持ってかれた！！！！！）

参考: [xrdpでクライアントのキーボード種別を認識させる方法](https://tamapoco.com/archives/6260)  
参考: [XRDP で macOS から Ubuntu に接続したときにキーボードを US 配列で認識させる](https://ez-net.jp/article/36/iuQFADZB/cpjF6tqaBv7b/)  

参考: [Windows 10 Alt \+ Shift で IME の入力言語の切り替えを無効にする](https://www.tipsfound.com/windows10/12008)  
:::
