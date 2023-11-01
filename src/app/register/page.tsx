"use client";
import ErrorBox from "@/components/ErrorBox";
import useRegister from "@/hooks/useRegister";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function page() {
  return (
    <section className="flex flex-col items-center gap-4 pt-3 bg-primary_white min-h-[100vh] pb-12">
      <Link href={"/"}>
        <Image alt="logo" src={"/logo_black.png"} width={100} height={20} />
      </Link>
      <div className="p-4 rounded-md border-2">
        <h1 className="text-xxlarge font-bold">Create account</h1>
        <Form />
      </div>
      <footer className="mt-12 text-small">
        <section className="flex items-center justify-center gap-4">
          <Link
            className="text-secondary_blue hover:text-secondary_red"
            href={"#"}
          >
            Conditions of Use
          </Link>
          <Link
            className="text-secondary_blue hover:text-secondary_red"
            href={"#"}
          >
            Privacy Notice
          </Link>
          <Link
            className="text-secondary_blue hover:text-secondary_red"
            href={"#"}
          >
            Help
          </Link>
        </section>
        <p className="text-gray-400 mt-3">
          © 2023-Present, Amazon-Clone.com, Inc. or its affiliates
        </p>
      </footer>
    </section>
  );
}

interface RegisterFormInput {
  name: string;
  email: string;
  password: string;
  re_password: string;
}

function Form() {
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { registerUser, error } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    try {
      registerUser({
        username: data.name,
        email: data.email,
        password: data.password,
      })
        .then((data) => {
          setErrorMsg(null);

          console.log("data");
          console.log(data);
        })
        .catch((err) => {
          console.log("err");
          console.log(err);
          setErrorMsg(err.response.data.message);
        });
    } catch (error: any) {
      console.log("error");
      setErrorMsg(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-3 w-[300px] flex flex-col gap-3"
    >
      <ErrorBox errorMsg={errorMsg} />
      <div>
        <label htmlFor="nm" className="mr-auto text-medium font-bold">
          Name
        </label>
        <input
          id="nm"
          className="px-4 py-1 rounded-md outline-none w-full border-2"
          {...register("name", {
            required: "Name is required",
            minLength: 4,
            maxLength: 16,
          })}
        />
        <small className=" block text-secondary_red">
          {errors.name?.type === "minLength" ? (
            <>Name should At least 4 characters</>
          ) : errors.name?.type === "maxLength" ? (
            <>Name should be less that 16 character</>
          ) : (
            errors.name?.message
          )}
        </small>
      </div>
      <div>
        <label htmlFor="em" className="mr-auto text-medium font-bold">
          Email
        </label>
        <input
          id="em"
          className="px-4 py-1 rounded-md outline-none w-full border-2"
          {...register("email", {
            required: "Email Address is required",
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
        <small className=" block text-secondary_red">
          {errors.email?.type === "pattern" ? (
            <>This Email in not valid</>
          ) : (
            errors.email?.message
          )}
        </small>
      </div>
      <div>
        <label htmlFor="ps" className="mr-auto text-medium font-bold">
          Password
        </label>
        <input
          id="ps"
          className="px-6 py-2 rounded-lg outline-none w-full border-2"
          type="password"
          onInput={(e) => setPass((e.target as HTMLInputElement).value)}
          {...register("password", {
            required: "Password is required",
            minLength: 6,
          })}
        />
        <small className=" block text-secondary_red">
          {errors.password?.type === "minLength" ? (
            <>Password should At least 6 characters</>
          ) : (
            errors.password?.message
          )}
        </small>{" "}
      </div>
      <div>
        <label htmlFor="rps" className="mr-auto text-medium font-bold">
          Re-enter password
        </label>
        <input
          id="rps"
          className="px-6 py-2 rounded-lg outline-none w-full border-2"
          type="password"
          {...register("re_password", {
            required: "Re-enter Password is required",
            validate: (value) => value === pass,
          })}
        />
        <small className=" block text-secondary_red">
          {errors.re_password?.type === "validate" ? (
            <>Incorrect Password entered</>
          ) : (
            errors.re_password?.message
          )}
        </small>{" "}
      </div>
      <button
        type={"submit"}
        className="bg-yellow-400 text-medium font-bold w-full py-1 rounded-md mt-3 hover:bg-yellow-300"
      >
        Create
      </button>
      <p className="text-small my-6">
        By continuing, you agree to Amazon{"'"}s{" "}
        <span className="text-secondary_blue hover:text-secondary_red cursor-pointer">
          Conditions of Use
        </span>{" "}
        and{" "}
        <span className="text-secondary_blue hover:text-secondary_red cursor-pointer">
          Privacy Notice.
        </span>
      </p>

      <hr className="h-[2px] bg-grey_original" />

      <p className="text-small">
        Already have an account?{" "}
        <Link
          href={"/signin"}
          className="text-secondary_blue hover:text-secondary_orange ml-1"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
