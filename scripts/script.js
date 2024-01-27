document.getElementById("cp").addEventListener('input', function () {
  if (this.value.length === 5) {
    
  					let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre`;
  					fetch(url).then((response) =>
  response.json().then((data) => {
  					let liste = "<ul>"
  					for (let i of data) {
  										liste += `<li>${i.nom} - ${i.population} Habitants</li> <br />`;
  					}
  					liste += "</ul>";
  					document.getElementById("content").innerHTML = liste;
  })
);
  					
  }
});

