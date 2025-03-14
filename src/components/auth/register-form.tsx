/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../../schemas";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { register } from "@/actions/register";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { useState } from "react";


export function ProfileForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  // ...
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
     register(data).then((res) => {
      if (res.error) {
        setError(res.error);
        setSuccess('');
      } if (res.success) {
        setError('');
        setSuccess(res.success);
      }
      setLoading(false);
     })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter Username" {...field} type="text"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email Address" {...field} type="email"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="************" {...field} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="************" {...field} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        </div>
        <FormSuccess message={success}/>
        <FormError message={error}/>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>
    </Form>
  )
}
