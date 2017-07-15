/**
 * Created by Administrator on 2017/5/26.
 */
var oDiv=document.getElementsByClassName('swiper-container')[0]
var fei=oDiv.getElementsByTagName('img')[0]
function reflshrem() {
    var desw=750,
        winw=document.documentElement.clientWidth,
        result=winw/desw;
    document.documentElement.style.fontSize=result*100+'px'
}
reflshrem();
window.addEventListener('resize',reflshrem);


//初始化swiper
var mySwiper=new Swiper('.swiper-container',{
    loop:true,
    direction:'vertical',
    onTransitionEnd:function (swiper) {
        var slides=swiper.slides,
            curIndex=swiper.activeIndex,
            total=slides.length,
            targetId='page';

        switch (curIndex){
            case 0:
                targetId+=(total-2);
                break;
            case total-1:
                targetId+=1;
                break;
            default:
                targetId+=curIndex;
        }
        [].forEach.call(slides,function (item,index) {
            if (index==curIndex){
                item.id=targetId;
            }
            else {
                item.id=null
            }
        })
    }
});


//music播放暂停
var musicBox=document.getElementById('musicBox');
var audioBox=document.getElementById('audioBox');
window.setTimeout(function () {
    musicBox.style.opacity=1;
    audioBox.play();
    musicBox.className='music musicMove'
},300);
musicBox.onclick=function () {
    if (audioBox.paused){
        audioBox.play();
        musicBox.className='music musicMove'
    }
    else {
        audioBox.pause();
        musicBox.className='music'
    }
};

let q=document.getElementById('q');
let w=document.getElementById('w');
let e=document.getElementById('e');
let r=document.getElementById('r');
let t=document.getElementById('t');
let y=document.getElementById('y');
let u=document.getElementById('u');
let i=document.getElementById('i');



q.onclick=function () {
    mySwiper.slideTo(3)
}
w.onclick=function () {
    mySwiper.slideTo(4)
}
e.onclick=function () {
    mySwiper.slideTo(5)
}
r.onclick=function () {
    mySwiper.slideTo(6)
}
t.onclick=function () {
    mySwiper.slideTo(2)
}
y.onclick=function () {
    mySwiper.slideTo(2)
}
u.onclick=function () {
    mySwiper.slideTo(2)
}
i.onclick=function () {
    mySwiper.slideTo(2)
}