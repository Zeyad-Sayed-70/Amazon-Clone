"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormInput {
  email: string;
  password: string;
}

export default function page() {
  return (
    <section className="flex flex-col items-center gap-4 pt-3 bg-primary_white h-[100vh]">
      <Link href={"/"}>
        <Image alt="logo" src={"/logo_black.png"} width={100} height={20} />
      </Link>
      <div className="p-4 rounded-md border-2">
        <h1 className="text-xxlarge font-bold">Sign in</h1>
        <Form />
      </div>
      <div>
        <span className="text-small text-gray-400 block text-center mb-3">
          New to Amazon?
        </span>
        <Link
          href={"/register"}
          className="py-2 w-[300px] text-center block  border rounded-md text-small hover:bg-gray-100"
        >
          Create your Amazon account
        </Link>
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

type FormData = {
  email?: string;
  password?: string;
};

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => console.log(data);

  function handleClick() {
    const emailRegax =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (formData?.email && formData.email.match(emailRegax) !== null) {
      setStep(step + 1);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3 w-[300px]">
      <div className={`${step === 1 ? "block" : "hidden"}`}>
        <label htmlFor="em" className="mr-auto text-medium font-bold">
          Email
        </label>
        <input
          id="em"
          onInput={(e) =>
            setFormData({
              ...formData,
              email: (e.target as HTMLInputElement).value,
            })
          }
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
      <div className={`${step === 1 ? "hidden" : "block"}`}>
        <label htmlFor="ps" className="mr-auto text-medium font-bold">
          Password
        </label>
        <input
          id="ps"
          onInput={(e) =>
            setFormData({
              ...formData,
              password: (e.target as HTMLInputElement).value,
            })
          }
          className="px-6 py-2 rounded-lg outline-none w-full border-2"
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <small className=" block text-secondary_red">
          {errors.password?.message}
        </small>{" "}
      </div>
      <button
        type={"submit"}
        onClick={() => step === 1 && handleClick()}
        className="bg-yellow-400 text-medium font-bold w-full py-1 rounded-md mt-3 hover:bg-yellow-300"
      >
        {step === 1 ? "Continue" : "Login"}
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
      <details className="text-small cursor-pointer w-fit">
        <summary className="text-secondary_blue hover:text-secondary_red mb-2">
          Need help?
        </summary>
        <span className="text-secondary_blue hover:text-secondary_red cursor-pointer block">
          Forgot your password?
        </span>
        <span className="text-secondary_blue hover:text-secondary_red cursor-pointer block">
          Other issues with Sign-In
        </span>
      </details>
    </form>
  );
}
