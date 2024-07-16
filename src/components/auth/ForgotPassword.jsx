import Container from "../Container";
import CustomLink from "../CustomLink";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

const ForgotPassword = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
          <Title>Enter Your Email</Title>
          <FormInput
            label="Email"
            placeholder="Enter Email"
            name="email"
            type="text"
          />
          <Submit value="Send Link" />

          <div className="flex justify-between">
            <CustomLink to="/auth/signin">Sign in</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPassword;
