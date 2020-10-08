import { useEffect } from "react";
import { useSession, signIn } from "next-auth/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
} from "@chakra-ui/core";

const SignupForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [session] = useSession();
  const router = useRouter();

  const { error, signup } = router.query;

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session, router])

  const onSubmit = async data => {
    await signIn('credentials', data);
  }

  return (
    <Box bg="white" borderWidth="1px" rounded="md" p={4}>
      {signup ? <p>Inscription réussi, vous pouvez vous connecter</p> : null}
      <form onSubmit={handleSubmit(onSubmit)} >
        <FormControl mb={4} isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            ref={register({ required: true })}
          />
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
          <FormErrorMessage>Veuillez renseigner votre mot de passe</FormErrorMessage>
        </FormControl>
        <Button variantColor="blue" type="submit">
          Valider
        </Button>
      </form>
      {error ? <p>Une erreur est survenu</p>: null}
    </Box>
  );
};

export default SignupForm;
