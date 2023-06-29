import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { addExampleAction } from "./_actions";

export const NewExample = () => {
  return (
    <form
      action={addExampleAction}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input placeholder="Name" name="name" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
