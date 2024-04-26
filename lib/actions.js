"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { LoginSchema, RegisterSchema } from "@/schemas";
import User from "@/models/User";
import connectMongoDB from "./mongodb";

export const Login = async (values) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Email Sent" };
};

export const Register = async (values) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, repeatPassword, name } = validatedFields.data;

  if (password !== repeatPassword) {
    return { error: "Passwords do not match" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await connectMongoDB();

  const exisingUser = await User.findOne({
    email,
  });

  if (exisingUser) {
    return { error: "Email already in use!" };
  }

  await User.create({
    email,
    password: hashedPassword,
    name,
  });

  // Send Verification email

  return { success: "User Account Created!" };
};
