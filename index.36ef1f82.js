!function(){var e,r={dates:[{img:"https://i.ibb.co/fMG5ZP4/brooke-lark-8be-TH4-Vkh-LI-unsplash-1.jpg",description:"IceCream"},{img:"https://i.ibb.co/1JFGSFF/courtney-cook-QYs-Rx-RPygw-U-unsplash-2.jpg",description:"IceCream"},{img:"https://i.ibb.co/PFc8XbL/unsplash-s-KM8-RK2-C-YI.jpg",description:"IceCream"}],current:0},t={slider:document.querySelector(".gallery__slider")},i=function(){var e,i,c,n;e=r.dates[r.current],i=e.img,c=e.description,(n=document.createElement("img")).setAttribute("src",i),n.setAttribute("alt",c),n.classList.add("gallery__slider-img"),t.slider.replaceChildren(),t.slider.append(n)},c=function(){clearInterval(e),i(),r.current+=1,e=setInterval((function(){r.current===r.dates.length?(r.current=0,clearInterval(e),c()):(i(),r.current+=1)}),8e3)};c()}();
//# sourceMappingURL=index.36ef1f82.js.map