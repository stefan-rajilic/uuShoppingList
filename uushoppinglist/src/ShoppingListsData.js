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
      { name: "Mléko", quantity: 2 },
      { name: "Chléb", quantity: 1 },
      { name: "Jablká", quantity: 5 },
      { name: "Cukr", quantity: 1 },
      { name: "Vajíčka", quantity: 12 },
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
      { name: "Mléko", quantity: 2 },
      { name: "Jogurt", quantity: 4 },
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
      { name: "Tužky", quantity: 4 },
      { name: "Papír", quantity: 1 },
      { name: "Monitor", quantity: 1 },
      { name: "Myš", quantity: 2 },
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
      { name: "Pivo", quantity: 40 },
      { name: "Stolní hry", quantity: 2 },
      { name: "Kelímky", quantity: 20 },
      { name: "Maso", quantity: 10 },
      { name: "Ubrousky", quantity: 10 },
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
      { name: "Nárazník", quantity: 1 },
      { name: "Blatník", quantity: 2 },
      { name: "Airbag", quantity: 5 },
      { name: "Výfuk", quantity: 1 },
      { name: "Sedačky", quantity: 2 },
      { name: "Kola", quantity: 4 },
      { name: "Pneumatiky", quantity: 4 },
    ],
    Archived: false,
    Done: false,
  },
];
