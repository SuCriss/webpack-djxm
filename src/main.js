// import _ from 'lodash'
import "./style.css";
import bg from "./bg.png";
import { cube } from "./math";
// import print from './print'
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
async function component() {
    var element = document.createElement("div");
    var btn = document.createElement("button");
    element.classList.add("hello");
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    element.innerHTML=_.join(['hello','webpack!','5 cubed is equal to '+ cube(5)],' ');
    btn.innerHTML = "Click me and check the console";
    //懒加载
    btn.onclick = e=>import(/* webpackChunkName: "print" */ './print').then(module=>{
        var print = module.default;
        print();
    });
    var myBg = new Image();
    myBg.src = bg;
    element.appendChild(btn);
    element.appendChild(myBg);
    return element;
}
component().then(component=>{
    document.body.appendChild(component)
})


if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accept the updated printMe module!");
    document.body.removeChild(ele);
    ele = component();
    document.body.appendChild(ele);
  });
}
