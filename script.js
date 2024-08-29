const users = [
  {
    userId: 1,
    name: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    vehicles: [
      { type: "Car", brand: "Toyota", model: "Corolla", year: 2017 },
      { type: "Bicycle", brand: "Giant", model: "Defy", year: 2020 },
    ],
  },
  {
    userId: 2,
    name: "Bob Smith",
    age: 34,
    email: "bob.smith@example.com",
    vehicles: [
      { type: "Car", brand: "Honda", model: "Civic", year: 2018 },
      { type: "Car", brand: "Toyota", model: "Corolla", year: 2018 }, // Similar to Alice
    ],
  },
  {
    userId: 3,
    name: "Charlie Brown",
    age: 22,
    email: "charlie.brown@example.com",
    vehicles: [
      { type: "Motorcycle", brand: "Yamaha", model: "R3", year: 2021 },
    ],
  },
  {
    userId: 4,
    name: "David Wilson",
    age: 45,
    email: "david.wilson@example.com",
    vehicles: [
      { type: "Car", brand: "Ford", model: "Focus", year: 2016 },
      { type: "Car", brand: "Ford", model: "F-150", year: 2020 },
    ],
  },
  {
    userId: 5,
    name: "Eva Green",
    age: 31,
    email: "eva.green@example.com",
    vehicles: [
      { type: "Bicycle", brand: "Trek", model: "FX 3", year: 2019 },
    ],
  },
  {
    userId: 6,
    name: "Frank Harris",
    age: 29,
    email: "frank.harris@example.com",
    vehicles: [
      { type: "Car", brand: "Honda", model: "Civic", year: 2018 }, // Similar to Bob
    ],
  },
  {
    userId: 7,
    name: "Grace Lee",
    age: 27,
    email: "grace.lee@example.com",
    vehicles: [
      { type: "Car", brand: "Tesla", model: "Model 3", year: 2022 },
      { type: "Bicycle", brand: "Specialized", model: "Sirrus", year: 2020 },
    ],
  },
  {
    userId: 8,
    name: "Henry Adams",
    age: 39,
    email: "henry.adams@example.com",
    vehicles: [
      { type: "Car", brand: "Toyota", model: "Camry", year: 2017 }, // Similar to User 1's Toyota brand
    ],
  },
  {
    userId: 9,
    name: "Ivy Clark",
    age: 33,
    email: "ivy.clark@example.com",
    vehicles: [
      { type: "Motorcycle", brand: "Kawasaki", model: "Ninja 400", year: 2021 },
    ],
  },
  {
    userId: 10,
    name: "Jack Martin",
    age: 42,
    email: "jack.martin@example.com",
    vehicles: [
      { type: "Car", brand: "Ford", model: "Focus", year: 2016 }, // Similar to David
    ],
  },
];

console.log(users);
