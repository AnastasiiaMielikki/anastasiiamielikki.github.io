function init() {
  var text = function makePhrases() {
    var meat = [
      "курица",
      "свинина",
      "индейка",
      "рыба",
      "говядина",
      "морепродукты"
    ];
    var garnire = [
      "гречка",
      "рис",
      "макароны",
      "овощная смесь",
      "киноа"
    ];
    var vegetables = [
      "огурец",
      "помидор",
      "фасоль",
      "кукуруза",
      "капуста"
    ];
    var fruit = [
      "банан",
      "яблоко",
      "апельсин"
    ];

    var rand1 = Math.floor(Math.random() * meat.length);
    var rand2 = Math.floor(Math.random() * garnire.length);
    var rand3 = Math.floor(Math.random() * vegetables.length);
    var rand4 = Math.floor(Math.random() * fruit.length);
    var phrase = meat[rand1] + " "  + garnire[rand2] + " "  + vegetables[rand3] + " "  + fruit[rand4];
    return phrase;
  };   
  
  document.getElementById("generate").onclick = function() {
    document.getElementById("CountryResult").innerHTML = text();
    document.getElementById("CountryResult2").innerHTML = text();
    document.getElementById("CountryResult3").innerHTML = text();
    document.getElementById("CountryResult4").innerHTML = text();
    document.getElementById("CountryResult5").innerHTML = text();
    document.getElementById("CountryResult6").innerHTML = text();
    document.getElementById("CountryResult7").innerHTML = text();
    document.getElementById("CountryResult8").innerHTML = text();
    document.getElementById("CountryResult9").innerHTML = text();
    document.getElementById("CountryResult10").innerHTML = text();
    document.getElementById("CountryResult11").innerHTML = text();
    document.getElementById("CountryResult12").innerHTML = text();
    document.getElementById("CountryResult13").innerHTML = text();
    document.getElementById("CountryResult14").innerHTML = text();
  };
}

window.onload = init;
