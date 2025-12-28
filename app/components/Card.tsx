type CardProps = {
  id: string;
  country: string;
  capital: string;
  region: string;
  population: string;
};

const Card = ({ id, country, capital, region, population }: CardProps) => {
  return (
    <section
      id={id}
      className="h-full overflow-hidden bg-white rounded-lg shadow-lg"
    >
      <div className="aspect-video w-full">
        <img
          className="w-full h-full object-cover"
          src="https://placehold.co/600x400"
          alt="bandeira"
        />
      </div>
      <div className="p-6 text-sm text-gray-600">
        <h2 className="text-xl font-semibold mb-4">{country}</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Capital:</span>
            <span>{capital}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Region:</span>
            <span>{region}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Population:</span>
            <span>{population}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
