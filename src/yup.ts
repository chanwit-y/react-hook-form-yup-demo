import * as yup from "yup";

yup.addMethod<yup.StringSchema>(yup.string, "emptyAsUndefined", function () {
  return this.transform((value) => (value ? value : undefined));
});

declare module "yup" {
  interface StringSchema  {
  }
}

export default yup;
