import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@chakra-ui/core";

const SignupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data)
    const rawRes = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const res = await rawRes.json();

    if (res.code) {
      if (res.code === "ER_DUP_ENTRY")
        return console.log("Email already taken");

      return console.log("an error occurred");
    }

    router.push("/auth/signin?signup=success");
  };

  return (
    <Box borderWidth="1px" rounded="md" p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4} isInvalid={errors.name}>
          <FormLabel htmlFor="name">Nom</FormLabel>
          <Input id="name" type="text" name="name" ref={register({ required: true })} />
          <FormErrorMessage>Veuillez entrer votre nom</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" name="email" ref={register({ required: true })} />
          <FormErrorMessage>Un email valide est requis</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={errors.password}>
          <FormLabel htmlFor="password">Mot de passe</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          <FormHelperText>
            Pour un maxiumum de sécurité, 16 caractères sont conseillés
          </FormHelperText>
          <FormErrorMessage>Un mot de passe est requis</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={errors.passwordConfirm}>
          <FormLabel htmlFor="passwordConfirm">
            Confirmation du mot de passe
          </FormLabel>
          <Input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            ref={register({
              required: true,
              validate: (value) => value === watch("password"),
            })}
          />
          <FormErrorMessage>
            Les deux mots de passe ne sont pas identiques
          </FormErrorMessage>
        </FormControl>
        <Button variantColor="blue" type="submit">Valider</Button>
      </form>
    </Box>
  );
};

export default SignupForm;
