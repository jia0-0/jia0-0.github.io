//scripts for the top
  var searchText=document.getElementById('search_text');
  var phone_img=document.getElementById('shoujiban');
  var erweima_img=phone_img.children[0];
  
  searchText.onfocus=function(){
    if(searchText.value==='请输入关键字搜索'){searchText.value='';}
  }
  searchText.onblur=function(){
    if(searchText.value===''){searchText.value='请输入关键字搜索';}
  }
  
  phone_img.onmouseover=function() {
    if(getClientDimension().width<1380) {
	  erweima_img.style.right=100+'px';
	} else {
	  erweima_img.style.right=-100+'px';
	}
	erweima_img.style.display='block';
  }
  phone_img.onmouseout=function(){
    erweima_img.style.display='none';
  }
  
  function getClientDimension() {
    if (window.innerWidth!==null) {
	  return {width:window.innerWidth, height:window.innerHeight}
	} else if (document.compatMode==='CSS1Compat') {
	  return { width:document.documentElement.clientWidth, height:document.documentElement.clientHeight}
	} else {
	  return { width:document.body.clientWidth, height: document.body.clientHeight}
	}
  }
//the end of scripts for the top

//scripts for the slide section

var currentSlide=0;
var slides=document.querySelectorAll('.slides .slide');
var slideInterval=setInterval(nextSlide,3000);
var slide_control1=document.getElementsByClassName('prev');
var slide_control2=document.getElementsByClassName('next');

for(var i=0; i<4; i++) {
slides[i].onmouseover=function() {
  slide_control1[0].style.display='block';
  slide_control2[0].style.display='block';
  clearInterval(slideInterval);
}
slides[i].onmouseout=function() {
  slide_control1[0].style.display='none';
  slide_control2[0].style.display='none';
  slideInterval=setInterval(nextSlide,3000);
}
}
slide_control1[0].onmouseover=function() {
  slide_control1[0].style.display='block';
  clearInterval(slideInterval);
}
slide_control2[0].onmouseover=function() {
  slide_control2[0].style.display='block';
  clearInterval(slideInterval);
}
slide_control1[0].onclick=function() {
  previousSlide();
}
slide_control2[0].onclick=function() {
  nextSlide();
}

function nextSlide() {
  goToSlide(currentSlide+1);
}
function previousSlide() {
  goToSlide(currentSlide-1);
}
function goToSlide(n) {
  slides[currentSlide].className='slide';
  currentSlide=(n+slides.length)%slides.length;
  slides[currentSlide].className='slide showing';
}

//the end of scripts for the slide section

//scripts for the notification section  ---the beginning
/*
var currentNotification=0;
var notis=document.querySelectorAll('.notification .title_lists li');
var scrollInterval=setInterval(nextNotification,2000);
var currentIptNotification=0;
var iptNotis=document.querySelectorAll('.notification .importantitems li');
var iptScrollInterval=setInterval(nextIptNotification,2000);
var title_list=document.querySelector('.notification .title_lists');
var ipt_items=document.querySelector('.notification .importantitems');

function nextNotification() {
  notis[currentNotification].className='noti leaving';
  currentNotification=(currentNotification+1)%notis.length;
  notis[currentNotification].className='noti showing';
  if (notis[notis.length-1].className==='noti leaving') {
    clearInterval(scrollInterval);
    for (var i=0; i<notis.length; i++) {
	  //notis[i].style.opacity=0;
      notis[i].className='noti';
    }
	currentNotification=0;
	notis[currentNotification].className='noti showing';
	
	
    scrollInterval=setInterval(nextNotification,2000);
  }
}
function nextIptNotification() {
  iptNotis[currentIptNotification].className='iptnoti leaving';
  currentIptNotification=(currentIptNotification+1)%iptNotis.length;
  iptNotis[currentIptNotification].className='iptnoti showing';
  if (iptNotis[iptNotis.length-1].className==='iptnoti leaving') {
    clearInterval(iptScrollInterval);
    for (var i=0; i<iptNotis.length; i++) {
	  //notis[i].style.opacity=0;
      iptNotis[i].className='iptnoti';
    }
	currentIptNotification=0;
	iptNotis[currentIptNotification].className='iptnoti showing';
	
	
    iptScrollInterval=setInterval(nextIptNotification,2000);
  }
}

title_list.onmouseover=function() {
  clearInterval(scrollInterval);
}
title_list.onmouseout=function() {
  scrollInterval=setInterval(nextNotification,2000);
}
ipt_items.onmouseover=function() {
  clearInterval(iptScrollInterval);
}
ipt_items.onmouseout=function() {
  iptScrollInterval=setInterval(nextIptNotification,2000);
}
*/

