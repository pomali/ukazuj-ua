if(!self.define){let e,i={};const o=(o,d)=>(o=new URL(o+".js",d).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(d,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const c=e=>o(e,a),n={module:{uri:a},exports:r,require:c};i[a]=Promise.all(d.map((e=>n[e]||c(e)))).then((e=>(l(...e),r)))}}define(["./workbox-55c4974a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"4f5836c57050af7ec718e4cdf501c9e5"},{url:"manifest.webmanifest",revision:"7295dda5f06c3a56f5e08677c0002e42"},{url:"README/index.html",revision:"629a1bfe7d8861d492e85da5d3a59562"},{url:"slovo/ano/index.html",revision:"f51b7e080b62ccd3ef82eb66ffbac903"},{url:"slovo/autobus/index.html",revision:"8d294192cab9b296d87eb836d7a1252d"},{url:"slovo/cez/index.html",revision:"3fc383e858218d78c6a0befe235aa00b"},{url:"slovo/chlapec/index.html",revision:"475519e51252a5c42fc0ff961061e495"},{url:"slovo/chodba/index.html",revision:"4b3fe0d235d0adb7558e3e5562e35f82"},{url:"slovo/cislo/index.html",revision:"c9dbe2e94e13251eaa79af2d01a3b536"},{url:"slovo/dakujem/index.html",revision:"2971d7836977cc987a4948163dfd9f38"},{url:"slovo/den/index.html",revision:"10d74f49d2a25e53e27655cef919346a"},{url:"slovo/deti/index.html",revision:"08a7c3cf4dd44c1b3f0722f9b541a1dc"},{url:"slovo/dievca/index.html",revision:"a7aa381bb9e3aa1499e4a9a643d16655"},{url:"slovo/dnes/index.html",revision:"5d56971e2bc6aab57876e3525a0d440e"},{url:"slovo/dnu/index.html",revision:"8807bf1492a022f993a0ffd7427c34be"},{url:"slovo/dobry/index.html",revision:"d8ddb076d6bd8c8f3002e697654243d2"},{url:"slovo/dom/index.html",revision:"84316c2c825351ba9d39919eb27c5bf8"},{url:"slovo/domaca-uloha/index.html",revision:"d39996886df75a648f6775ec556efec0"},{url:"slovo/dvere/index.html",revision:"4a2cc6737bfabe6be4a23b880a75f9f2"},{url:"slovo/dvor/index.html",revision:"8a667ccb73661a5584aeeff05a56c7e2"},{url:"slovo/elektricka/index.html",revision:"f9903f14e358049503887da6a256de2c"},{url:"slovo/formular/index.html",revision:"a1092df88a26ff605422cff239355dd4"},{url:"slovo/hodina-(cas)/index.html",revision:"4016b3cf00c01e753b5138c256b21702"},{url:"slovo/hodina-(vyucovacia)/index.html",revision:"d80980f0e20e10223bcfd86aedd52711"},{url:"slovo/jazyk/index.html",revision:"993853c9aa5d22d4c127fad086c667cf"},{url:"slovo/lekar/index.html",revision:"81a14664614f1da59274d65b29d1ad8b"},{url:"slovo/lyzica/index.html",revision:"0515b4bce4e918c8799cf60687eee446"},{url:"slovo/mesiac/index.html",revision:"dd51279c0a65c86b4b4a4710daed6509"},{url:"slovo/miestnost/index.html",revision:"ccc58dbb95c9f2a01618a7fc66da315e"},{url:"slovo/minuta/index.html",revision:"fd007cc7267856a09e4625f76badcc7f"},{url:"slovo/nad/index.html",revision:"665175e2159c47f605818ac43d917147"},{url:"slovo/nedela/index.html",revision:"0029f5cf646dec34456f0532ee6705d4"},{url:"slovo/nemocnica/index.html",revision:"ee592a33673ce93eb15823a39fe63a61"},{url:"slovo/neviem/index.html",revision:"2964655a2116e62fd1252020b8f793c0"},{url:"slovo/nie/index.html",revision:"bcf7f16b4796a7e32e8d49591f708113"},{url:"slovo/noz/index.html",revision:"1ad0746ba33cb55f9d10baf14182af01"},{url:"slovo/obed/index.html",revision:"527dc458cc130db9b9cec5afef9d2427"},{url:"slovo/oblecenie/index.html",revision:"ac48a7ed780eb58b2fc8ed8a658d63f1"},{url:"slovo/pani-ucitelka/index.html",revision:"c8674d7daeeefba73c268350bfd9cd34"},{url:"slovo/pani-vychovavatelka/index.html",revision:"f01b31d5158c45aa739bd300a8c04943"},{url:"slovo/papuce/index.html",revision:"0e69ecd093d56b16acf5b20bbe48c4ff"},{url:"slovo/peniaze/index.html",revision:"63b69eeb40e1d95f705d9e2b985fa4ba"},{url:"slovo/pero/index.html",revision:"a43f5203534bf9428508fd4763541d45"},{url:"slovo/piatok/index.html",revision:"1ec98ab03d943ecff1d055ef1a8de51a"},{url:"slovo/po/index.html",revision:"05400ad72d13106f261bb0d5119813a6"},{url:"slovo/pod/index.html",revision:"9b000bfd688b49282ae13ce97d985793"},{url:"slovo/policia/index.html",revision:"edf0088348fb20a4291766fb259dbf3d"},{url:"slovo/pondelok/index.html",revision:"2af6f2b0f5162187ee059c93455c2c05"},{url:"slovo/pred/index.html",revision:"65d19e805e0fdc51bf68601fa9b50281"},{url:"slovo/preukaz/index.html",revision:"64ab5ac40657be57f0d70e7ddd483c5f"},{url:"slovo/prosim/index.html",revision:"02e3bb5033aaa1af69667e3ac20f167f"},{url:"slovo/ruky/index.html",revision:"a0c35edcb2dda1698d24c0863892287d"},{url:"slovo/skola/index.html",revision:"d7c59b39630292f9ac6d23083d5f1ce4"},{url:"slovo/sobota/index.html",revision:"ee936674a6422abd921cf103e3011694"},{url:"slovo/spoluziaci/index.html",revision:"992d034b109786105d3131f6bc009c65"},{url:"slovo/streda/index.html",revision:"3704dec6f6859d0d175be5f0250d7e44"},{url:"slovo/stvrtok/index.html",revision:"cf33fa94987bf90a7473414d38fe2b53"},{url:"slovo/tanier/index.html",revision:"868c62e1ae387501d87fd99e66c6383d"},{url:"slovo/telefon/index.html",revision:"4592b899f9abb2251bcb85ee5027b03a"},{url:"slovo/teplo/index.html",revision:"2cfdb9570bf4870f6303938c1b43a98a"},{url:"slovo/teraz/index.html",revision:"daaecd068d3524c079a1e06871d69b10"},{url:"slovo/trieda/index.html",revision:"4643df31a810ba2a98dfcc815f07f7d0"},{url:"slovo/tyzden/index.html",revision:"83c7cee4493895a7df1bc53005ce608d"},{url:"slovo/utorok/index.html",revision:"36dd5d84055b06a3cad90276a8c8aa86"},{url:"slovo/vcera/index.html",revision:"e2da18aaadad07272b6a673a039c1e95"},{url:"slovo/von/index.html",revision:"3829d7a17be3da91ee93e9d6aceb81d0"},{url:"slovo/vydlicka/index.html",revision:"6c683de38e2b5de36310dbd37f486c5e"},{url:"slovo/zachod/index.html",revision:"097125e61733d5a8860ca3025524a7c5"},{url:"slovo/zajtra/index.html",revision:"3b74ffe258816e3e01886ab9c6170940"},{url:"slovo/zima/index.html",revision:"7b0f392d51fdf11bd7461fb48616115d"},{url:"slovo/zly/index.html",revision:"dbcb7d524cdf87b3f1c54847a6cfdb58"},{url:"slovo/zosit/index.html",revision:"d99bd165c9262879936ecec882d6c36f"},{url:"static/logo/uua-logo.svg",revision:"335ee29b874d7f54d6dd4f1d79f24a12"},{url:"static/print.css",revision:"327e2bf3bdc1cade06ae66b1462a4a02"},{url:"static/Roboto/roboto-v29-latin-ext_latin_cyrillic-regular.eot",revision:"ba0e3e8b84dd99edca37fb3823d77a6a"},{url:"static/Roboto/roboto-v29-latin-ext_latin_cyrillic-regular.svg",revision:"8681f434273fd6a267b1a16a035c5f79"},{url:"static/Roboto/roboto-v29-latin-ext_latin_cyrillic-regular.ttf",revision:"cbe4546ab35257f692cea2336aa05aa4"},{url:"static/Roboto/roboto-v29-latin-ext_latin_cyrillic-regular.woff",revision:"73f26bf98a715ecab4d2287ff3a02ad0"},{url:"static/Roboto/roboto-v29-latin-ext_latin_cyrillic-regular.woff2",revision:"184a2a669cf798f8d80bcfba041c3ecf"},{url:"static/screen.css",revision:"d1c70791e8017c871d9023bd6cda9273"},{url:"static/script.js",revision:"b02a6ab695225917b36a37fb557c06f7"},{url:"static/style.css",revision:"14538f8d8dec642935af48e88d8393ab"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/,/^source/]})}));
//# sourceMappingURL=sw.js.map
