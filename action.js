let map= new Map();
map.set(1,'image/one.jpg');
map.set(2,'image/two.jpg');
map.set(3,'image/three.jpg');//hello
map.set(4,'image/four.png');
map.set(5,'image/five.png');
map.set(6,'image/six.png');
//document.getElementById('user').firstElementChild(u);
let toss=0;

let details=document.getElementById('hide');
let display=0;
function hide(){
    if(display==1){
      details.style.display='block';
      display=0;
    }
    else{
        details.style.display='none';
        display=1;
    }
}
let oddoreven;
let user,system;
function choose(event){
    oddoreven=event.target.innerText;
    //console.log(oddoreven);
    if(oddoreven==='odd' || oddoreven==='even'){
    if(oddoreven==='odd'){
      // document.getElementById('info').style.display='none';
       document.getElementById('userchoose').innerText='Odd';
       document.getElementById('systemchoose').innerText='Even';
    }
    else{
       // document.getElementById('info').style.display='none';
        document.getElementById('userchoose').innerText='Even';
        document.getElementById('systemchoose').innerText='Odd';
    }
  }
  else{
    document.getElementById('content').style.display='none';
    document.getElementById('info').style.display='none';
    document.getElementById('userchoose').innerText=oddoreven;
    document.getElementById('systemchoose').innerText=(oddoreven==='Bating')?'Bowling':'Bating';
    user=oddoreven;
    system=(oddoreven==='Bating')?'Bowling':'Bating';
  }
}
function player1(ele){
   let cha=document.getElementById('useradd');
   cha.src=map.get(parseInt(ele));
   player2(parseInt(ele));
}
function player2(s1){
    const ran=Math.floor(Math.random()*map.size)+1;
    let u=document.getElementById('sysadd');
    u.src=map.get(ran);
    if(toss==0){
      toss=1;
      batorbowl(s1,ran);
    }
    else{
      score(s1,ran);
    }
}
let res;
function batorbowl(a,b){
    res=document.getElementById('info');
    if(((a+b)%2==0 && oddoreven==='even') || ((a+b)%2!=0 && oddoreven==='odd')){
       res.innerText='Toss Win by you';
       document.getElementById('choose1').innerText='Bating';
       document.getElementById('choose2').innerText='Bowling';
    }
    else{
        res.innerText='Toss Win by System';
        document.getElementById('content').style.display='none';
        let systemchoose=Math.floor(Math.random()*2);
        if(systemchoose===0){
            system='Bating';
            user='Bowling';
            document.getElementById('userchoose').innerText='Bowling';
            document.getElementById('systemchoose').innerText='Bating';
        }
        else{
            user='Bating';
            system='Bowling';
            document.getElementById('userchoose').innerText='Bating';
            document.getElementById('systemchoose').innerText='Bowling';
        }
    }
}
let userscore=0,systemscore=0,target=0,result=0;
function score(s1,s2){
         res.style.display='none';
         if(user==='Bating' && s1!==s2){
            userscore+=s1;
            document.getElementById('uscore').innerText=userscore;
            // if(target!==0){
            //    target-=userscore;
            //  }
         }
        if(user==='Bowling' && s1!==s2){
            systemscore+=s2;
            document.getElementById('sscore').innerText=systemscore;
            // if(target!==0){
            //   target-=systemscore;
            // }
        }
       if(s1===s2 && result==0){
          result=1;
          target=(userscore===0)?systemscore:userscore;
          document.getElementById('info').innerText='OUT !!!';
          setTimeout(()=>{
            document.getElementById('info').style.display='none';
          },1000);
          user=(user==='Bating')?"Bowling":"Bating";
          system=(system==='Bating')?"Bowling":"Bating";
          document.getElementById('userchoose').innerText=user;
          document.getElementById('systemchoose').innerText=system;
        }
        else if(userscore===systemscore && s1===s2 && result===1){
          alert('Match Draw');
          location.reload(true);
        }
        else if((target<systemscore || target<userscore || s1===s2)&&result==1){
          (systemscore<userscore)?alert('Match win by U😢😢'):alert('Match win by System😁😁');
          location.reload(true);
          const jsConfetti=new jsConfetti();
          function st(){
            jsConfetti.addConfetti({
              emojis:['😁','😍','😁','❤','😍','😒'],
            }).then(()=>jsConfetti.addConfetti())
            }
            st();
          }
      //  console.log(user+" "+system);
        console.log(userscore+" "+systemscore);
}
function val(event){
   
    let ele=event.target.innerText;
   // console.log(map.get(parseInt(ele)));
    player1(ele);
}
