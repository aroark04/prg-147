function calculate() {
    var chi = '';
    myname = document.getElementById("fname").value;
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    year = parseInt(document.getElementById("year").value);


    switch (birthYear % 12) {
        case 0:
          console.log("Your Chinese zodiac sign is the Monkey.");
          break;
        case 1:
          console.log("Your Chinese zodiac sign is the Rooster.");
          break;
        case 2:
          console.log("Your Chinese zodiac sign is the Dog.");
          break;
        case 3:
          console.log("Your Chinese zodiac sign is the Pig.");
          break;
        case 4:
          console.log("Your Chinese zodiac sign is the Rat.");
          break;
        case 5:
          console.log("Your Chinese zodiac sign is the Ox.");
          break;
        case 6:
          console.log("Your Chinese zodiac sign is the Tiger.");
          break;
        case 7:
          console.log("Your Chinese zodiac sign is the Rabbit.");
          break;
        case 8:
          console.log("Your Chinese zodiac sign is the Dragon.");
          break;
        case 9:
          console.log("Your Chinese zodiac sign is the Snake.");
          break;
        case 10:
          console.log("Your Chinese zodiac sign is the Horse.");
          break;
        case 11:
          console.log("Your Chinese zodiac sign is the Sheep.");
          break;
        default:
          console.log("Invalid birth year.");
      }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}