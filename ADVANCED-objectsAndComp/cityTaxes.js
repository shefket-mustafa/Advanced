function cityTaxes(townName, population, treasury) {
  let city = {
    name: townName,
    population: population,
    treasury: treasury,
    taxRate: 10,

    collectTaxes: function () {
      this.treasury += Math.floor(this.population * this.taxRate);
    },

    applyGrowth: function (percentage) {
      this.population += Math.floor((percentage / 100) * this.population);
    },

    applyRecession: function (percentage) {
      this.treasury -= this.treasury*(percentage/100 -1);
    },
  };
  return city;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
