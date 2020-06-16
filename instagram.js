(function lafuncion1(){

    var password1 = prompt('Hola!, ingresa la contraseña:');
    if(password1 == 'milka'){
        
    alert(' 🎉 🥁 Estás dentro!. Presiona enter para continuar:');
    
    
    console.log('flag2');
    
    stats = document.querySelectorAll('ul[class="Mr508"]');
    acum = [];
    for(i of stats){
        elemento = i.innerText.replace(',','').replace(';','').split('\n');
        acum.push(elemento)
    }
    let csvContent = "data:text/csv;charset=utf-8," + acum.map(e => e.join(";")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Mi_Concurso.csv");
    document.body.appendChild(link); 
    link.click()
    } else{alert('⚰️ Esa no es la contraseña!... explotando en 5,4,3....🔥💣🧨');}
    
    }
    
    )();