var currentNotification=0;
var notis=document.querySelectorAll('.notification .title_lists li');
var scrollInterval=setInterval(nextNotification,3000);
var monitorInterval=setInterval(anotherCycle,50);

function nextNotification() {
  notis[currentNotification].className='noti leaving';
  currentNotification=(currentNotification+1)%notis.length;
  notis[currentNotification].className='noti showing';
  
}
function anotherCycle() {
  if (notis[notis.length-1].className==='noti leaving') {
    clearInterval(scrollInterval);
    for (var i=0; i<notis.length; i++) {
	  //notis[i].style.opacity=0;
      notis[i].className='noti';
    }
	currentNotification=0;
	notis[currentNotification].className='noti showing';
	
	
    scrollInterval=setInterval(nextNotification,3000);
  }
}

var currentIptNotification=0;
var iptNotis=document.querySelectorAll('.notification .importantitems li');
var iptScrollInterval=setInterval(nextIptNotification,3000);
var iptMonitorInterval=setInterval(iptAnotherCycle,50);

function nextIptNotification() {
  iptNotis[currentIptNotification].className='iptnoti leaving';
  currentIptNotification=(currentIptNotification+1)%iptNotis.length;
  iptNotis[currentIptNotification].className='iptnoti showing';
  
}
function iptAnotherCycle() {
  if (iptNotis[iptNotis.length-1].className==='iptnoti leaving') {
    clearInterval(iptScrollInterval);
    for (var i=0; i<iptNotis.length; i++) {
	  //notis[i].style.opacity=0;
      iptNotis[i].className='iptnoti';
    }
	currentIptNotification=0;
	iptNotis[currentIptNotification].className='iptnoti showing';
	
	
    iptScrollInterval=setInterval(nextIptNotification,3000);
  }
}

var title_list=document.querySelector('.notification .title_lists');
var ipt_items=document.querySelector('.notification .importantitems');

title_list.onmouseover=function() {
  clearInterval(scrollInterval);
  clearInterval(monitorInterval);
}
title_list.onmouseout=function() {
  scrollInterval=setInterval(nextNotification,3000);
  monitorInterval=setInterval(anotherCycle,50);
}
ipt_items.onmouseover=function() {
  clearInterval(iptScrollInterval);
  clearInterval(iptMonitorInterval);
}
ipt_items.onmouseout=function() {
  iptScrollInterval=setInterval(nextIptNotification,3000);
  iptMonitorInterval=setInterval(iptAnotherCycle,50);
}
//scripts for the notification section  ---the end

//scripts for the main section  ---the beginning
var titleLists=document.querySelectorAll('.homemain .head li');
var home_sections=document.querySelectorAll('.homemain .body .section');

var s1news_titleLists=document.querySelectorAll('.homemain .section1 .s1news_head li');
var s1news_titleListsLinks=document.querySelectorAll('.homemain .section1 .s1news_head li a');
var s1news_newslists=document.querySelectorAll('.homemain .section1 .s1news_body ul');

