import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default () => {
  const validationSchema = useMemo(
    () =>
      yup.object({
        foo: yup.string().required("foo is require."),
        bar: yup.string().when("foo", {
          is: (val: string) => val === "beer",
          then: yup.string().required("when foo equal `beer` bar is require."),
        }),
      }),
    []
  );

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
        <h5>When foo equal beer bar is require</h5>
        <input name="foo" ref={register} />
        <input name="bar" ref={register} />
        <button type="submit">submit</button>
        <button type="reset">reset</button>

        <p style={{color: 'red'}}>error: {JSON.stringify(errors)}</p>
        <p>result: {JSON.stringify(result)}</p>

        <hr />
      </form>
    </div>
  );
};
