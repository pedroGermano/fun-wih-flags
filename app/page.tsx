import { Header, Card, Footer } from "./components";
const countries = [
  {
    id: "1",
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    population: "203062512",
  },
  {
    id: "2",
    country: "South Korea",
    capital: "Seoul",
    region: "East Asia",
    population: "51780579",
  },
  {
    id: "3",
    country: "United States",
    capital: "Washington, D.C.",
    region: "North America",
    population: "331893745",
  },
  {
    id: "4",
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: "38929902",
  },
  {
    id: "5",
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: "83294633",
  },
  {
    id: "6",
    country: "France",
    capital: "Paris",
    region: "Europe",
    population: "67749632",
  },
  {
    id: "7",
    country: "Japan",
    capital: "Tokyo",
    region: "East Asia",
    population: "123294513",
  },
  {
    id: "8",
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "26644821",
  },
  {
    id: "9",
    country: "United Kingdom",
    capital: "London",
    region: "Europe",
    population: "68207114",
  },
  {
    id: "10",
    country: "Mexico",
    capital: "Mexico City",
    region: "North America",
    population: "129150971",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {countries.map(({ id, country, capital, region, population }) => (
          <Card
            key={id}
            id={id}
            country={country}
            capital={capital}
            region={region}
            population={population}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
