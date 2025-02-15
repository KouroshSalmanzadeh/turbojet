import z from "zod";

const mobileRegex = new RegExp(
    /^09[0-9]{9}$/
);

export const contactUsSchema = z.object({
    name: z.string().min(1, "فیلد الزامی است"),
    mobile: z.string().regex(mobileRegex, "موبایل وارد شده معتبر نمی باشد."),
    message: z.string().min(1, "فیلد الزامی است"),
});

export type Form = z.infer<typeof contactUsSchema>;