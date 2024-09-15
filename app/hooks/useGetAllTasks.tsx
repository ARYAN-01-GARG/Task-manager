import fetcher from "@/libs/fetcher";
import useSWR from "swr";

export default function useGetAllTasks(filter: filter, sort: string) {

    const { data, error , isLoading } = useSWR("/api/tasks", fetcher);
    return {
        tasks: data,
        error,
        isLoading
    }
}