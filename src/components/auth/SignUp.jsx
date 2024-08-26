import Container from "../Container";
import { useNavigate } from "react-router-dom";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";
import { commonModalClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";
import { useState } from "react";
import { createUser } from "../../api/auth";
import { useNotification } from "../../hooks";

const SignUp = () => {
  const validateUserInfo = ({ name, email, password }) => {
    const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isValidName = /^[a-z A-Z]+$/;

    if (!name.trim()) return { ok: false, error: "Name is missing!" };
    if (!isValidName.test(name)) return { ok: false, error: "Invalid name!" };

    if (!email.trim()) return { ok: false, error: "Email is missing!" };
    if (!isValidEmail.test(email))
      return { ok: false, error: "Invalid email!" };

    if (!password.trim()) return { ok: false, error: "Password is missing!" };
    if (password.length < 8)
      return { ok: false, error: "Password must be 8 characters long!" };

    return { ok: true };
  };

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { updateNotification } = useNotification();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);

    if (!ok) return updateNotification("error", error);

    const response = await createUser(userInfo);
    if (response.error) return console.log(response.error);
    navigate("/auth/verification", {
      state: { user: response.user },
      replace: true, //user cannot go back to the previous page
    });
  };

  const { name, email, password } = userInfo;

  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses + " w-72"}>
          <Title>Sign up</Title>
          <FormInput
            label="Name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Name"
            name="name"
            type="text"
          />
          <FormInput
            label="Email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Email"
            name="email"
            type="text"
          />
          <FormInput
            label="Password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            name="password"
            type="password"
          />
          <Submit value="Sign up" />

          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget password</CustomLink>
            <CustomLink to="/auth/signin">Sign in</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};

export default SignUp;