home_sections[0].style.display='block';
for (var i=1; i<home_sections.length; i++) {
  home_sections[i].style.display='none';
}
for (var i=0; i<titleLists.length; i++) {
  titleLists[i].onmouseover=function(e) {
    if (e.target.parentElement.className!=='hovered') {
	  for ( var j=0; j<titleLists.length; j++) {
	    if (titleLists[j].className==='hovered') {
		  titleLists[j].className='';
		  home_sections[j].style.display='none';
		}
	  }
	  e.target.parentElement.className='hovered';
	  for ( var j=0; j<titleLists.length; j++) {
	    if (titleLists[j].className==='hovered') {
		  
		  home_sections[j].style.display='block';
		}
	  }
	}
  }
}
/*
for (var i=0; i<s1news_titleLists.length; i++) {
  s1news_titleLists[i].onmouseover=function(e) {
    if (e.target.className!=='hovered') {
	  for ( var j=0; j<s1news_titleLists.length; j++) {
	    if (s1news_titleLists[j].className==='hovered') {
		  s1news_titleLists[j].className='';
		  s1news_newslists[j].className='CommonNewsList';
		}
	  }
	  e.target.className='hovered';
	  for ( var j=0; j<s1news_titleLists.length; j++) {
	    if (s1news_titleLists[j].className==='hovered') {
		  s1news_newslists[j].className='CommonNewsList showing';
		}
	  }
	}
  }
}*/
for (var i=0; i<s1news_titleListsLinks.length; i++) {
  s1news_titleListsLinks[i].onmouseover=function(e) {
    if (e.target.parentElement.className!=='hovered') {
	  for ( var j=0; j<s1news_titleLists.length; j++) {
	    if (s1news_titleLists[j].className==='hovered') {
		  s1news_titleLists[j].className='';
		  s1news_newslists[j].className='CommonNewsList';
		}
	  }
	  e.target.parentElement.className='hovered';
	  for ( var j=0; j<s1news_titleLists.length; j++) {
	    if (s1news_titleLists[j].className==='hovered') {
		  s1news_newslists[j].className='CommonNewsList showing';
		}
	  }
	}
  }
}

//section2 --- the beginning
var titleTab1=document.querySelector('.section2 .s2TextHead ul li:nth-of-type(1)');
var titleTab2=document.querySelector('.section2 .s2TextHead ul li:nth-of-type(2)');
var textBody1=document.querySelector('.section2 .s2TextBody .s2_thgk');
var textBody2=document.querySelector('.section2 .s2TextBody .s2_tzth');
var s2tzthTitle1=document.querySelector('.s2_tzth .s1news_head ul li:nth-of-type(1)');
var s2tzthTitle2=document.querySelector('.s2_tzth .s1news_head ul li:nth-of-type(2)');
var s2tzthText1=document.querySelector('.s2_tzth .s1news_body ul:nth-of-type(1)');
var s2tzthText2=document.querySelector('.s2_tzth .s1news_body ul:nth-of-type(2)');

textBody1.style.display='block';
textBody2.style.display='none';
s2tzthText1.style.display='block';
s2tzthText2.style.display='none';
titleTab1.onmouseover=function(e) {
  if ( e.target.parentElement.className!=='hovered') {
    titleTab2.className='';
	textBody2.style.display='none';
	e.target.parentElement.className='hovered';
	textBody1.style.display='block';
  }
}
titleTab2.onmouseover=function(e) {
  if ( e.target.parentElement.className!=='hovered') {
    titleTab1.className='';
	textBody1.style.display='none';
	e.target.parentElement.className='hovered';
	textBody2.style.display='block';
  }
}
s2tzthTitle1.onmouseover=function(e) {
  if ( e.target.parentElement.className!=='hovered') {
    s2tzthTitle2.className='';
	s2tzthText2.style.display='none';
	e.target.parentElement.className='hovered';
	s2tzthText1.style.display='block';
  }
}
s2tzthTitle2.onmouseover=function(e) {
  if ( e.target.parentElement.className!=='hovered') {
    s2tzthTitle1.className='';
	s2tzthText1.style.display='none';
	e.target.parentElement.className='hovered';
	s2tzthText2.style.display='block';
  }
}
//section2 --- the end

