import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    await fetch("/api/register", { method: "POST", body: JSON.stringify(data) }).then((res) =>
      console.log(res)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nom :
          <input name="name" type="text" ref={register({ required: true })} />
        </label>
        <label>
          Email :
          <input name="email" type="email" ref={register({ required: true })} />
        </label>
        <label>
          Mot de passe :
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
