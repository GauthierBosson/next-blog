import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const rawRes = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const res = await rawRes.json();

    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input type="text" name="email" ref={register} />
        </label>
        <label>
          Mot de passe
          <input type="text" name="password" ref={register} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
