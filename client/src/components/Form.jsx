import FormField from "./FormField";
import FormRow from "./FormRow";
import FormColumn from "./FormColumn";
import FormTitle from "./FormTitle";
import SendButton from "./SendButton";
import { useEffect, useRef, useState } from "react";
import { validateUser } from "../formValidators";
import { useSelector } from "react-redux";
import store from "../store";
const Form = () => {
  const { user } = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});
  const firstRender = useRef();
  const changeUser = (e) => {
    store.dispatch({
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
    if (Object.keys(errors).length === 0 && firstRender.current) {
      console.log("Submitting form");
    }
  }, [errors]);

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
