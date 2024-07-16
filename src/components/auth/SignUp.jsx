import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";
import { commonModalClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";

const SignUp = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-72"}>
          <Title>Sign up</Title>
          <FormInput
            label="Name"
            placeholder="Enter Name"
            name="name"
            type="text"
          />
          <FormInput
            label="Email"
            placeholder="Enter Email"
            name="email"
            type="text"
          />
          <FormInput
            label="Password"
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
