import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// import { Auth } from "aws-amplify";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const router = useRouter()

  const onSubmit = async (data) => {
    // const { name, email, password } = data;
    // try {
    //   const { user } = await Auth.signUp({
    //     username: email,
    //     password,
    //     attributes: {
    //       name
    //     }

    //   });

    //   console.log(user);
    // } catch(err) {
    //   console.log('signup error : ', err)
    // }

    const rawRes = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const res = await rawRes.json()

    if (res.code) {
      if (res.code === "ER_DUP_ENTRY") return console.log("Email already taken")

      return console.log('an error occured')
    }

    router.push('/login');
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
