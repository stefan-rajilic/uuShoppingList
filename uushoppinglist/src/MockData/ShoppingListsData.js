export const shoppingListData = [
  {
    id: "1",
    Name: "Rodinný nákup",
    Owner: [
      { name: "Karel", id: 1 },
    ],
    Members: [
      { name: "Marek", id: 2 },
      { name: "Filip", id: 5},
    ],
    Items: [
      { name: "Mléko", quantity: 2, isCompleted: false },
      { name: "Chléb", quantity: 1, isCompleted: false },
      { name: "Jablká", quantity: 5, isCompleted: false },
      { name: "Cukr", quantity: 1, isCompleted: false },
      { name: "Vajíčka", quantity: 12, isCompleted: false },
    ],
    Archived: false,
    Done: false,
  },
  {
    id: "2",
    Name: "Nákup - večerka",
    Owner: [
      { name: "Stefan", id: 3},
    ],
    Members: [
      { name: "Jan", id: 4 },
      { name: "Filip", id: 5},
    ],
    Items: [
      { name: "Mléko", quantity: 2, isCompleted: false },
      { name: "Jogurt", quantity: 4, isCompleted: false },
    ],
    Archived: true,
    Done: false,
  },
  {
    id: "3",
    Name: "Alza",
    Owner: [
      { name: "Jan", id: 4 },
    ],
    Members: [
      { name: "Karel", id: 1 },
      { name: "Stefan", id: 3},
    ],
    Items: [
      { name: "Tužky", quantity: 4, isCompleted: false },
      { name: "Papír", quantity: 1, isCompleted: false },
      { name: "Monitor", quantity: 1, isCompleted: false },
      { name: "Myš", quantity: 2, isCompleted: false },
    ],
    Archived: false,
    Done: false,
  },
  {
    id: "4",
    Name: "Nákup na oslavu",
    Owner: [
      { name: "Marek", id: 2 },
    ],
    Members: [
      { name: "Jan", id: 4 },
      { name: "Filip", id: 5},
    ],
    Items: [
      { name: "Pivo", quantity: 40, isCompleted: false },
      { name: "Stolní hry", quantity: 2, isCompleted: false },
      { name: "Kelímky", quantity: 20, isCompleted: false },
      { name: "Maso", quantity: 10, isCompleted: false },
      { name: "Ubrousky", quantity: 10, isCompleted: false },
    ],
    Archived: false,
    Done: true,
  },
  {
    id: "5",
    Name: "Oprava automobilu",
    Owner: [
      { name: "Filip", id: 5 },
    ],
    Members: [
      { name: "Karel", id: 1 },
      { name: "Marek", id: 2},
    ],
    Items: [
      { name: "Nárazník", quantity: 1, isCompleted: false },
      { name: "Blatník", quantity: 2, isCompleted: false },
      { name: "Airbag", quantity: 5, isCompleted: false },
      { name: "Výfuk", quantity: 1, isCompleted: false },
      { name: "Sedačky", quantity: 2, isCompleted: false },
      { name: "Kola", quantity: 4, isCompleted: false },
      { name: "Pneumatiky", quantity: 4, isCompleted: false },
    ],
    Archived: false,
    Done: false,
  },
];
