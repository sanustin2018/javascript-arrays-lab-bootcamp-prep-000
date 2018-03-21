const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name) {
 kittens.push(name)
}
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}
var kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name){
  kittens.push(...name)
}