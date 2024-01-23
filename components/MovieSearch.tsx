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

  const [setSearchValue] = useSearchMovieStore((state) => [
    state.setSearchValue,
  ]);

  const onSubmit = async (formData: FormFields) => {
    try {
      setSearchValue(formData.search);
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full  gap-2"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input className="" placeholder="Search..." {...field} />
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
