var cardArtigo = document.querySelector('card');

fetch('artigos.json')
    .then(gerarCardArtigo (response) {
        return response.blob();
    })
    .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    });