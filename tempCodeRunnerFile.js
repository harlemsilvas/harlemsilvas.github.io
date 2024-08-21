/** 
 * Buscar idade do usuario
 * Se a idade for maior ou igual a 18
 * - Deixa entrar
 * Se não
 * - Bloquear a entrada 
 */ 
/*
const idade = 18;
if(idade >= 18){
    console.log('Deixa entrar')
} else {
    console.log('Bloquear a entrada')
}
    */

const matematica = 6;
const fisica = 5;
const portugues = 3;
const quimica = 2;

const media = (matematica + fisica + portugues + quimica) / 4;
if (media >= 8 && media <=9) {
    console.log('Aprovado, usuario ganhou mais um ponto', media);
} else if (media >= 6 && media < 8) {
    console.log('Aprovado, ', media);
} else if(media > 9) {
    console.log('Aprovado, ', media);
} else {
    console.log('Reprovado !', media);
}




