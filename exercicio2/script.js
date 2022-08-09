let nacionalidade = prompt("Digite aqui a sua nacionalidade:").toLowerCase();

/*if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

/*if (nacio === ("brasileira" || "brasileiro")) {
    alert('Nacionalidade brasileiro(a)')
} else if (nacio === ("argentina" || "argentino")) {
    alert('Nacionalidade argentino(a)')
} else if (nacio === ("urugaia" || "urugaio")) {
    alert('Nacionalidade urugaio(a)')
} else if (nacio === ("chilena" || "chileno")) {
    alert('Nacionalidade chileno(a)')
} else if (nacio === ("colombiana" || "colombiano")) {
    alert('Nacionalidade colombiano(a)')
} else {
    alert('Nacionalidade não encontrada')
}*/


switch (nacionalidade) {
    case "brasileira":
        console.log('Nacionalidade brasileira')
         break;
    case "brasileiro":
            console.log('Nacionalidade brasileiro')
             break;
    case "argentina" || "argentino": 
        console.log('Nacionalidade argentina')
        break;
    case "argentino": 
        console.log('Nacionalidade argentino')
        break;
    case "urugaia" || "urugaio":
        console.log('Nacionalidade urugaia')
        break;
    case "urugaio":
            console.log('Nacionalidade urugaio')
            break;
    case "chilena":
        console.log('Nacionalidade chilena')
        break;
    case "chileno":
            console.log('Nacionalidade chileno')
        break;
    case "colombiana":
        console.log('Nacionalidade colombiana')
        break;
    case "colombiano":
        console.log('Nacionalidade colombiano')
        break;
    default: 
    console.log('Nacionalidade não encontrada')
}
