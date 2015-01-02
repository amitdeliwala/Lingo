var status=[-1,-1,-1];
var voice=['v0','v1'];
var place=['p0','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11'];
var manner=['m0','m1','m2','m3','m4','m5'];
var searchv=["voiced","voiceless"];
var searchp=["bilabial","labiodental","dental","alveolar","postalveolar","retroflex","alveolopalatal","palatal","velar","uvular","pharyngeal","glottal"];
var searchm=["nasal","stop","fricative","tap","trill","lateral"];

var myArray2=[['\u0279',"voiced","(post)alveolar","liquid","run, sorry"
],["z","voiced","alveolar","fricative","fizz, his, rose"
],["l","voiced","alveolar","lateral liquid","lip"
],["n","voiced","alveolar","nasal","none"
],["d","voiced","alveolar","stop","dad"
],['\u027E',"voiced","alveolar","tap","Am Engl city; Spanish pero"
],["r","voiced","alveolar","trill","Spanish perro"
],['\u03B2',"voiced","bilabial","fricative","Spanish haber"
],["m","voiced","bilabial","nasal","mom"
],["b","voiced","bilabial","stop","bib"
],['\u00F0',"voiced","dental","fricative","this, either"
],["w","voiced","labial-velar","glide","witch"
],["v","voiced","labiodental","fricative","verve"
],["y","voiced","palatal","glide","yes"
],['\u028E',"voiced","palatal","lateral","Italian gli, Castilian ll"
],['\u0272',"voiced","palatal","nasal","Spanish ñ, Italian gn"
],["d\u0292","voiced","palatoalveolar","affricate","judge"
],['\u017E',"voiced","palatoalveolar","fricative","rouge, vision"
],['\u0292',"voiced","palatoalveolar","fricative","rouge, vision"
],['\u0295',"voiced","pharyngeal","fricative","Arabic ‘ayn"
],['\u1E5B',"voiced","retroflex","flap","Indic"
],["\u0290","voiced","retroflex","fricative","Indic, Mandarin (r)"
],['\u1E37',"voiced","retroflex","lateral liquid","Indic"
],['\u0273',"voiced","retroflex","nasal","Indic"
],['\u0256',"voiced","retroflex","stop","Indic"
],["\u0281","voiced","uvular","fricative","French, German, Modern Hebrew r"
],["\u0274","voiced","uvular","nasal","Japanese word-final n"
],["\u0280","voiced","uvular","trill","some French dialects, etc."
],["\u0263","voiced","velar","fricative","Spanish haga"
],["\u014B","voiced","velar","nasal","singer"
],["g","voiced","velar","stop","gag"
],["\u02A6","voiceless","alveolar","affricate","Italian zucchero, German zu, Yiddish tsimmes"
],["s","voiceless","alveolar","fricative","sit, hiss, rice, cent"
],["\u026C","voiceless","alveolar","lateral fricative","Semitic; Welsh ll"
],["t","voiceless","alveolar","stop","stop"
],["\u02A8","voiceless","alveolopalatal","affricate","Mandarin ji (cf. aspirated qi)"
],["\u0255","voiceless","alveolopalatal","fricative","Mandarin xi"
],["\u015B","voiceless","alveolopalatal","fricative","Indic"
],["\u0278","voiceless","bilabial","fricative","(like blowing out a match)"
],["p","voiceless","bilabial","stop","pep"
],["\u03B8","voiceless","dental","fricative","thing, myth"
],["h","voiceless","glottal","fricative","hit"
],["f","voiceless","labiodental","fricative","fife, laugh"
],["\u00E7","voiceless","palatal","fricative","German ich"
],["t\u0283","voiceless","palatoalveolar","affricate","church, watch"
],["\u0127","voiceless","pharyngeal","fricative","Arabic hummus"
],["\u0161","voiceless","postalveolar","fricative","ship, push, delicious"
],["\u0283","voiceless","postalveolar","fricative","ship, push, delicious"
],["t\u0282","voiceless","retroflex","affricate","Mandarin zhi (cf. aspirated chi)"
],["\u0282","voiceless","retroflex","fricative","Indic, Mandarin (sh)"
],["\u0288","voiceless","retroflex","stop","Indic"
],["\u03C7","voiceless","uvular","fricative","Semitic, Egyptian"
],["q","voiceless","uvular","stop","Arabic Qatar"
],["x","voiceless","velar","fricative","chutzpah, German ach"
],["\u1E33","voiceless","velar","stop","kick, cake"
]];

function search(status,array){
	results=range(len(array));
	if(not(status[0]==-1)){
		temp=[];
		searchval=searchv[status[0]];
		for(index=0; index<results.length; index++){
			element=results[index];
			if(array[element][1]==searchval){
				temp[temp.length]=element;
			}
		}
		results=temp;
    }
    if(not(status[1]==-1)){
		temp=[];
		searchval=searchp[status[1]];
		for(index=0; index<results.length; index++){
			element=results[index];
			if(array[element][2]==searchval){
				temp[temp.length]=element;
			}
		}
		results=temp;
    }
    if(not(status[2]==-1)){
		temp=[];
		searchval=searchm[status[2]];
		for(index=0; index<results.length; index++){
			element=results[index];
			if(array[element][3]==searchval){
				temp[temp.length]=element;
			}
		}
		results=temp;
    }
    return results;
}
function range(start, stop, step){
    if (typeof stop=='undefined'){
        // one param defined
        stop = start;
        start = 0;
    }
    if (typeof step=='undefined'){
        step = 1;
    }
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
        return [];
    }
    var result = [];
    for (var i=start; step>0 ? i<stop : i>stop; i+=step){
        result.push(i);
    }
    return result;
}
function updatestat(){
	found1=0;
	for(x=0;x<2;x++){
		if(document.getElementById(voice[x]).checked){
			found++;
			if(found==1){
				status[0]=x;
			}
		}
	}
	if(found1===0){
		status[0]=-1;
	}
	else if(found1>1){
		status[0]=-1;
		alert("more than one selected");
	}

	found2=0;
	for(x=0;x<12;x++){
		if(document.getElementById(place[x]).checked){
			found2++;
			if(found2==1){
				status[1]=x;
			}
		}
	}
	if(found2===0){
		status[1]=-1;
	}
	else if(found2>1){
		status[1]=-1;
		alert("more than one selected");
	}

	found3=0;
	for(x=0;x<6;x++){
		if(document.getElementById(place[x]).checked){
			found3++;
			if(found3==1){
				status[2]=x;
			}
		}
	}
	if(found3===0){
		status[2]=-1;
	}
	else if(found3>1){
		status[2]=-1;
		alert("more than one selected");
	}
}