let esSuperman:boolean = true;
let esBatman:boolean;
let esAcuaman:boolean = true;

if (esSuperman)
{
    console.log("Estamos salvados!!");
}
else
{
    console.log("Ooops! ohh");
}

esSuperman = ConvertirClark();

if (esSuperman)
{
    console.log("Estamos salvados!!");
}
else
{
    console.log("Ooops! ohh");
}

function ConvertirClark()
{
    return false;
}