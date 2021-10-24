(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{393:function(s,e,t){"use strict";t.r(e);var a=t(50),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"bash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[s._v("#")]),s._v(" bash")]),s._v(" "),t("p",[s._v("開発者の命。"),t("br"),s._v("\nbash シェルを使いやすいように設定する。")]),s._v(" "),t("h2",{attrs:{id:"bashrc-の設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bashrc-の設定"}},[s._v("#")]),s._v(" .bashrc の設定")]),s._v(" "),t("p",[t("code",[s._v(".bashrc")]),s._v(" にシェルの設定を追加する。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# （一応）設定のコピー")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .bashrc .bashrc.copy\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 編集")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" .bashrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 設定を適用する")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .bashrc\n")])])]),t("p",[t("code",[s._v(".bashrc")]),s._v(" は以下のように変更した。")]),s._v(" "),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token coord"}},[s._v("--- .bashrc.copy        2021-10-22 22:05:38.282716481 +0900")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token coord"}},[s._v("+++ .bashrc     2021-10-22 23:02:09.275169060 +0900")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token coord"}},[s._v("@@ -119,0 +120,11 @@")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("# ディレクトリ全表示\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("alias ll='ls -al'\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("# open コマンド置き換え\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("alias open='xdg-open'\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("# bash history\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("export HISTSIZE=50000\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("export HISTFILESIZE=50000\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[s._v("export HISTCONTROL=ignoredups\n")])])])])]),t("p",[s._v("// TODO: rm -i と LC 系やる")]),s._v(" "),t("p",[s._v("参考: "),t("a",{attrs:{href:"https://pgmemo.tokyo/data/archives/95.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("unixのシェル( bash )の便利な設定(1文字ショートカットとヒストリ)。gitブランチ表示｜プログラムメモ"),t("OutboundLink")],1),t("br"),s._v("\n参考: "),t("a",{attrs:{href:"http://bashalog.c-brains.jp/11/07/08-184205.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("[linux][bash] これぐらい書いとかないと仕事にならない .bashrc 記述例 | バシャログ。"),t("OutboundLink")],1),t("br"),s._v("\n参考: "),t("a",{attrs:{href:"https://matsuoshi.hatenablog.com/entry/2019/02/13/122347",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu でも Mac の open コマンドみたいなのを使いたい - モノラルログ"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[t("code",[s._v(".bashrc")]),s._v(" はシェルを起動するたびに、"),t("code",[s._v(".profile")]),s._v(" は初回ログイン時に読み込まれるらしい。"),t("br"),s._v(" "),t("code",[s._v(".profile")]),s._v(" 内で "),t("code",[s._v(".bashrc")]),s._v(" を呼び出すので、とりあえず "),t("code",[s._v(".bashrc")]),s._v(" に追記すれば正解。"),t("br"),s._v("\n（環境変数 "),t("code",[s._v("export")]),s._v(" 系は "),t("code",[s._v(".profile")]),s._v(" が良いらしいけど、shellに関してしか設定しないし...。）")]),s._v(" "),t("p",[s._v("適用順番は "),t("code",[s._v(".profile")]),s._v(" -> "),t("code",[s._v(".bashrc")])]),s._v(" "),t("p",[s._v("参考: "),t("a",{attrs:{href:"https://oxynotes.com/?p=5418",target:"_blank",rel:"noopener noreferrer"}},[s._v("ユーザーの環境変数を設定するbashの設定ファイルと、カスタムプロンプトについて | OXY NOTES"),t("OutboundLink")],1),t("br"),s._v("\n参考: "),t("a",{attrs:{href:"https://blog1.mammb.com/entry/2019/12/01/090000",target:"_blank",rel:"noopener noreferrer"}},[s._v("bash の初期化ファイル .profile, .bashrc, .bash_profile の使い分けと管理方針 - A Memorandum"),t("OutboundLink")],1)]),s._v(" "),t("hr"),s._v(" "),t("p",[t("code",[s._v("ubuntu Budgie 20.04.3 LTS")]),s._v(" だと以下のファイルがあった。")]),s._v(" "),t("ul",[t("li",[s._v(".bash_history")]),s._v(" "),t("li",[s._v(".profile")]),s._v(" "),t("li",[s._v(".bashrc")]),s._v(" "),t("li",[s._v(".bash_logout")])]),s._v(" "),t("p",[s._v("ubuntu は "),t("code",[s._v(".profile")]),s._v(" 系らしい。"),t("br"),s._v("\n今まで centOS が多かったからこういう差異が楽しい。"),t("br"),s._v("\nちなみに "),t("code",[s._v(".bash_profile")]),s._v(" を作成すると、そっちが優先して読み込まれて "),t("code",[s._v(".profile")]),s._v(" は無視されるので注意！")]),s._v(" "),t("p",[s._v("参考: "),t("a",{attrs:{href:"https://askubuntu.com/questions/510709/i-cannot-find-bash-profile-in-ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v("bash - I cannot find .bash_profile in ubuntu - Ask Ubuntu"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);