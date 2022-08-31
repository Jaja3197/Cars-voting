var mouses = document.querySelectorAll(".choices img"),
mouses = Array.prototype.slice.call ( mouses ); //premena na pole 

mouses.forEach (function(mouse) {            //každý na ktorého bude zavolaná funkcia sa uloží do 
    
//SCORE
    mouse.addEventListener ("click", function() { 
    var scoreElement = this.nextElementSibling,  //súrodenec mouse - teda img je p
        score = Number( scoreElement.textContent); //premena zo stringu na číslo
        ++score;
        scoreElement.textContent = score; 
    });    

//pomocou toggle na prepínanie classov:  
var array = [("mouseout"),("mouseover")]; //vytvorenie pola s eventami
for (var i = 0; i<array.length; i++) {    //Cyklus
     var iEvent = array[i];               //uloženie daného eventu z poľa do premennej
    mouse.addEventListener(iEvent, desaturation, false); // V cykle pripneme eventListener na kazdy event z pola
        
    function desaturation() {
    otherMouse = _.without(mouses, this)[0],
     otherMouse.classList.toggle("desaturate"); //použijeme toggle na zmenenie triedy
    }; };
});



   
