import {Control, useWatch} from "react-hook-form";
import {FieldArrayFormValues} from "../fieldArrayValidation.schema.ts";
import {FC} from "react";

const Total: FC<{control: Control<FieldArrayFormValues>}> = ({ control }) => {
    const formValues = useWatch({
        name: "cart",
        control
    });
    const total = formValues.reduce(
        (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
        0
    );
    return <p>Total Amount: {total}</p>;
};

export default Total;