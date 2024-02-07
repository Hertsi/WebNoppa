document.getElementById('dice').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    this.getElementsByTagName('img')[0].src = './img/' + randomNumber + '.png';
});