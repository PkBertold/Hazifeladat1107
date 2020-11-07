let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    'Miért nem vesz a rendőr zsebszámológépet? Mert fejből is tudja, hogy hány zsebe van...', 
    'Hogy hívják az erdőgazdálkodási informatikust? Fakocka!', 
    'Hol terem a CD ROM? DISCréten.',
    'Mit csinál a kaméleon a sütőben? Beleolvad a környezetébe. ',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
