import FormField from "./FormField";
import FormRow from "./FormRow";
import FormColumn from "./FormColumn";
import FormTitle from "./FormTitle";
import SendButton from "./SendButton";
import { useEffect, useRef, useState } from "react";
import { validateUser } from "../formValidators";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const { user } = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});
  const firstRender = useRef(true);
  const dispatch = useDispatch();

  const changeUser = (e) => {
    dispatch({
      type: `user/update_${e.target.name}`,
      payload: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validateUser(user));
  };

  useEffect(() => {
    // if there are no errors submit the form
    if (firstRender.current) {
      // do not submit on first render (there are no errors because there was no validation)
      firstRender.current = false;
      return;
    }

    if (Object.keys(errors).length === 0 && !firstRender.current) {
      console.log("Submitting form");
      createUser();
      getUsers();
    }
  }, [errors]);

  const createUser = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    };
    const response = await fetch("/users/add", requestOptions);
    if (response.status === 200) {
      dispatch({
        type: "notification/show_success",
        message: "Form submitted succesfully",
      });
    } else {
      dispatch({
        type: "notification/show_error",
        message: "Form could not be submitted",
      });
    }
  };

  const getUsers = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch("/users", requestOptions);
    const responseJSON = await response.json();
    console.log("All created users: ", responseJSON);
  };

  return (
    <>
      <FormTitle title={"Event Form"} />
      <form
        style={{
          width: "80%",
          height: "90%",
          margin: "auto",
        }}
      >
        <FormRow customStyles={{ height: "30%" }}>
          <FormColumn>
            <FormField
              label={"name"}
              type={"text"}
              onChange={changeUser}
              errors={errors.name}
            />
          </FormColumn>
          <FormColumn>
            <FormField
              label={"surname"}
              type={"text"}
              onChange={changeUser}
              errors={errors.surname}
            />
          </FormColumn>
        </FormRow>
        <FormRow customStyles={{ height: "30%" }}>
          <FormColumn>
            <FormField
              label={"email"}
              type={"email"}
              onChange={changeUser}
              errors={errors.email}
            />
          </FormColumn>
          <FormColumn>
            <FormField
              label={"date"}
              type={"date"}
              onChange={changeUser}
              errors={errors.date}
            />
          </FormColumn>
        </FormRow>
        <FormRow customStyles={{ height: "20%" }}>
          <FormColumn>
            <SendButton onSubmit={onFormSubmit} />
          </FormColumn>
        </FormRow>
      </form>
    </>
  );
};

export default Form;
