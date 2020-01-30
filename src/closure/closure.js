// Ejemplo 1 - No es un closure

const moneyBox = coins => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// Ejemplo 2 - Es un closure

const moneyBoxClosure = () => {
  var saveCoins = 0;
  const countCoins = coins => {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBoxClosure();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
