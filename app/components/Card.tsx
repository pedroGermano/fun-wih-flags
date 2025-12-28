const Card = () => {
  return (
    <section className="h-full bg-white rounded-lg shadow-lg">
      <div className="aspect-video w-full">
        <img
          className="w-full h-full object-cover"
          src="https://placehold.co/600x400"
          alt="bandeira"
        />
      </div>
      <div className="p-6 text-sm text-gray-600">
        <h2 className="text-xl font-semibold mb-4">Brasil</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <span>Capital:</span>
            <span>Brasilia</span>
          </div>
          <div>
            <span>Region:</span>
            <span>South America</span>
          </div>
          <div>
            <span>Population:</span>
            <span>214300000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
