const getMaxDigit= (n)=>+Math.max(...(n+'').split(''));
    console.log(getMaxDigit(1236));



function pow(a,b){
let result=a;
for (let i=1;i<b;i++){
    result *=a;
}
return result;
}
console.log(pow(3,3));



const formatImeni=userName=>userName.replace('а','А');
console.log(formatImeni('альбіна'));



const SumaPislaPodatky=(n)=>(n-(n*0,195));
console.log(SumaPislaPodatky(1000));



function  getRandomNumber(n,m) {
   return Math.floor(Math.random()*(m-n+1))+n;
}
console.log(getRandomNumber(1,10));



function  getRandomPassword(){
    let length=6;
    let number='0123456789';
    let password='';
    for (let i=0,n=number.length;i<length;++i){
        password+=number.charAt(Math.floor(Math.random()*n));
    }
    return password;
}
console.log(getRandomPassword());



const deleteLetters=letters=>letters.replace(/[a]/gi, '');
console.log(deleteLetters('blablabla'));



function palidrome(str){
    str=str.toUpperCase().replace(/\s/g,'');
    return str===str.split('').reverse().join('');
}
console.log(palidrome('мадам'));
console.log(palidrome('кокос'));
console.log(palidrome('Я несу гусеня'));


Document.writeln  (`

    Функція №1: ${getMaxDigit(1236)}<br>
    Функція №2: ${pow(3, 3)}<br>
    Функція №3: ${formatImeni('альбіна')}<br>
    Функція №4: ${SumaPislaPodatky(1000)}<br>
    Функція №5: ${getRandomNumber(1, 10)}<br>
    Функція №8:${getRandomPassword()}<br>
    Функція №9: ${(deleteLetters('blablabla'))}<br>
    Функція №10: ${palidrome('мадам')}<br>
                 ${palidrome('кокос')}<br>
                 ${palidrome('Я несу гусеня')}<br>

   

    `)