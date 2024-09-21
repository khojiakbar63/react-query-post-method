import { useQuery } from "@tanstack/react-query";


  export const useFetch = (qKey, qFun) => {
   return useQuery({
      queryKey: [qKey ? qKey : "GET"],
      queryFn: ()=> qFun(),
      retry: 4,
      cacheTime: 3600,
      staleTime: 3000,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true
    });
  }

