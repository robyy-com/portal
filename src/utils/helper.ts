import { makeStore } from "@/features/store";
import Cookies from "js-cookie";

export function capitalizeAndRemoveHyphen(str: string) {
  return str
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words back together with a space
}

// Function to generate random alphanumeric token
export const generateToken = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }
  return token;
};

export const getTokenNo = () => {
  return Cookies.get("tokenNo");
};

const { persistor } = makeStore();
export const clearTokenNo = () => {
  Cookies.remove("tokenNo");
  persistor.purge();
  localStorage.clear();
};

export const api_key = "b4d9bc5d-0316-4714-be78-ca3622a51cd3";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

