# xrdp

linux は様々な手法でリモート接続ができる。  
その中でも直接GUIでリモートログインするのが xrdp だ。  
これは通常のRDPより高速である。  

## いんすこ

### インストール

```
$ sudo apt install xrdp

$ xrdp -V
xrdp 0.9.12
```

### コンフィグを書き換える

ここは各Linux, フレーバーで異なるので調べるのが吉。  
当環境は Ubuntu Budgie なのでこんな感じで。  

```git
# /etc/xrdp/
-: test -x /etc/X11/Xsession && exec /etc/X11/Xsession
+: test -x /etc/X11/Xsession && exec /etc/X11/Xsession /usr/bin/budgie-desktop
```

参考: [Remote Desktop and Ubuntu Budgie 19.04](http://www.novofirmus.com/2020/07/27/remote-desktop-and-ubuntu-budgie-19-04/)

コンフィグを書き換える


キーボード設定変更


おけまる！
