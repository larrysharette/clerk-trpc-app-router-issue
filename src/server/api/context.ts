import type * as trpc from "@trpc/server";
import { auth } from "@clerk/nextjs/server";

export const createContext = async () => {
  return {
    auth: auth(),
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
