var pp = document.querySelector('#app p');

function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            resolve();
        } else {
            reject();
        }
    })
   }

checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    var todoText = document.createTextNode("Maior que 18");
    pp.innerHTML = "";
    pp.appendChild(todoText);

    })
    .catch(function() {
    console.log("Menor que 18");
    var todoText = document.createTextNode("Menor que 18");
    pp.innerHTML = "";
    pp.appendChild(todoText);
    });
