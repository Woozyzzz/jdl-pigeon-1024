console.log("hi");
let html = document.querySelector("p");
let style = document.querySelector("#style");
let string = `/* 大家好! 👋
 * 我是京东物流-技术发展部-中台技术部-技术平台组的JD star 🚀
 * 武林秀
 * 接下来我给大家画一个快递小鸽
 * 首先准备一个背景 */
figure {
  height: 50vh;
  background: #62656c;
  position: relative;
}
/* 画一个圈圈 🌑 */
.head {
  width: 100px;
  height: 100px;
  background: #7c8499;
  border: 4px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* 给小鸽画个帽子 🧢 */
.capWrapper {
  width: 45px;
  height: 25px;
  background: #e23232;
  border: 4px solid #000;
  border-radius: 30px 30px 10px 10px;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* 帽子上有个尖尖 ✐ */
.capU {
  width: 3px;
  height: 6px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: -36%;
  left: 50%;
  transform: translateX(-50%);
}
/* 左边画一瓣 👈 */
.capL {
  width: 40px;
  height: 22px;
  background: transparent;
  border: 4px solid #000;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-radius: 20px 0 0 0;
  position: absolute;
  bottom: -5%;
  left: 20%;
}
/* 右边画一瓣 👉 */
.capR {
  width: 40px;
  height: 22px;
  background: transparent;
  border: 4px solid #000;
  border-top: none;
  border-left: none;
  border-bottom: none;
  border-radius: 0 20px 0 0;
  position: absolute;
  bottom: -5%;
  right: 20%;
}
/* 还有一个帽檐儿 🤠*/
.capD {
  width: 15px;
  height: 5px;
  background: #000;
  border-radius: 50% 0 0 50%;
  position: absolute;
  bottom: -20%;
  left: -40%;
  transform: rotate(-5deg);
}
/* 接着画小鸽的眼睛 👀 */
.eyeL {
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 20%;
}
/* 眯起来 😄 */
.eyeR1 {
  width: 10px;
  height: 3px;
  background: #000;
  border-radius: 4px;
  position: absolute;
  top: 31%;
  left: 38%;
  transform: rotate(-30deg);
}
.eyeR2 {
  content: "";
  display: block;
  width: 10px;
  height: 3px;
  background: #000;
  border-radius: 4px;
  position: absolute;
  top: 34.5%;
  left: 38%;
  transform: rotate(20deg);
}
/* 小小的眉毛 😊 */
.eyeLup {
  width: 7px;
  height: 3px;
  background: #000;
  border-radius: 4px;
  position: absolute;
  top: 23%;
  left: 23%;
  transform: rotate(30deg);
}
.eyeRup {
  width: 7px;
  height: 3px;
  background: #000;
  border-radius: 4px;
  position: absolute;
  top: 23%;
  left: 38%;
  transform: rotate(-30deg);
}
/* 然后画小鸽的嘴巴 👄 */
.mouthU {
  width: 30px;
  height: 10px;
  background: #ffa2a6;
  border: 4px solid #000;
  border-radius: 50%/100% 100% 0 0;
  border-bottom: none;
  position: absolute;
  top: 40%;
  left: 18%;
}
.mouthM {
  width: 27px;
  height: 20px;
  background: transparent;
  border: 4px solid #000;
  border-radius: 15px/11px;
  border-top: none;
  border-left: none;
  border-right: none;
  position: absolute;
  top: 37%;
  left: 19.5%;
  z-index: 1;
}
.mouthD {
  width: 30px;
  height: 20px;
  background: #ffa2a6;
  border: 4px solid #000;
  border-radius: 50%/0 0 100% 100%;
  border-top: none;
  position: absolute;
  top: 50%;
  left: 18%;
  z-index: -1;
}
/* 点两个鼻孔 👃 */
.mouthM::before {
  content: "";
  display: block;
  width: 3px;
  height: 3px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 35%;
}
.mouthM::after {
  content: "";
  display: block;
  width: 3px;
  height: 3px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 55%;
}
/* 优雅又不失俏皮的舌头 🤪 */
.tough {
  width: 8px;
  height: 6px;
  background: #e23232;
  border: 2px solid #000;
  border-radius: 80% 50% /100% 100% 0 0;
  position: absolute;
  bottom: -5%;
  right: 10%;
}
.tough::before {
  content: "";
  display: block;
  width: 2px;
  height: 4px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 40%;
}
/* 么么哒 💖*/
.heartWrapper{
  /* border: 1px solid #000; */
  position: absolute;
  top: 30%;
  right: 20%;
  transform: rotate(20deg);
}
.heart {
  width: 8px;
  height: 8px;
  background: #ffa2a6;
  border: 2px solid #000;
  transform: rotate(-45deg);
  border-top: none;
  border-right: none;
}
.heartL {
  width: 8px;
  height: 9px;
  background: #ffa2a6;
  border: 2px solid #000;
  border-radius: 50% 50% 0 0;
  border-bottom: 2px solid #ffa2a6;
  transform: rotate(-45deg);
  position: absolute;
  top: -50%;
  left: -45%;
}
.heartM {
  width: 2px;
  height: 2px;
  background: #000;
  transform: rotate(-45deg);
  position: absolute;
  top: -18%;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
}
.heartR {
  width: 8px;
  height: 9px;
  background: #ffa2a6;
  border: 2px solid #000;
  border-radius: 50% 50% 0 0;
  border-bottom: 2px solid #ffa2a6;
  transform: rotate(45deg);
  position: absolute;
  top: -50%;
  right: -45%;
}
/* 一幅快递小鸽送给大家~
 * 我是京东物流-技术发展部-中台技术部-技术平台组的
 * 武林秀
 * 以梦为码，不负韶华
 * 祝大家1024快乐 👍 */


 `;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (n < string.length) {
      if (string[n] === "\n") {
        string2 += "<br>";
      } else if (string[n] === " ") {
        string2 += "&nbsp;";
      } else {
        string2 += string[n];
      }
      html.innerHTML = string2;
      window.scrollTo(0, 9999);
      html.scrollTo(0, 9999);
      style.innerHTML = string.slice(0, n);
      n += 1;
      step();
    }
  }, 20);
};

step();
