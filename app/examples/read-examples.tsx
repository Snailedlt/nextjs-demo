import { db } from "~/db";
import { BananaFunsiesDisplay } from "./banana-funsies-display";

export const ReadExamples = async () => {
  const examples = await db.query.example.findMany({
    orderBy: (column, sort) => sort.desc(column.id),
  });
  return (
    <div className="flex flex-col gap-4">
      <h1>Examples</h1>
      <BananaFunsiesDisplay examples={examples} />
    </div>
  );
};
