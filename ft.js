
const userBrut = { actif: "trude" };
const resultats = [10, "15", "20", "invalid", null];

console.log(Array.isArray(resultats));


function corrigerUser(user) {
  return {
    res: Array.isArray(user) ? user.map(r => Number(r)).filter(a => !isNaN(a) > 0) : ""
  };
};


console.log(corrigerUser(resultats));



