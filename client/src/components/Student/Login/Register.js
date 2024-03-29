import { useState } from "react";
import { useDispatch } from "react-redux";
import { studentRegister } from "../../../store/action/student";
import { SET_LOADING } from "../../../store/constants/constants";
import FormLayout from "../../Form/FormLayout";
import Form from "./Form";

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    aadhar: "",
    department: "",
    year: "",
    semester: "",
    confirmPassword: "",
    password: "",
    type: "Student",
  });

  const inputChangeHandler = (event) => {
    event.preventDefault();

    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    dispatch({ type: SET_LOADING });
    dispatch(studentRegister(form));
  };

  return (
    <FormLayout user="Student">
      <Form
        form={form}
        inputChangeHandler={inputChangeHandler}
        submitHandler={submitHandler}
        register={true}
      />
    </FormLayout>
  );
};

export default Register;
