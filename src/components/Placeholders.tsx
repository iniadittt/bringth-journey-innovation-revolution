"use client";

import { placeholders } from "@/data/sentences";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Placeholders() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
