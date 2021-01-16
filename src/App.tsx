import React from 'react';
import Form1 from './containers/form1'
import Form2 from './containers/form2'
import Form3 from './containers/form3'

function App() {
  // const validationSchema = useMemo(
  //   () =>
  //     yup.object({
  //       firstName: yup.string().required("Required"),
  //       lastName: yup.string().when("firstName", {
  //         is: (val: string) => val === "beer",
  //         then: yup.string().required(),
  //       }),
  //     }),
  //   []
  // );

  // const validationSchema2 = useMemo(
  //   () =>
  //     yup.object({
  //       email: yup.string(),
  //       emailConfirmation: yup
  //         .string()
  //         .test("match", "emails do not match", function (emailConfirmation) {
  //           return emailConfirmation === this.parent.email;
  //         }),
  //     }),
  //   []
  // );

  // const validationSchema3 = yup.object().shape({
  //       foo: yup.string(),
  //       bar: yup.string(),
  //       loos: yup
  //         .string()
  //         .when(["foo", "bar"], {
  //           is: (foo: string, bar: string) => foo !== bar,
  //           then: yup.string().required(),
  //         }),
  //     })

  // const { handleSubmit, register, errors } = useForm({
  //   mode: 'onBlur',
  //   resolver: yupResolver(validationSchema3),
  // });

  return <div>
    <Form1 />
    <Form2 />
    <Form3 />
  </div>;
}

export default App;
