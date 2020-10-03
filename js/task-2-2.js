const calculateEngravingPrice = (message = " ", pricePerWord = 0) =>
      message.split(" ").length * pricePerWord;
// console.log(message, pricePerWord);
// pricePerWord;


 console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
 console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
console.log(calculateEngravingPrice('Uno', 100)); // 100
