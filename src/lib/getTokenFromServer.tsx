import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const getTokenFromServer = async () => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });
  return token;
};

export default getTokenFromServer;
