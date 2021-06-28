//Checkpoit

//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão); 


//função microondas
function microondas(pratos, tempo){
    switch(pratos){
        case "pipoca":
            if (tempo<10)
            console.log("Tempo Insuficiente!");
            else if (tempo>=20 && tempo <=29)
            console.log("A comida queimou!");
            else if (tempo >=10 && tempo<=19)
            console.log("Prato pronto, bom apetite!");
            else
            console.log("Kabummm!")
        break; 
        case "macarrao":
            if (tempo<8)
            console.log("Tempo Insuficiente!");
            else if (tempo>=16 && tempo <=23)
            console.log("A comida queimou!");
            else if (tempo >=8 && tempo<=15)
            console.log("Prato pronto, bom apetite!");
            else
            console.log("Kabummm!")
        break;   
        case "carne":
            if (tempo<15)
            console.log("Tempo Insuficiente!");
            else if (tempo>=30 && tempo <=44)
            console.log("A comida queimou!");
            else if (tempo >=15 && tempo<=29)
            console.log("Prato pronto, bom apetite!");
            else
            console.log("Kabummm!")
        break;
        case "feijao":
            if (tempo<12)
            console.log("Tempo Insuficiente!");
            else if (tempo>=24 && tempo <=34)
            console.log("A comida queimou!");
            else if (tempo >=12 && tempo<=23)
            console.log("Prato pronto, bom apetite!");
            else
            console.log("Kabummm!")
        break
        case "brigadeiro":
            if (tempo<8)
            console.log("Tempo Insuficiente!");
            else if (tempo>=16 && tempo <=23)
            console.log("A comida queimou!");
            else if (tempo >=8 && tempo<=15)
            console.log("Prato pronto, bom apetite!");
            else
            console.log("Kabummm!")
        break
        default:
            return console.log("Prato inexistente !!!")
    }
}
microondas("pipoca");
microondas("macarrao", 10);
microondas("carne", 10);
microondas("feijao", 10);
microondas("brigadeiro", 10);
