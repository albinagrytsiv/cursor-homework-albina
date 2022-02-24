<<<<<<< HEAD
console.log(homework2);
=======

let N=Number(prompt("Введіть ціле мінімальне число"));
let M=Number(prompt("Введіть ціле максимальне число"));
let Число='';
let ОтриманеЧисло = 0;

if (Number.isInteger(N) && Number.isInteger(M) && N < M )
{Число = confirm('Пропускати парнi числа?')}
else{alert("Упс...Щось не так...")}

if (Число)
{for (let i=N; i<=M; i++)
    {
        if (i % 2 !==0)
        {ОтриманеЧисло +=i;}}
        alert(ОтриманеЧисло);}
   
else
{for(let i=N; i<=M; i++)  
    {
        ОтриманеЧисло +=i;}
        alert(ОтриманеЧисло);}
        alert('Можна повторити після онволення сторінки');
>>>>>>> 1e497f8de8d613cf27e834b0b54b2e285af105e6
