import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { addCountryAction } from "./_actions";
import { Label } from "~/components/ui/label";

const CreateCountry = () => {
    return (
        <form action={addCountryAction} className="w-2/3 space-y-6">
            <Label htmlFor="countryinput">Add a Country to the database</Label>
            <Input name="countryinput" type="text" placeholder="Norway"/>
            <Button type="submit">Submit</Button>
        </form>
     );
}
export default CreateCountry;