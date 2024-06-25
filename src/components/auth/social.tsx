"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button
        variant="outline"
        className="w-full flex flex-row gap-2"
        size="lg"
        onClick={() => {
          onClick("google");
        }}
      >
        <FcGoogle className="h-5 w-5" />
        Sign in with Google
      </Button>
      <Button
        variant="outline"
        className="w-full flex flex-row gap-2"
        size="lg"
        onClick={() => {
          onClick("github");
        }}
      >
        <FaGithub className="h-5 w-5" />
        Sign in with Github
      </Button>
    </div>
  );
};
