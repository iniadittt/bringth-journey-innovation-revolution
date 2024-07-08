"use client";

import { placeholders } from "@/data/sentences";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Placeholders() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <div className="w-full px-4">
      <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
    </div>
  );
}
