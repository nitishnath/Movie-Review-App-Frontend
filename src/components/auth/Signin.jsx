import Container from "../Container";
import CustomLink from "../CustomLink";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

const Signin = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
          <Title>Sign in</Title>
          <FormInput
            label="Email"
            placeholder="Email"
            name="email"
            type="text"
          />
          <FormInput
            label="Password"
            placeholder="password"
            name="password"
            type="password"
          />
          <Submit value="Sign in" />

          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget password</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signin;