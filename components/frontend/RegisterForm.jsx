"use client";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";

export default function RegisterForm({ role = "USER" }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        // if role =user => home
        // if role =farmer=>onboarding
        if (role === "USER") {
          router.push("/");
        } else {
          router.push(`/onboarding/${responseData.data.id}`);
        }
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      {/* role */}
      <TextInput
        label=""
        name="role"
        type="hidden"
        defaultValue={role}
        register={register}
        errors={errors}
        className="sm:col-span-2 mb-3"
      />

      {/* name */}
      <TextInput
        label="Full Name"
        name="name"
        type="text"
        register={register}
        errors={errors}
        className="sm:col-span-2 mb-3"
      />
      {/* email */}
      <TextInput
        label="Email"
        name="email"
        type="email"
        register={register}
        errors={errors}
        className="sm:col-span-2 mb-3"
      />
      {emailErr && (
        <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>
      )}
      {/* password */}
      <TextInput
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
        className="sm:col-span-2 mb-3"
      />
      <SubmitButton
        buttonTitle="Register"
        isLoading={loading}
        loadingButtonTitle="Creating Please Wait"
      />

      <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-4">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-purple-600 hover:underline dark:text-purple-500"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
