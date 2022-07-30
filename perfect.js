


function answer(){
 let mhf = document.getElementById("mhfirst").value;
let mhs = document.getElementById("mhsecond").value;
let mht =document.getElementById("mhthird").value;
let mhfo =document.getElementById("mhfourth").value;
let mhfi = document.getElementById("mhfifth").value;

let phf =document.getElementById("phfirst").value;
let phs =document.getElementById("phsecond").value;
let pht =document.getElementById("phthird").value;
let phfo =document.getElementById("phfourth").value;
let phfi = document.getElementById("phfifth").value;

let ehf =document.getElementById("ehfirst").value;
let ehs =document.getElementById("ehsecond").value;
let eht =document.getElementById("ehthird").value;
let ehfo =document.getElementById("ehfourth").value;
let ehfi = document.getElementById("ehfifth").value;

let shf =document.getElementById("shfirst").value;
let shs =document.getElementById("shsecond").value;
let sht =document.getElementById("shthird").value;
let shfo =document.getElementById("shfourth").value;
let shfi = document.getElementById("shfifth").value;

let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let score3 = document.getElementById("score3")
let score4 = document.getElementById("score4")

let result = document.getElementById("result")
let form = document.getElementById("form")
let totalscore = document.getElementById("totalscore")

 
if(mhf === 'a'){
 mhf = 5;
}else if(mhf === 'b'){
 mhf = 4;
}else if(mhf === 'c'){
 mhf = 3;
}else if(mhf === 'd'){
 mhf = 2;
}
else if(mhf === 'e'){
 mhf = 1;
}
else{
 mhf = 0;
};


if( mhs === 'a'){
 mhs = 0
}else if(mhs === 'b'){
 mhs =5;
}else if(mhs === 'c'){
 mhs = 2.5;
}else{
 mhs = 0;
};

if( mht === 'a'){
 mht = 0
}else if(mht === 'b'){
 mht = 2;
}else if(mht === 'c'){
 mht = 4;
}else if(mht === 'd'){
 mht = 5;
}else{
 mht = 0;
};

if(mhfo === 'a'){
 mhfo = 0
}else if(mhfo === 'b'){
 mhfo = 2;
}else if(mhfo === 'c'){
 mhfo = 4;
}else if(mhfo === 'd'){
 mhfo = 5;
}
else{
 mhfo = 0;
};

if(mhfi === 'a'){
 mhfi = 0
}else if(mhfi === 'b'){
 mhfi = 5;
}else if(mhfi === 'c'){
 mhfi = 2.5;
}else{
 mhfi = 0;
};
let totalmh = mhf + mhs + mht + mhfo + mhfi ;

//physical health
if(phf === 'a'){
 phf = 5;
}else if(phf === 'b'){
 phf = 4;
}else if(phf === 'c'){
 phf = 3;
}else if(phf === 'd'){
 phf = 2;
}
else if(phf === 'e'){
 phf = 1;
}
else{
 phf = 0
};

if( phs === 'a'){
 phs = 0
}else if(phs === 'b'){
 phs =5;
}else if(phs === 'c'){
 phs = 3;
}else{
 phs = 0;
};

if( pht === 'a'){
 pht = 0
}else if(pht === 'b'){
 pht = 5;
}else if(pht === 'c'){
 pht = 3;
}else{
 pht = 0;
};

if(phfo === 'a'){
 phfo = 5
}else if(phfo === 'b'){
 phfo = 0;
}else if(phfo === 'c'){
 phfo = 3;
}
else{
 phfo = 0;
};

if(phfi === 'a'){
 phfi = 5
}else if(phfi === 'b'){
 phfi = 4;
}else if(phfi === 'c'){
 phfi = 3;
}else if(phfi === 'd'){
 phfi = 2;
}else{
 phfi = 0;
};
let totalph = phf + phs + pht + phfo + phfi ;
//emotional health
if(ehf === 'a'){
 ehf = 5;
}else if(ehf === 'b'){
 ehf = 4;
}else if(ehf === 'c'){
 ehf = 3;
}else if(ehf === 'd'){
 ehf = 2;
}
else if(ehf === 'e'){
 ehf = 1;
}
else{
 ehf = 0;
};

if( ehs === 'a'){
 ehs = 0
}else if(ehs === 'b'){
 ehs =5;
}else if(ehs === 'c'){
 ehs = 3;
}else{
 ehs = 0;
};

if( eht === 'a'){
 eht = 0
}else if(eht === 'b'){
 eht = 3;
}else if(eht === 'c'){
 eht = 4;
}else if(eht === 'd'){
 eht = 5;
}else{
 eht = 0;
}
;
if(ehfo === 'a'){
 ehfo = 5
}else if(ehfo === 'b'){
 ehfo = 4;
}else if(ehfo === 'c'){
 ehfo = 3;
}else if(ehfo === 'd'){
 ehfo = 2;
}else if(ehfo === 'e'){
 ehfo = 1;
}
else{
 ehfo = 0;
}
;
if(ehfi === 'a'){
 ehfi = 5
}else if(ehfi === 'b'){
 ehfi = 4;
}else if(ehfi === 'c'){
 ehfi = 3;
}else if(ehfi === 'd'){
 ehfi = 2;
}else if(ehfi === 'e'){
 ehfi = 1;
}
else{
 ehfi = 0;
};
let totaleh = ehf + ehs + eht + ehfo + ehfi ;
//spiritual health
if(shf === 'a'){
 shf = 5;
}else if(shf === 'b'){
 shf = 4;
}else if(shf === 'c'){
 shf = 3;
}else if(shf === 'd'){
 shf = 2;
}
else if(shf === 'e'){
 shf = 1;
}
else{
 shf = 0;
};

if( shs === 'a'){
 shs = 5
}else if(shs === 'b'){
 shs =0;
}else if(shs === 'c'){
 shs = 2;
}else{
 shs = 0;
};

if( sht === 'a'){
 sht = 5
}else if(sht === 'b'){
 sht = 0;
}else if(sht === 'c'){
 sht = 3;
}else{
 sht = 0;
};

if(shfo === 'a'){
 shfo = 0
}else if(shfo === 'b'){
 shfo = 2;
}else if(shfo === 'c'){
 shfo = 4;
}else if(shfo === 'd'){
 shfo = 5;
}
else{
 shfo = 0;
}
;
if(shfi === 'a'){
 shfi = 0;
}else if(shfi === 'b'){
 shfi = 2;
}else if(shfi === 'c'){
 shfi = 4;
}else if(shfi === 'd'){
 shfi = 5;
}
else{
 shfi = 0;
};
let totalsh = shf + shs + sht + shfo + shfi ;
let ptotalmh = (totalmh/25) * 100;
let ptotalph = (totalph/25) * 100;
let ptotaleh = (totaleh/25) * 100;
let ptotalsh = (totalsh/25) * 100;

let overall = (totalmh + totalph + totaleh + totalsh);

if(ptotalmh >= 70){
 score1.innerHTML = `${ptotalmh}%. You are mentally fit`;
}else if(ptotalmh >=50 && ptotalmh <=69){
 score1.innerHTML = `${ptotalmh}%. You should check yourself`;
}
else{
 score1.innerHTML = `${ptotalmh}%. You are not mentally okay`;
}

if(ptotalph >= 70){
 score2.innerHTML = `${ptotalph}%. You are physically fit`;
}else if(ptotalph >=50 && ptotalph <=69){
 score2.innerHTML = `${ptotalph}%. You should check yourself`;
}
else{
 score2.innerHTML = `${ptotalph}%. You are not physically okay`;
}

if(ptotaleh >= 70){
 score3.innerHTML = `${ptotaleh}%. You are emotionally fit`;
}else if(ptotaleh >=50 && ptotaleh <=69){
 score3.innerHTML = `${ptotaleh}%. You should check yourself`;
}
else{
 score3.innerHTML = `${ptotaleh}%. You are not emotionally okay`;
}

if(ptotalsh >= 70){
 score4.innerHTML = `${ptotalsh}%. You are spiritually fit`;
}else if(ptotalsh >=50 && ptotalsh <=69){
 score4.innerHTML = `${ptotalsh}%. You should check yourself`;
}
else{
 score4.innerHTML = `${ptotalsh}%. You are not spiritually okay`;
}

if(overall >= 70){
 totalscore.innerHTML = `${overall}%. You are fit`;
}else if(overall >=50 && overall <=69){
 totalscore.innerHTML = `${overall}%. You should check yourself`;
}
else{
 totalscore.innerHTML = `${overall}%. You are not fit`;
}


result.style.display="flex";
form.style.display = "none";

}