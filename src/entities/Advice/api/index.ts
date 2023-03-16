import { useQuery } from "@tanstack/react-query";
import { AdviceAPIType } from "@/entities/Advice/types";

export const fetchAdvice = () => {
  return useQuery<AdviceAPIType>({
    queryKey: ["AdviceQuery"],
    queryFn: () =>
      fetch("https://api.adviceslip.com/advice", {
        cache: "no-cache",
      }).then((response) => response.json()),
  });
};
