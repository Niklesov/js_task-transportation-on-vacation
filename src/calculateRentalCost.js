function calculateRentalCost(days) {
  let sum = 0;

  if (days < 3) {
    for (let i = 0; i < days; i++) {
      sum += 40;
    }

    return sum;
  }

  if (days < 7) {
    for (let i = 0; i < days; i++) {
      sum += 40;
    }

    return sum - 20;
  }

  if (days >= 7) {
    for (let i = 0; i < days; i++) {
      sum += 40;
    }

    return sum - 50;
  }
}

module.exports = calculateRentalCost;
