function media(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var val3 = document.getElementById('valor3').value;
    var val4 = document.getElementById('valor4').value;

    var result =(parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4))/4;

    
    alert(result);
}

