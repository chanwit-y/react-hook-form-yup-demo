import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default () => {
  const validationSchema = useMemo(
    () =>
      yup.object({
        email: yup.string(),
        emailConfirmation: yup
          .string()
          .test("match", "emails do not match", function (emailConfirmation) {
            return emailConfirmation === this.parent.email;
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
        <h5>Match data</h5>
        <input name="email" ref={register} />
        <input name="emailConfirmation" ref={register} />
        <button type="submit">submit</button>
        <button type="reset">reset</button>

        <p style={{color: 'red'}}>error: {JSON.stringify(errors)}</p>
        <p>result: {JSON.stringify(result)}</p>

        <hr />
      </form>
    </div>
  );
};
