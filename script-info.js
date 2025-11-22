const urlParams = new URLSearchParams(window.location.search);
const saberId = parseInt(urlParams.get('id'));
const saber = lightsaberItems[saberId];

const main = document.getElementById('saber-main');
main.innerHTML = saber.fullDescription;