var BF = require('./bf');
var BM = require('./bm');
var KMP = require('./kmp');
bf = new BF();
bm = new BM();
kmp = new KMP();

//--- first -----------------------
//var TestText = "aaabaadaabaaa";
//var TestPatt = "aabaaa";

var TestText = "sadfp[vsdfgeswgdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsegegdscvsaghgfnrtz[pla;reg.[df;gdsege]rtrehgfhfghfghfyfdhbdfxzfgasert[pfklsad;dfgbrtuoopfghgfhgfhfgh,mngiupopym,tyu658867khj,fgnmftwuyhfgjngmfgjykhjkjhkhj,mfse4gsgjwa[-sdf";
var TestPatt = "mfse4gsgj";

var StartBF = Date.now();
console.log("bf: first index match is " + bf.findBrute(TestText,TestPatt) );
var EndBF = Date.now();
console.log("time of bf is : " + (EndBF-StartBF) + " milliseconds");
//-----------------------------------------------------------------------------------
var StartBM = Date.now();
console.log("bm: first index match is " + bm.findBoyerMoore(TestText,TestPatt) );
var EndBM = Date.now();
console.log("time of bm is : " + (EndBM-StartBM) + " milliseconds" );
//-----------------------------------------------------------------------------------
var StartKMP = Date.now();
console.log("kmp: first index match is " + kmp.findKmpSearch(TestText,TestPatt) );
var EndKMP = Date.now();
console.log("time of bm is : " + (EndKMP-StartKMP) + " milliseconds" );
//-----------------------------------------------------------------------------------