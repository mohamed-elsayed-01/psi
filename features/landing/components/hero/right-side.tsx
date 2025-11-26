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

const RightSide = () => {
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
        <div className="w-full h-full flex justify-center items-center px-[20px] lg:px-[40px]">
            <div className="w-full lg:max-w-[475px] px-6 py-8 bg-black/20 lg:bg-white/10 backdrop-blur-xs space-y-6">
                <h2 className="font-dm-serif text-white text-[32px] font-normal tracking-[-1.28px] capitalize">
                    Register for Priority Access
                </h2>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-y-5 gap-x-6">
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="full-name" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Full Name <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px]">
                            <User className="min-size-5" />
                            <input {...register("fullName")} placeholder="Full Name" type="text" id="full-name" className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none" />
                        </div>
                        {errors.fullName && <span className="text-white/70 text-xs">{errors.fullName.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="phone-number" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Phone Number <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px]">
                            <Select defaultValue="UAE">
                                <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none">
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
                            <input {...register("phoneNumber")} placeholder="000 000 0000" type="tel" id="phone-number" className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none" />
                        </div>
                        {errors.phoneNumber && <span className="text-white/70 text-xs">{errors.phoneNumber.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="email" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Email <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px]">
                            <Mail className="min-size-5" />
                            <input {...register("email")} placeholder="Email" type="email" id="email" className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none" />
                        </div>
                        {errors.email && <span className="text-white/70 text-xs">{errors.email.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-1">
                        <Label htmlFor="preferred-unit" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Preferred Unit <span className="text-[#D92D20]">*</span>
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px]">
                            <Controller
                                control={control}
                                name="preferredUnit"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none">
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
                        <Label htmlFor="budget" className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5">
                            Budget (optional)
                        </Label>
                        <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px]">
                            <Controller
                                control={control}
                                name="budget"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none data-placeholder:text-white!">
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
                    <Button type="submit" className="col-span-2 text-base cursor-pointer font-normal leading-5 font-poppins text-white py-4 px-7 bg-[#E0592A] hover:bg-[#E0592A] rounded-full mt-[12px] h-auto">
                        Submit & Get Priority Access
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default RightSide