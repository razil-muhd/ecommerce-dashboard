"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FileUploaderSingle from "../FormElements/imageupload/imageupload";
import { Typography } from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import DropzoneWrapper from "../styles/react-drop-zone";
import{zodResolver} from "@hookform/resolvers/zod";
import z from "zod";

import { CategoryApi } from "@/api/CategoryApi";
import toast from "react-hot-toast";
import { BrandApi } from "@/api/BrandApi";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

   const Schema = z.object({
    brands : z.string().nonempty({message:"*Required"}),
    image:z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
       
   })

const Brandsaddform = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState : {errors,},
    } = useForm<TSchema>({resolver :zodResolver(Schema)});

type TSchema = z.infer<typeof Schema>;

const router = useRouter();

const submitdata = async (data:any) =>{
  try{
    const response = await BrandApi.brandCategory(data);
    if(response.data.success){
      toast.success(response.data.message);
      router.push("/admin/brands")
    }

  }catch(errors:any){
 
    toast.error(errors.response.data.message);


  }

}

  
  return (
    <>
      <Breadcrumb pageName="Add Brands"  innerpage="Brands" tablelink="/admin/brands"/>

      <form onSubmit={handleSubmit(submitdata)} >
          <div className=" gap-9 sm:grid-cols-2">
            <div className="flex flex-col gap-9">
              {/* <!-- Input Fields --> */}
              <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                {/* <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">
                    Input Fields
                  </h3>
                </div> */}
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                     Brands Name
                    </label>
                    <input
                      type="text"
                      placeholder="Category "
                      {...register("brands")}
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                        brands Image
                      </label>
                      <DropzoneWrapper>
                        <Typography variant="h6" sx={{ mb: 2.5 }}>
                          {!!errors.image && (
                            <span
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginLeft: "2px",
                              }}
                            >
                              Invalid Image format or Image is Required{" "}
                              {!!errors.image}
                            </span>
                          )}
                        </Typography>
                        <Controller
                          name="image"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <div>
                              <FileUploaderSingle
                                file={field.value}
                                setFile={field.onChange}
                                error={errors.image}
                              />
                            </div>
                          )}
                        />
                         <div className="flex justify-center gap-3 text-blue-600">
                            <button type="submit" >Submit</button>
                            <button type="reset" onClick={()=>reset()}>Reset</button>
                         </div>
                      </DropzoneWrapper>
                      {/* <input
                        type="text"
                        placeholder="Active Input"
                        className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
                      /> */}
                    </div>
    
                  {/* <div>
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                      Active Input
                    </label>
                    <input
                      type="text"
                      placeholder="Active Input"
                      className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
                    />
                  </div> */}
    
                  {/* <div>
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                      Disabled label
                    </label>
                    <input
                      type="text"
                      placeholder="Disabled label"
                      disabled
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary dark:disabled:bg-dark"
                    />
                  </div> */}
                </div>
              </div>
    
              {/* <!-- Toggle switch input --> */}
              {/* <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">
                    Toggle switch input
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <SwitcherOne />
                  <SwitcherTwo />
                  <SwitcherThree />
                  <SwitcherFour />
                </div>
              </div> */}
    
              {/* <!-- Time and date --> */}
              {/* <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">
                    Time and date
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <DatePickerOne />
                  <DatePickerTwo />
                </div>
              </div> */}
    
              {/* <!-- File upload --> */}
              {/* <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">
                    File upload
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                      Attach file
                    </label>
                    <input
                      type="file"
                      className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
    
                  <div>
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                      Attach file
                    </label>
                    <input
                      type="file"
                      className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
                    />
                  </div>
                </div>
              </div> */}
            </div>
    
    
          </div>
      </form>
    </>
  );
};

export default Brandsaddform;
