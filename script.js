/**
 * Jogo de Cartas c/ Array
 * @author Letícia França
 */

let nipes = ['♥','♦','♣','♠'];
let faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let nipe = nipes[Math.floor(Math.random()*4)];
let face = faces[Math.floor(Math.random()*faces.length)];

document.write("<h1>" + face + nipe + "</h1>");