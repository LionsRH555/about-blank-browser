var tabs = [];
var history = [];
var currenttab = 0;
var totaltabs = tabs.length - 1;
var tabs2 = document.getElementByClassName("tab");
function newtab() {
  tabs.push("aboutblanknew");
  totaltabs = tabs.length - 1;
  currenttab = totaltabs;
}
function open(url) {
  tabs[currenttab] = url;
  
}
