var haslo="Czy chcesz otworzyć cziperki";
haslo = haslo.toUpperCase();

var dlugosc=haslo.length;

var haselko="";

var numOfChar = 35;
var litery = new Array(numOfChar);
var a = 0;
var b = 0;
for(i=0; i<numOfChar; i++){
    if (i==1) {litery[i]="Ą";}
    else if (i==4) {litery[i]="Ć";}
    else if (i==7) {litery[i]="Ę";}
    else if (i==15) {litery[i]="Ł";}
    else if (i==18) {litery[i]="Ń";}
    else if (i==20) {litery[i]="Ó";}
    else if (i==25) {litery[i]="Ś";}
    else if (i==33) {litery[i]="Ż";}
    else if (i==34) {litery[i]="Ź";}
    else {
        litery[i] = String.fromCharCode('A'.charCodeAt() + a)
        a++;
    }
}


for (i=0; i<dlugosc; i++){
    if (haslo.charAt(i)==" ") haselko=haselko+" ";
    else haselko=haselko+"_";
}

function wypisz_haslo(){
    document.getElementById("plansza").innerHTML = haselko;
}

window.onload = start;

function start(){

    var tresc_diva = "";

    for(i=0; i<35; i++){
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="lit'+i+'">'+litery[i]+'</div>';
        if ((i+1)%7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet").innerHTML=tresc_diva;

    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak){
    if (miejsce>this.length-1) return this.toString();
    else return this.substr(0, miejsce)+znak+this.substr(miejsce+1);
}

function sprawdz(nr){
    
    var trafiona = false;

    for (i=0; i<dlugosc; i++){
        if (haslo.charAt(i)==litery[nr]){
            haselko=haselko.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }

    if (trafiona == true) {
        var element = "lit"+nr;
        document.getElementById(element).className = "trafiona_literka";
        wypisz_haslo();
    }

    else {
        b=b+1;
        var element = "lit"+nr;
        document.getElementById(element).className = "nietrafiona_literka";
        document.getElementById(element).setAttribute("onclick",";")
        document.getElementById("szubienica").innerHTML="<img src=\"img/s"+b+".jpg\" alt=\"\"/>";
        if (b==9){
            document.getElementById("alfabet").innerHTML="<p class=\"buttonik\" onClick=\"window.location.reload();\">SPRÓBUJ JESZCZE RAZ<p>";
            document.getElementById("szubienica").innerHTML="<p>GAMEOVER</p>";
        }
    }
    
}