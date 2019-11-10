import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Proszę wpisać nazwę usługi"),
  price: Yup.number().required("Proszę wpisać cenę"),
  description: Yup.string().required("Proszę wpisać opis")
});
