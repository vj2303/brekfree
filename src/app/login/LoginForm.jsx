"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formFields = [
    {
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
      type: "text",
      validation: { required: "Email is required" },
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      validation: { required: "Password is required" },
    },
  ];

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
  <div className="flex flex-col md:flex-row justify-between items-center gap-[40px] w-full">
    {/* Form */}
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 rounded w-full max-w-md"
    >
      <div className="flex flex-col items-center mb-6">
        <Image src="/login_logo.png" alt="logo" width={137} height={130} />
        <h2 className="text-[32px] font-bold mt-4">Welcome back!</h2>
        <p className="text-gray-600 mt-2 text-center">
          Login to access all your data
        </p>
      </div>

      {/* Form Fields */}
      {formFields.map((field, index) => (
        <div className="mb-6" key={index}>
          <label
            htmlFor={field.name}
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            {field.label}
          </label>
          <Controller
            name={field.name}
            control={control}
            rules={field.validation}
            render={({ field: { onChange, value } }) => (
              <>
                <input
                  id={field.name}
                  type={
                    field.type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  placeholder={field.placeholder}
                  value={value || ""}
                  onChange={onChange}
                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors[field.name]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {field.type === "password" && (
                  <span
                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* Toggle Password Visibility */}
                  </span>
                )}
              </>
            )}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-xs mt-2">
              {errors[field.name].message}
            </p>
          )}
        </div>
      ))}

      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <Link href='/'>
            <Button bg={"dark-blue"} text="white">
              Log In
              <Image src={"/Vector.png"} alt="star" width={20} height={20} />
            </Button>
        </Link>
      </div>

      {/* Register Link */}
      <p className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Register
        </a>
      </p>
    </form>

    {/* Image */}
    <div className="hidden md:flex justify-center items-center">
      <Image
        src="/LoginImage.png"
        alt="image"
        width={900}
        height={900}
        className=""
      />
    </div>
  </div>
</div>

  
  );
}