//section3
var s3GrbsList=document.querySelector('.s3LeftBody .s3Grbs');
var s3QybsList=document.querySelector('.s3LeftBody .s3Qybs');
var s3TitleHead1=document.querySelector('.s3LeftHead li:nth-of-type(1) a');
var s3TitleHead2=document.querySelector('.s3LeftHead li:nth-of-type(2) a');

s3GrbsList.style.display='block';
s3QybsList.style.display='none';
s3TitleHead1.onmouseover=function(e) {
	if ( e.target.parentElement.className!=='hovered') {
		s3TitleHead2.parentElement.className='';
		s3QybsList.style.display='none';
	}
	e.target.parentElement.className='hovered';
	s3GrbsList.style.display='block';
}
s3TitleHead2.onmouseover=function(e) {
	if ( e.target.parentElement.className!=='hovered') {
		s3TitleHead1.parentElement.className='';
		s3GrbsList.style.display='none';
	}
	e.target.parentElement.className='hovered';
	s3QybsList.style.display='block';
}
//section3

//section4 --- the beginning
var s4TitleHead1=document.querySelector('.s4xxgkHead li:nth-of-type(1) a');
var s4TitleHead2=document.querySelector('.s4xxgkHead li:nth-of-type(2) a');
var s4xxgkList1=document.querySelector('.s4xxgkBody .list1');
var s4xxgkList2=document.querySelector('.s4xxgkBody .list2');
var inputBox=document.querySelectorAll('.jsptTab .jsptTabBody .jsptText');
var searchForms=document.querySelectorAll('.jsptTab .jsptTabBody>div');
var s4titleHead=document.querySelectorAll('.jsptTabHead li');

s4xxgkList1.style.display='block';
s4xxgkList2.style.display='none';
searchForms[0].style.display='block';
s4TitleHead1.onmouseover=function(e) {
	if ( e.target.parentElement.className!=='hovered') {
		s4TitleHead2.parentElement.className='';
		s4xxgkList2.style.display='none';
	}
	e.target.parentElement.className='hovered';
	s4xxgkList1.style.display='block';
}
s4TitleHead2.onmouseover=function(e) {
	if ( e.target.parentElement.className!=='hovered') {
		s4TitleHead1.parentElement.className='';
		s4xxgkList1.style.display='none';
	}
	e.target.parentElement.className='hovered';
	s4xxgkList2.style.display='block';
}
for (var i=1; i<searchForms.length; i++) {
  searchForms[i].style.display='none';
}
for (var i=0; i<s4titleHead.length; i++) {
  s4titleHead[i].onmouseover=function(e) {
    if (e.target.className!=='hovered') {
	  for (var j=0; j<s4titleHead.length;j++) {
	    if (s4titleHead[j].className==='hovered') {
		  s4titleHead[j].className='';
		  searchForms[j].style.display='none';
		}
	  }
	  e.target.className='hovered';
	  for (var j=0; j<s4titleHead.length; j++) {
	    if (s4titleHead[j].className==='hovered') searchForms[j].style.display='block';
	  }
	}
  }
}
for (var i=0; i<inputBox.length; i++) {
  inputBox[i].onblur= function(e) {
    if (e.target.value==='') {e.target.value='请输入关键字';}
  }
  inputBox[i].onfocus= function(e) {
    if (e.target.value==='请输入关键字') {e.target.value='';}
  }
}

//section4 --- the end 

//section5 --- the beginning
var s5titleHead=document.querySelectorAll('.section5 .s5Left .s5LeftHead li a');
var s5LeftBlocks=document.querySelectorAll('.section5 .s5LeftBody>div');
var s5InputBox=document.querySelector('.s5Right .zzfwTxt');
var s5SchBtn=document.querySelector('s5Right .zzfwBtn');

