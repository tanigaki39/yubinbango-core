"use strict";
var CACHE = [],
  YubinBango;
!(function (t) {
  var i = (function () {
    function t(t, i) {
      if (
        (void 0 === t && (t = ""),
        (this.URL = "https://yubinbango.github.io/yubinbango-data/data"),
        (this.REGION = [
          null,
          "北海道",
          "青森県",
          "岩手県",
          "宮城県",
          "秋田県",
          "山形県",
          "福島県",
          "茨城県",
          "栃木県",
          "群馬県",
          "埼玉県",
          "千葉県",
          "東京都",
          "神奈川県",
          "新潟県",
          "富山県",
          "石川県",
          "福井県",
          "山梨県",
          "長野県",
          "岐阜県",
          "静岡県",
          "愛知県",
          "三重県",
          "滋賀県",
          "京都府",
          "大阪府",
          "兵庫県",
          "奈良県",
          "和歌山県",
          "鳥取県",
          "島根県",
          "岡山県",
          "広島県",
          "山口県",
          "徳島県",
          "香川県",
          "愛媛県",
          "高知県",
          "福岡県",
          "佐賀県",
          "長崎県",
          "熊本県",
          "大分県",
          "宮崎県",
          "鹿児島県",
          "沖縄県",
        ]),
        t)
      ) {
        var r = t.replace(/[０-９]/g, function (t) {
            return String.fromCharCode(t.charCodeAt(0) - 65248);
          }),
          e = r.match(/\d/g),
          o = e.join(""),
          n = this.chk7(o);
        n ? this.getAddr(n, i) : i(this.addrDic());
      }
    }
    return (
      (t.prototype.chk7 = function (t) {
        return 7 === t.length ? t : void 0;
      }),
      (t.prototype.addrDic = function (t, i, n, r, e) {
        return (
          void 0 === t && (t = ""),
          void 0 === i && (i = ""),
          void 0 === n && (n = ""),
          void 0 === r && (r = ""),
          void 0 === e && (e = ""),
          { region_id: t, region: i, locality: n, street: r, extended: e }
        );
      }),
      (t.prototype.selectAddr = function (t) {
        return t && t[0] && t[1]
          ? this.addrDic(t[0], this.REGION[t[0]], t[1], t[2], t[3])
          : this.addrDic();
      }),
      (t.prototype.jsonp = function (i, n) {
        window.$yubin = function (t) {
          return n(t);
        };
        var t = document.createElement("script");
        t.setAttribute("type", "text/javascript"),
          t.setAttribute("charset", "UTF-8"),
          t.setAttribute("src", i),
          document.head.appendChild(t);
      }),
      (t.prototype.getAddr = function (i, n) {
        var r = this,
          t = i.substr(0, 3);
        return t in CACHE && i in CACHE[t]
          ? n(this.selectAddr(CACHE[t][i]))
          : void this.jsonp(this.URL + "/" + t + ".js", function (e) {
              return (CACHE[t] = e), n(r.selectAddr(e[i]));
            });
      }),
      t
    );
  })();
  t.Core = i;
})(YubinBango || (YubinBango = {})),
  (module.exports = YubinBango);
//# sourceMappingURL=./yubinbango-core.js.map
