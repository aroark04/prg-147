function start(){

class House {
    constructor(rooms, bathrooms, color, floors) {
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.color = color;
        this.floors = floors
    }
}
function houseStats() {
    return `This house has ${this.rooms} rooms, and ${this.bathrooms} bathrooms, and its a beautiful ${this.color} color! It also has ${this.floors} floors.`;
}
let house1 = new House(4, 2, "black", 2);
let house2 = new House(5, 3, "grey", 2);
let house3 = new House(3, 1, "yellow", 1);
let house4 = new House(7, 5, "white", 2);

document.getElementById("house1").innerHTML = houseStats(house1);
document.getElementById("house2").innerHTML = houseStats(house2);
document.getElementById("house3").innerHTML = houseStats(house3);
document.getElementById("house4").innerHTML = houseStats(house4);

}