s5LeftBlocks[0].style.display='block';
for (var i=1; i<s5LeftBlocks.length; i++) {
  s5LeftBlocks[i].style.display='none';
}
for (var i=0; i<s5titleHead.length; i++)
{
  s5titleHead[i].onmouseover=function(e) {
    if (e.target.parentElement.className!=='hovered') {
	  for (var i=0; i<s5titleHead.length; i++) {
	    if (s5titleHead[i].parentElement.className==='hovered') {
		  s5titleHead[i].parentElement.className='';
		  s5LeftBlocks[i].style.display='none';
		  break;
		}
	  }
	  e.target.parentElement.className='hovered';
	  for (var i=0; i<s5titleHead.length; i++) {
	    if (s5titleHead[i].parentElement.className==='hovered') {s5LeftBlocks[i].style.display='block'; break;}
	  }
	}
  }
}
s5InputBox.onblur=function(e) {
  if ( e.target.value==='') e.target.value='请输入服务标题';
}
s5InputBox.onfocus=function(e) {
  if ( e.target.value==='请输入服务标题') e.target.value='';
}
//section5 --- the end 

//section6 --- the beginning
var s6scrollBox=document.querySelector('#s6div .s6rdztImgs');
var s6scrollInterval=setInterval(s6nextUl,2000);
var section6=document.querySelector('.section6');

function s6nextUl() {
  if (s6scrollBox.className==='s6rdztImgs') {
    s6scrollBox.className='s6rdztImgs s6rdztImgs_left';
  } else {
    s6scrollBox.className='s6rdztImgs s6rdztImgs_right';
	s6scrollBox.className='s6rdztImgs';
  }
}

s6scrollBox.onmouseover=function() {
  clearInterval(s6scrollInterval);
}
s6scrollBox.onmouseout=function() {
  s6scrollInterval=setInterval(s6nextUl,2000);
}
//section6 --- the end

//section7 --- the beginning
var s7titleHead=document.querySelectorAll('.s7TableHead li');
var s7lists=document.querySelectorAll('.s7TableBody ul');

s7lists[0].style.display='block';
for (var i=1; i<s7lists.length; i++) {
  s7lists[i].style.display='none';
}
for ( var i=0; i<s7titleHead.length; i++) {
  s7titleHead[i].onmouseover=function(e) {
    if (e.target.className!=='hovered') {
	  for (var j=0; j<s7titleHead.length; j++) {
	    if (s7titleHead[j].className==='hovered') {
		  s7titleHead[j].className='';
		  s7lists[j].style.display='none';
		}
	  }
	  e.target.className='hovered';
	  for (var j=0; j<s7titleHead.length; j++) {
	    if (s7titleHead[j].className==='hovered') s7lists[j].style.display='block';
	  }
	}
  }
}
//section7 --- the end
//scripts for the main section  ---the end

//浮窗部分

var fch=document.querySelector('.fuchuang');
var closeButton=document.querySelector('.fuchuang .closeBtn');
//var fchInterval=setInterval(move,500);
var fch_x=0;
//alert(fch_x);
var fch_y=0;
var velx=1;
var vely=1;
var pause=false;

closeButton.onclick=function() {
  fch.style.display='none';
}
function move() {
  //var x=fch.style.left;
  //var y=fch.style.top;
  
  if(fch_x<0||fch_x+304>=getClientDimension().width) {velx=-velx;}
  if(fch_y<0||fch_y+70>=getClientDimension().height) {vely=-vely;}
  fch_x+=velx;
  //alert(fch_x+','+getClientDimension().width);
  fch.style.left=fch_x+'px';
  fch_y+=vely;
  fch.style.top=fch_y+'px';
}
function moving() {
  move();
  if(pause) return;
  requestAnimationFrame(moving);
}
fch.onmouseover=function() {
  pause=true;
}
fch.onmouseout=function() {
  pause=false;
  moving();
}
moving();

//浮窗部分 --- the end