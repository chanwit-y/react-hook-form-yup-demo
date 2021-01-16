import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default () => {
  const validationSchema = yup.object().shape({
    foo: yup.string(),
    bar: yup.string(),
    loos: yup.string().when(["foo", "bar"], {
      is: (foo: string, bar: string) => foo !== bar,
      then: yup.string().required(),
    }),
  });

  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const [result, setResult] = useState<any>();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          setResult(data);
          console.log(data);
        })}
      >
        <h5>Compare foo and bar</h5>
        <input name="foo" ref={register} />
        <input name="bar" ref={register} />
        <button type="submit">submit</button>
        <button type="reset">reset</button>

        <p style={{ color: "red" }}>error: {JSON.stringify(errors)}</p>
        <p>result: {JSON.stringify(result)}</p>

        <hr />
      </form>
    </div>
  );
};
