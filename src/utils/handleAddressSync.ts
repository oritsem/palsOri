import axios, { AxiosError } from "axios";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
    fullName: z
        .string()
        .min(1, "Full name is required")
        .regex(/^[a-zA-Z\-\u0590-\u05FF ]+$/, "שם יכול להכיל רק אותיות"),
    phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    address: z.string().min(1, "Address is required"),
});

export const handleAddressSync = async (form: UseFormReturn<z.infer<typeof formSchema>>, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    form.setValue('address', val);

    try {
        const res = await axios.post(
            "https://api.pricer.staging.propdo.ai/search/predictions",
            {
                text: val,
                token: "a123456",
            }
        );
        console.log(JSON.stringify(res.data, null, 2));
    } catch (error) {
        const axiosError = error as AxiosError;
        console.log(axiosError.response?.data);
    }
}