gift=document.querySelector('.gift')
gift2=document.querySelector('.gift2')
gift3=document.querySelector('.gift3')
ribbon=document.querySelector('.ribbon')
ribbon2=document.querySelector('.ribbon2')
ribbon3=document.querySelector('.ribbon3')
g1=document.querySelector('#g1')
g2=document.querySelector('#g2')

gift.onmousedown=(e)=>{click(gift,ribbon,e)}
gift2.onmousedown=(e)=>{click(gift2,ribbon2,e)}
gift3.onmousedown=(e)=>{click(gift3,ribbon3,e)}

star=document.querySelector('.star')
text=document.querySelector('.starcontent')

var Pre_x=0, Pre_y=0

star.onclick=reveal


function reveal()
{
    text.textContent='ANH YÊU EM' 
    text.style.animation='typing 2.5s steps(40, end),blink-caret 1s step-end infinite'
}

function getX(ele)
{
    var S_left=window.getComputedStyle(ele,null).getPropertyValue('left')
    i=0
    while(S_left[i]!='p')
    {
        i=i+1
    }
    S_left=S_left.slice(0,i)

    return parseInt(S_left)
}

function getY(ele)
{
    var S_top=window.getComputedStyle(ele,null).getPropertyValue('top')
    i=0
    while(S_top[i]!='p')
    {
        i=i+1
    }
    S_top=S_top.slice(0,i)
    return parseInt(S_top)
}


function click(gift,ribbon,e)
{
    Pre_x=e.clientX
    Pre_y=e.clientY
    var D=window.innerHeight/3-getY(gift)-gift.offsetHeight
    gift.style.transition=null
    gift.style.transform=null
    gift.style.top=`${getY(gift)+D+'px'}`
    ribbon.style.transition=null
    ribbon.style.transform=null
    ribbon.style.top=`${getY(ribbon)+D+'px'}`

    document.onmouseup=fall
    document.onmousemove=drag

    var On_Width=e.clientX
    var On_Height=e.clientY

    Prev_left_g=getX(gift)
    Prev_top_g=getY(gift)
    Prev_left_r=getX(ribbon)
    Prev_top_r=getY(ribbon)
    
    function drag(e)
    {
        deltaW=e.clientX-On_Width
        deltaH=e.clientY-On_Height
        gift.style.left=`${(Prev_left_g+deltaW)+'px'}`
        gift.style.top=`${(Prev_top_g+deltaH)+'px'}`
        ribbon.style.left=`${(Prev_left_r+deltaW)+'px'}`
        ribbon.style.top=`${(Prev_top_r+deltaH)+'px'}`
    }
    function fall()
    {
        D=window.innerHeight/3-getY(gift)-gift.offsetHeight
        gift.style.transition='1s ease-out'
        gift.style.transform=`${'translate(0,'+D+'px)'}`
        ribbon.style.transition='1s ease-out'
        ribbon.style.transform=`${'translate(0,'+D+'px)'}`
        document.onmouseup=null
        document.onmousemove=null

    }
}

function clickgift(gift,e)
{
    var D=window.innerHeight/3-getY(gift)-gift.offsetHeight
    gift.style.transition=null
    gift.style.transform=null
    gift.style.top=`${getY(gift)+D+'px'}`
    Pre_x=e.clientX
    Pre_y=e.clientY

    document.onmouseup=fall
    document.onmousemove=drag
    
    var On_Width=e.clientX
    var On_Height=e.clientY

    Prev_left_g=getX(gift)
    Prev_top_g=getY(gift)
    
    function drag(e)
    {
        deltaW=e.clientX-On_Width
        deltaH=e.clientY-On_Height
        gift.style.left=`${(Prev_left_g+deltaW)+'px'}`
        gift.style.top=`${(Prev_top_g+deltaH)+'px'}`
    }
    function fall()
    {
        console.log('1')
        D=window.innerHeight/3-getY(gift)-gift.offsetHeight
        gift.style.transition='1s ease-out'
        gift.style.transform=`${'translate(0,'+D+'px)'}`
        document.onmouseup=null
        document.onmousemove=null

    }
}

function showgift(g)
{
    g.style.display='block'
    D=window.innerHeight/3-getY(g1)-g1.offsetHeight
    g.style.transition='1s ease-out'
    g.style.transform=`${'translate(0,'+D+'px)'}`
    g.onmousedown=(e)=>{clickgift(g,e)}
}

gift.onmouseup=(e)=>
{
    if(Pre_x==e.clientX && Pre_y==e.clientY)
    {
        showgift(g1)
    }
}

gift2.onmouseup=(e)=>
{
    if(Pre_x==e.clientX && Pre_y==e.clientY)
    {
        showgift(g2)
    }
}

gift3.onmouseup=(e)=>
{
    if(Pre_x===e.clientX && Pre_y===e.clientY)
    {
        showgift(g3)
        console.log(Pre_x,Pre_y,e.clientX, e.clientY)
    }
    
}

var closePopup = document.querySelector("#popupclose");
var overlay = document.querySelector("#overlay");
var popup = document.querySelector("#popup");
var button = document.querySelector("#g3");
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};

g3.onmouseup=(e)=>
{
    if(Pre_x==e.clientX && Pre_y==e.clientY)
    {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    }
}

