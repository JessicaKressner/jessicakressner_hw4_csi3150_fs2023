const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: (src = "./images/toyotaCamry.jpg"),
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: (src = "./images/hondaCivic.avif"),
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: (src = "./images/fordFusion.webp"),
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: (src = "./images/nissanAltima.jpg"),
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: (src = "./images/chevroletMalibu.jpg"),
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: (src = "./images/volkswagonPassat.jpg"),
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: (src = "./images/hyundaiElantra.jpg"),
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: (src = "./images/subaruOutback.jpg"),
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: (src = "./images/mazdaCX.jpg"),
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: (src = "./images/kiaSorento.jpg"),
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: (src = "./images/dodgeChallenger.jpg"),
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: (src = "./images/cadillacXT5.jpg"),
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: (src = "./images/jaguarFPACE.jpg"),
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: (src = "./images/teslaModelS.jpg"),
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: (src = "./images/porscheCayenne.jpg"),
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: (src = "./images/lexusEs.jpg"),
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: (src = "./images/BMW5Series.jpg"),
  },
];

//module.exports = usedCars;
//export default usedCars;
/*
function filters() {
  let array = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  checkboxes.forEach((item)=>{
    array.push(item.value);
  })
}

const selectCars = usedCars.filter((cars) => {
  cars.make = Toyota;
})*/

// creates the car cards dynamically
function carCards() {
  let carcards = document.getElementById("carcards");
  usedCars.forEach((car) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
      <img src="${car.image}" alt="${car.make}${car.model}" width: 100%/>
      <h1>${car.year} ${car.make} ${car.model}</h1>
      <p>Price: ${car.price.toLocaleString()}</p>
      <p>Mileage: ${car.mileage.toLocaleString()}</p>
      <p>Color: ${car.color}</p>
      <p>Gas Mileage: ${car.gasMileage} </p>
      <button class="purchaseCar">Purchase Car</button>`;
    document.querySelector("#carcards").appendChild(card);
  });
}

// calls the method to create the dynamic car cards
carCards();

/*
function displayCarMake() {
  const content = document.getElementById("dropdownContent");
  if (content.style.visibility === "hidden") {
    content.style.visibility = "visible";
  } else {
    content.style.visibility = "hidden";
  }
}*/
