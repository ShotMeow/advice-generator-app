import React, { FC } from "react";
import { AdviceCard } from "@/widgets/AdviceCard";

export const App: FC = () => {
  return (
    <main className="bg-gray-800 w-screen h-screen flex items-center justify-center">
      <AdviceCard />
    </main>
  );
};
