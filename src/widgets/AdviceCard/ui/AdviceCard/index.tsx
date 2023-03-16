import React, { FC, useState } from "react";
import { Button, DiceIcon, PauseIcon } from "@/shared/ui";
import { motion } from "framer-motion";
import { fetchAdvice } from "@/entities/Advice";

export const AdviceCard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data, refetch } = fetchAdvice();

  const handleRefetch = () => {
    setIsLoading(true);
    refetch().finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <motion.article
      className="bg-gray-700 rounded-2xl p-16 flex flex-col items-center gap-8 relative shadow-2xl"
      style={{ width: "100%", maxWidth: "600px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-green-300 tracking-widest uppercase">
        Advice #{data?.slip.id}
      </h1>
      <blockquote className="text-2xl font-bold text-white text-center tracking-wide">
        “{data?.slip.advice}”
      </blockquote>
      <div className="flex items-center gap-4 w-full">
        <div className="w-full bg-white/20" style={{ height: "1px" }} />
        <span className="shrink-0 text-white">
          <PauseIcon />
        </span>
        <div className="w-full bg-white/20" style={{ height: "1px" }} />
      </div>
      <Button
        isLoading={isLoading}
        onClick={() => handleRefetch()}
        className="absolute -bottom-6"
      >
        <DiceIcon />
      </Button>
    </motion.article>
  );
};
