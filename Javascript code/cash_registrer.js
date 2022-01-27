function checkCashRegister(price, cash, cid) {
  let result = {status: "", change: []};
  let restCash = (cash - price).toFixed(2);
  let amount = 0;
  let spacesUsed = 0;
  let i = 0;
  const moneyvalues = [100,20,10,5,1,0.25,0.1,0.05,0.01];
  
  if(cash < price) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  } else if(cash >= price) {
    result.status = "OPEN";
    for(let billsAndCoins in cid) {
      billsAndCoins = moneyvalues.length - 1 - i;
    if(restCash >= moneyvalues[i] && restCash > 0) {

      if(cid[billsAndCoins][1] < restCash)  {
        amount = cid[billsAndCoins][1];
        restCash -= amount;
        restCash = restCash.toFixed(2);
        result.change.push([]);
        result.change[spacesUsed][0] = cid[billsAndCoins][0]; 
        result.change[spacesUsed][1] = amount;
        spacesUsed++;
      } else if(cid[billsAndCoins][1] >= restCash) {
        amount = parseInt(restCash / moneyvalues[i]);
        restCash -= amount * moneyvalues[i];
        restCash = restCash.toFixed(2);
        result.change.push([]);
        result.change[spacesUsed][0] = cid[billsAndCoins][0]; 
        result.change[spacesUsed][1] = amount * moneyvalues[i];
        spacesUsed++;
      } else {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      }
    }
    i++; 
  }
  
  let check = 0;
  for(let money in result.change) {
    check += result.change[money][1];
  }

  let restOnCashInDrawer = 0;
  for(let money in cid) {
    restOnCashInDrawer += cid[money][1];
  }

  if(check.toFixed(2) != (cash - price)) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  } else if(check.toFixed(2) == restOnCashInDrawer.toFixed(2)) {
    result.status = "CLOSED";
    result.change = [...cid];
    return result;
  }

    return result;
  } else {
    result.status = "CLOSED";
    return result;
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));