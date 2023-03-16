import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  isLoading,
  className,
  onClick,
}) => {
  return (
    <motion.button
      className={`flex items-center justify-center w-14 h-14 bg-green-300 rounded-full text-gray-800 ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div
            className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};
