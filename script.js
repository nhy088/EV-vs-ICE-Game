let car="";
let energy=0;
let eco=0;
let money=0;
let regenEnergy=0;


function selectEV(){

car="전기차";

energy=80;
eco=100;
money=0;

document.getElementById("event").innerHTML=
"도심 주행 중! 회생제동을 사용할까요?";

update();

}



function selectICE(){

car="휘발유차";

energy=70;
eco=60;
money=0;

document.getElementById("event").innerHTML=
"도심 주행 중! 연료를 관리하세요.";

update();

}



function normal(){

if(car=="전기차"){

energy-=10;
eco-=2;

}

else{

energy-=15;
eco-=5;

}

update();

}



function regen(){

if(car=="전기차"){

energy+=5;
regenEnergy+=5;
eco+=3;

document.getElementById("event").innerHTML=
"⚡ 운동에너지가 전기에너지로 회수되었습니다!";

}

else{

document.getElementById("event").innerHTML=
"휘발유차는 회생제동 기능이 없습니다.";

}

update();

}



function update(){

document.getElementById("car").innerHTML=
"선택 차량 : "+car;

document.getElementById("energy").innerHTML=
energy;

document.getElementById("eco").innerHTML=
eco;

document.getElementById("regen").innerHTML=
regenEnergy;


}



function result(){

if(car=="전기차"){

money=420;

}
else{

money=820;

}

document.getElementById("money").innerHTML=money;


document.getElementById("result").innerHTML=
"🏆 "+car+" 선택 결과 완료!";

}