"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useSearchMovieStore } from "../app/lib/utils/store";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const schema = z.object({
  search: z
    .string()
    .min(1, { message: "Search value should have between 1 and 10 characters" })
    .max(10, {
      message: "Search value should have between 1 and 10 characters",
    }),
});

type FormFields = z.infer<typeof schema>;

const MovieSearch: React.FC = () => {
  const router = useRouter();

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      search: "",
    },
  });

  const [setSearchValue] = useSearchMovieStore((state) => [
    state.setSearchValue,
  ]);

  const onSubmit = async (formData: FormFields) => {
    try {
      setSearchValue(formData.search);
      localStorage.setItem("searchValue", formData.search);
      router.push("#movieList");
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-2"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormControl>
                <Input
                  className=""
                  placeholder="Search Movies, Tv Shows"
                  {...field}
                />
              </FormControl>
              <FormMessage className="w-full text-center text-yellow-2" />
            </FormItem>
          )}
        />
        <Button type="submit" className="p-3" variant="search" size="lg">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default MovieSearch;
