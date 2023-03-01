const el = (selector, element = document) => element.querySelectorAll(selector);

const [elParagraph] = el(".paragraph");
const [elStyle] = el("#style");

const sourceText = `/* 大家好! 👋
 * 我是京东物流-技术发展部-中台技术部-技术平台组的JD star 🚀
 * 武林秀
 * 接下来我给大家画一个快递小鸽
 * 首先准备一个背景 */
.figure {
  position: relative;
  height: 50vh;
  background: #62656c;
}
/* 画一个圈圈 🌑 */
.head {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: #7c8499;
  border: 4px solid #000;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
/* 给小鸽画个帽子 🧢 */
.capWrapper {
  position: absolute;
  top: -5%;
  left: 50%;
  width: 45px;
  height: 25px;
  background: #e23232;
  border: 4px solid #000;
  border-radius: 30px 30px 10px 10px;
  transform: translate(-50%, -50%);

}
/* 帽子上有个尖尖 ✐ */
.capU {
  position: absolute;
  top: -36%;
  left: 50%;
  width: 3px;
  height: 6px;
  background: #000;
  border-radius: 50%;
  transform: translateX(-50%);
}
/* 左边画一瓣 👈 */
.capL {
  position: absolute;
  bottom: -5%;
  left: 20%;
  width: 40px;
  height: 22px;
  background: transparent;
  border: 4px solid #000;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-radius: 20px 0 0 0;
}
/* 右边画一瓣 👉 */
.capR {
  position: absolute;
  bottom: -5%;
  right: 20%;
  width: 40px;
  height: 22px;
  background: transparent;
  border: 4px solid #000;
  border-top: none;
  border-left: none;
  border-bottom: none;
  border-radius: 0 20px 0 0;
}
/* 还有一个帽檐儿 🤠*/
.capD {
  position: absolute;
  bottom: -20%;
  left: -40%;
  width: 15px;
  height: 5px;
  background: #000;
  border-radius: 50% 0 0 50%;
  transform: rotate(-5deg);
}
/* 接着画小鸽的眼睛 👀 */
.eyeL {
  position: absolute;
  top: 30%;
  left: 20%;
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
}
/* 眯起来 😄 */
.eyeR1 {
  position: absolute;
  top: 31%;
  left: 38%;
  width: 10px;
  height: 3px;
  background: #000;
  border-radius: 4px;
  transform: rotate(-30deg);
}
.eyeR2 {
  position: absolute;
  top: 34.5%;
  left: 38%;
  display: block;
  width: 10px;
  height: 3px;
  content: "";
  background: #000;
  border-radius: 4px;
  transform: rotate(20deg);
}
/* 小小的眉毛 😊 */
.eyeLup {
  position: absolute;
  top: 23%;
  left: 23%;
  width: 7px;
  height: 3px;
  background: #000;
  border-radius: 4px;
  transform: rotate(30deg);
}
.eyeRup {
  position: absolute;
  top: 23%;
  left: 38%;
  width: 7px;
  height: 3px;
  background: #000;
  border-radius: 4px;
  transform: rotate(-30deg);
}
/* 然后画小鸽的嘴巴 👄 */
.mouthU {
  position: absolute;
  top: 40%;
  left: 18%;
  width: 30px;
  height: 10px;
  background: #ffa2a6;
  border: 4px solid #000;
  border-radius: 50%/100% 100% 0 0;
  border-bottom: none;
}
.mouthM {
  position: absolute;
  top: 37%;
  left: 19.5%;
  z-index: 1;
  width: 27px;
  height: 20px;
  background: transparent;
  border: 4px solid #000;
  border-radius: 15px/11px;
  border-top: none;
  border-left: none;
  border-right: none;
}
.mouthD {
  position: absolute;
  top: 50%;
  left: 18%;
  z-index: -1;
  width: 30px;
  height: 20px;
  background: #ffa2a6;
  border: 4px solid #000;
  border-radius: 50%/0 0 100% 100%;
  border-top: none;
}
/* 点两个鼻孔 👃 */
.mouthM::before {
  position: absolute;
  top: 50%;
  left: 35%;
  display: block;
  width: 3px;
  height: 3px;
  content: "";
  background: #000;
  border-radius: 50%;
}
.mouthM::after {
  position: absolute;
  top: 50%;
  left: 55%;
  display: block;
  width: 3px;
  height: 3px;
  content: "";
  background: #000;
  border-radius: 50%;
}
/* 优雅又不失俏皮的舌头 🤪 */
.tough {
  position: absolute;
  bottom: -5%;
  right: 10%;
  width: 8px;
  height: 6px;
  background: #e23232;
  border: 2px solid #000;
  border-radius: 80% 50% /100% 100% 0 0;
}
.tough::before {
  position: absolute;
  top: 50%;
  left: 40%;
  display: block;
  width: 2px;
  height: 4px;
  content: "";
  background: #000;
  border-radius: 50%;
}
/* 么么哒 💖*/
.heartWrapper{
  position: absolute;
  top: 30%;
  right: 20%;
  transform: rotate(20deg);
  /* border: 1px solid #000; */
}
.heart {
  width: 8px;
  height: 8px;
  background: #ffa2a6;
  border: 2px solid #000;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
}
.heartL {
  position: absolute;
  top: -50%;
  left: -45%;
  width: 8px;
  height: 9px;
  background: #ffa2a6;
  border: 2px solid #000;
  border-radius: 50% 50% 0 0;
  border-bottom: 2px solid #ffa2a6;
  transform: rotate(-45deg);
}
.heartM {
  position: absolute;
  top: -18%;
  left: 50%;
  width: 2px;
  height: 2px;
  background: #000;
  transform: translate(-50%) rotate(45deg);
}
.heartR {
  position: absolute;
  top: -50%;
  right: -45%;
  width: 8px;
  height: 9px;
  background: #ffa2a6;
  border: 2px solid #000;
  border-radius: 50% 50% 0 0;
  border-bottom: 2px solid #ffa2a6;
  transform: rotate(45deg);
}
/* 一幅快递小鸽送给大家~
 * 我是京东物流-技术发展部-中台技术部-技术平台组的
 * 武林秀
 * 以梦为码，不负韶华
 * 祝大家1024快乐 👍 */
 `;

let paragraphText = "";
let index = 0;

const step = () => {
  setTimeout(() => {
    if (index < sourceText.length) {
      if (sourceText[index] === "\n") {
        paragraphText += "<br>";
      } else if (sourceText[index] === " ") {
        paragraphText += "&nbsp;";
      } else {
        paragraphText += sourceText[index];
      }
      elParagraph.innerHTML = paragraphText;
      window.scroll({
        top: 9999,
        behavior: "smooth",
      });
      elParagraph.scroll({
        top: 9999,
        behavior: "smooth",
      });
      elStyle.innerHTML = sourceText.slice(0, index);
      index += 1;
      step();
    }
  }, 10);
};

step();
