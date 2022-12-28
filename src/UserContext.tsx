import { createContext } from "react";
import { User } from "./api/types";

export const UserContext = createContext<Partial<User>>({});
