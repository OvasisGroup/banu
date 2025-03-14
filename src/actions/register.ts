"use server"

import * as z from "zod"
import bcrypt from "bcryptjs"
import { RegisterSchema } from "../../schemas"
import { prisma } from "../../prisma/prisma"


export const register = async (data: z.infer<typeof RegisterSchema>) => {
    try {
        const validatedData = RegisterSchema.parse(data);

        if (!validatedData) {
            return { error: "Invalid Input Data" };
        }

        const { name, email, password, confirmPassword } = validatedData;

        if (password !== confirmPassword) {
            return { error: "Passwords do not match" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userExists = await prisma.user.findFirst({
            where: {
                email,
                name,
            },
        });

        if (userExists) {
            return { error: "User already exists" };
        }

        const lowerCaseEmail = email.toLowerCase();
        const lowerCaseName = name.toLowerCase();

        const user = await prisma.user.create({
            data: {
                name: lowerCaseName,
                email: lowerCaseEmail,
                password: hashedPassword,
                role: "USER",
            },
        })
        return { success: "user created successfully" };
        console.log(user)
        
    } catch (error) {
        console.error(error);
        return { error: "Something went wrong" };
    }
    
}