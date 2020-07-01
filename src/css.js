const string = `
.head .ear {
  border: 1px solid #ffd400;
  border-radius: 50%;
  background-color: #ffd400;
  
}
.head .left {
  left: 4px;
}
.head .right {
  right: 4px;
}
.head .face {
  border: 1px solid #ffd400;
  background-color: #ffd400;
  position: absolute;
  top: 14px;
  width: 89px;
  height: 76px;
  border-radius: 60% / 60% 60% 40% 40%;
  z-index: 3;
}
.face_up {
  width: 89px;
  position: absolute;
  margin-top: -1px;
  margin-left: -1px;
  margin-right: -1px;
  border-bottom: 49px solid #ffd400;
  border-left: 19px solid #c3620d;
  border-right: 19px solid #c3620d;
  border-radius: 0px 20 20px;
  z-index: 1px;
}

.eyebrow {
  position: absolute;
  top: 10px;
  width: 11px;
  height: 6px;
  border-top: 2px solid black;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top-left-radius:40%;
  border-top-right-radius:40%
}
.eyebrow-left {
  left: 2px;
  transform: rotate(-12deg);

}
.eyebrow-right {
  right: 2px;
  transform: rotate(12deg);

}

.eye {
  position: absolute;
  top: 20px;
  border: 1px solid black;
  background-color: black;
  width: 6px;
  height: 7px;
  border-radius: 60%;
 
  z-index:6
}
.eye-left {
  left: 5px;
}
.eye-right {
  right: 5px;
}
.nose {
  border: 1px solid black;
  background: black;
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: -5px;
  width: 10px;
  height: 6px;
  border-radius: 3px 3px 10px 10px;
  z-index: 6;
}
.zhe {
  width: 32px;
  height: 22px;
  background-color: #ffd400;
  position: absolute;
  top: 35px;
  left: 54%;
  margin-left: -20px;
  border: 1px solid #ffd400;
  z-index: 5;
}
.mouth {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 37px;
  left: 56%;
  margin-left: -20px;
  border: 1px solid black;
  border-radius: 50%;
}
.eyebrowWrapper{
  animation:move-eyebrow 6s ease infinite;
  transition:all 6s;
}
.eye {
  animation: move-eye 3s ease infinite;
  transition: all 3s;
}
.body .belly {
  position: absolute;
  top: 70px;
  left: px;
  background-color: #ffd400;
  height: 96px;
  width: 90px;
  border-radius: 70% 70% 80% 80%;
  z-index: 2;
}
.arm {
  background-color: #ffd400;
}
.arm-left {
  left: -10px;
  transform: rotate(40deg);
}
.arm-right {
  right: -10px;
  transform: rotate(-40deg);
}
.clothes{
  position: absolute;
  top: 69px;
  border-left: 19px solid transparent;
  border-right: 19px solid transparent;
}
.clothes-down {
  left: -7px;
  width: 104px;
  border-bottom: 52px solid red;
  z-index: 1;
}
.clothes-up {
  width: 102px;
  left: -6px;
  border-bottom: 49px solid red;
  z-index: 2;
}
.sleeve {
  background-color: red;
  width: 21px;
  height: 30px;
}
.arm-left > .left {
  transform: translateX(-2px);
}
.leg {
  width: 22px;
  height: 40px;
  position: absolute;
  bottom: 36px;
  border: 1px solid #ffd400;
  background-color: #ffd400;
}
.leg-left {
  left: 8px;
}
.leg-right {
  right: 8px;
}
.foot {
  width: 35px;
  height: 20px;
  background-color: #ffd400;
  position: absolute;
  bottom: 18px;
}
.foot-left {
  left: 8px;
  border-radius: 10px 40px;
}
.foot-right {
  right: 8px;
  border-radius: 40px 10px;
}
.bear{
  border:none;
}
`;
export default string;
