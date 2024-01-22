"use client";

import { getMovies } from "@/lib/actions";
import React from "react";
import { useForm } from "react-hook-form";
import { useSearchMovieStore } from "./store";
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
  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      search: "",
    },
  });

  const [setSearchValue, setApiResponse] = useSearchMovieStore((state) => [
    state.setSearchValue,
    state.setApiResponse,
  ]);

  const onSubmit = async (formData: FormFields) => {
    try {
      setSearchValue(formData.search);

      const result = await getMovies(formData.search);
      setApiResponse(result);
      // TODO: delete console.log
      console.log(result, "RESULT");
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row gap-2"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="p-3">
          Search...
        </Button>
      </form>
    </Form>
  );
};

export default MovieSearch;
