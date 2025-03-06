import { useInfiniteQuery } from "@tanstack/react-query";
import { fecthUsers } from "../services/users";
import { User } from "../type";

export const useUsers = () => {
    const { isLoading, isError, data, refetch, fetchNextPage } =
        useInfiniteQuery<{ users: User[]; nextCursor: number }>({
          queryKey: ["users"],
          queryFn:fecthUsers,
          initialPageParam: 1,
          getNextPageParam: (lastPage) => lastPage.nextCursor,
          refetchOnWindowFocus: false,
          staleTime:1000*60*5,
        })
    const  users = data?.pages?.flatMap((page) => page.users) ?? []

    return { isLoading, users, refetch, fetchNextPage, isError }
}