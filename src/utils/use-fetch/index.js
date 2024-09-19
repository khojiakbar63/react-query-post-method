import { useQuery } from "@tanstack/react-query";


  export const useFetch = (qKey, qFun) => {
   return useQuery({
      queryKey: [qKey ? qKey : "GET"],
      queryFn: ()=> qFun,
    });
  }

