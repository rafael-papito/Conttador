function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Faltam dados!")
    }else{
        res.innerHTML=`<p>Contando:</p>`
        var i = Number(inicio.value)
        var f=  Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert("Passo Invalido! Considerando 1")
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F929}`
            }
        }else {
            for( var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F929}`
            }
        }
    }
}