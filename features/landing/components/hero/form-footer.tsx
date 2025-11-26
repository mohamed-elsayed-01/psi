"use client"

import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Mail, User } from "lucide-react"
import Image from "next/image"
import UAEFlag from "@/public/images/AE.png"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema, type RegisterFormValues } from "@/lib/schemas/landing"

const FormFooter = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            preferredUnit: "1BR / 2BR / 3BR / Penthouse",
            budget: "",
        },
    })

    const onSubmit = (data: RegisterFormValues) => {
        console.log(data)
    }

    return (
        <div className="py-[40px] lg:py-[80px] px-[20px] lg:px-[80px] bg-[#17173B]">
            <h3 className="capitalize text-white font-dm-serif tracking-[-1.92px] font-normal text-[32px] lg:text-[48px] text-center">
                Register for Priority Access Before Launch
            </h3>
            <div className="mt-[32px] p-[20px] lg:p-[48px]">
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6 w-full">
                    <div className="space-y-2 col-span-1 lg:col-span-2">
                        <Label htmlFor="full-name-footer" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Full Name <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
                            <User className="min-size-5" />
                            <input {...register("fullName")} placeholder="Full Name" type="text" id="full-name-footer" className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none bg-transparent" />
                        </div>
                        {errors.fullName && <span className="text-white/70 text-xs">{errors.fullName.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="phone-number-footer" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Phone Number <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
                            <Select defaultValue="UAE">
                                <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none bg-transparent max-w-[90px]">
                                    <SelectValue className="border-none outline-none" />
                                </SelectTrigger>
                                <SelectContent className="ml-5">
                                    <SelectItem value="UAE">
                                        <div className="flex items-center gap-2">
                                            <Image src={UAEFlag.src} alt="UAE Flag" width={20} height={20} />
                                            UAE
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <input {...register("phoneNumber")} placeholder="000 000 0000" type="tel" id="phone-number-footer" className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none bg-transparent" />
                        </div>
                        {errors.phoneNumber && <span className="text-white/70 text-xs">{errors.phoneNumber.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="email-footer" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Email <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
                            <Mail className="min-size-5" />
                            <input {...register("email")} placeholder="Email" type="email" id="email-footer" className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none bg-transparent" />
                        </div>
                        {errors.email && <span className="text-white/70 text-xs">{errors.email.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="preferred-unit-footer" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Preferred Unit <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
                            <Controller
                                control={control}
                                name="preferredUnit"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none bg-transparent">
                                            <SelectValue className="border-none outline-none" />
                                        </SelectTrigger>
                                        <SelectContent className="w-full left-0">
                                            <SelectItem value="1BR / 2BR / 3BR / Penthouse">
                                                1BR / 2BR / 3BR / Penthouse
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                        {errors.preferredUnit && <span className="text-white/70 text-xs">{errors.preferredUnit.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="budget-footer" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Budget (optional)
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
                            <Controller
                                control={control}
                                name="budget"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none data-placeholder:text-white! bg-transparent">
                                            <SelectValue placeholder="Select budget" className="border-none outline-none" />
                                        </SelectTrigger>
                                        <SelectContent className="w-full left-0">
                                            <SelectItem value="80k">80k</SelectItem>
                                            <SelectItem value="85k">85k</SelectItem>
                                            <SelectItem value="90k">90k</SelectItem>
                                            <SelectItem value="95k">95k</SelectItem>
                                            <SelectItem value="100k">100k</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                        {errors.budget && <span className="text-white/10 text-xs">{errors.budget.message}</span>}
                    </div>
                    <div className="flex justify-center lg:justify-end col-span-1 lg:col-span-2">
                        <Button type="submit" className="w-full lg:max-w-[285px] text-base cursor-pointer font-normal leading-5 font-poppins text-white py-4 px-7 bg-[#E0592A] hover:bg-[#E0592A] rounded-full mt-[12px] h-auto">
                            Submit & Get Priority Access
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FormFooter