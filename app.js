const fs = require("node:fs/promises");
const os = require("node:os");
const process = require("node:process");

//Mark Tasaka Lab 4
fs.readFile("./menu.csv")
  .then((data) => {
    //console.log(data.toString())
    data = data.toString();
    const foodColumn = data.split(os.EOL);

    //Declare empty 2-d array for Menu
    let menu = [];

    //console.log(foodColumn);
    for (i = 0; i < foodColumn.length; i++) {
      const tempArray = foodColumn[i].split(`,`);
      //console.log(tempArray);
      menu.push(tempArray);
    }

    //2D menu array
    console.log(menu);

    //price array
    let prices = [];

    for (i = 0; i < menu.length; i++) {
      let itemPrice = menu[i][3];
      itemPrice = itemPrice.replace("$", "");
      Number(itemPrice);
      itemPrice = itemPrice * 1.8;
      itemPrice = itemPrice.toFixed(2);
      prices.push(itemPrice);
    }

    //test price array values
    console.log(prices);

    for (i = 0; i < menu.length; i++) {
      const item = "$" + prices[i].toString();
      menu[i][3] = item;
    }

    //item updated menu
    console.log(menu);

    const test = "adkjasldjsklajdklsajkda";

    //arrays for lunch. dinner & desert
    let lunch = [];
    let dinner = [];
    let dessert = [];

    let menuPrint = "";

    for (i = 0; i < menu.length; i++) {
      if (menu[i][0] === "lunch") {
        lunch.push(menu[i][3]);
        lunch.push(menu[i][1]);
        lunch.push(menu[i][2]);
      }
      if (menu[i][0] === "dinner") {
        dinner.push(menu[i][3]);
        dinner.push(menu[i][1]);
        dinner.push(menu[i][2]);
      }
      if (menu[i][0] === "dessert") {
        dessert.push(menu[i][3]);
        dessert.push(menu[i][1]);
        dessert.push(menu[i][2]);
      }
    }

    for (i = 0; i < menu.length; i++) {
      if (lunch.length > 0) {
        for (i = 0; i < lunch.length; i++) {
          if (lunch[i] === lunch[0]) {
            menuPrint = menuPrint + "* Lunch Items *" + os.EOL;
            menuPrint = menuPrint + lunch[i];
          }
        }
      }
    }

    fs.writeFile("./menu.txt", test)
      .then(() => {})
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
