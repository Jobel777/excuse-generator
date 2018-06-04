/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    
    
    console.log('Hello Rigo from the console!');
    document.querySelector('.error').style.display = "none";
    
    var first = 'A';
    var adj = ['rabies-filled ', 'drowsy ', 'angry '];
    var noun = ['cow ', 'US president ', 'housecat '];
    var action = ['ate my ', 'burned my ', 'stole my '];
    var posession = ['left arm ', 'wallet ', 'face '];
    var where = ['in the streets', 'in my house', 'in my bathroom'];
    
    // declaring random variables
    
    var rdm1 = Math.floor((Math.random() * adj.length) );
    var rdm2 = Math.floor((Math.random() * noun.length) );
    var rdm3 = Math.floor((Math.random() * action.length) );
    var rdm4 = Math.floor((Math.random() * posession.length) );
    var rdm5 = Math.floor((Math.random() * where.length) );    

    var finalSentence = "A " + adj[rdm1] + noun[rdm2] + action[rdm3] + posession[rdm4] + where[rdm5];
    
    document.querySelector("#excuse").innerHTML = finalSentence;
    
    
};