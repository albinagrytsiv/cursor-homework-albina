console.log("Test homework")
const CarrotPrice=15.678;
const BroccoliniPrice=123.965;
const PapayaPrice=90.2345;

const maxPrice=Math.max(CarrotPrice,BroccoliniPrice,PapayaPrice);
console.log(maxPrice);

const minPrice=Math.min(CarrotPrice,BroccoliniPrice,PapayaPrice);
console.log(minPrice);

const sumPrice=(CarrotPrice+BroccoliniPrice+PapayaPrice);
console.log(sumPrice);

const sumRoundPrice=Math.floor(CarrotPrice)+Math.floor(BroccoliniPrice)+Math.floor(PapayaPrice);
console.log(sumRoundPrice);

const roundTo100=Math.round(sumRoundPrice/100)*100;
console.log(roundTo100);

if (sumRoundPrice %2==0){
console.log('else')
} else {
    console.log('odd')
};

const rest=500-sumPrice;
console.log(rest);

const averagePrice=(sumPrice/3).toFixed(2);
console.log(averagePrice);

const sale=Math.round(Math.random()*(100-1)+1);
console.log(sale);

const discount=sumPrice*sale;
const sumToPay=(sumPrice-discount/100).toFixed(2);
console.log(sumToPay);

const netProfit=sumToPay-(sumPrice/2);
console.log(netProfit.toFixed(2));

document.writeln(  `

     <p> Максимальна ціна: ${maxPrice} </br>
     Мінімальна ціна: ${minPrice} </br>
     Вартість всіх товарів: ${sumPrice} </br>
     Вартість заокруглена в меншу сторону: ${sumRoundPrice} </br>
     Сума товарів округлена до сотень:${roundTo100} </br>
     Парне чи непарне число:${sumRoundPrice %2==0} </br>
     Сума решти: ${rest} </br>
     Середнє значення цін: ${averagePrice} </br>
     Знижка:${sale} % </br>
     Сума до оплати після знижки: ${sumToPay} </br>
     Чистий прибуток: ${netProfit.toFixed(2)} </br>
</p>
    `)











