import { db } from "~/db";

const ReadCountries = async () => {
  const allCountries = await db.query?.countries.findMany();
  return (
    <div className="grid grid-cols-2 gap-4">
      {allCountries?.map((country) => (
        <div key={country.id}>
          <h2>{country.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ReadCountries;