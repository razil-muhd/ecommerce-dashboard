"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FileUploaderSingle from "../FormElements/imageupload/imageupload";
import { Typography } from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import DropzoneWrapper from "../styles/react-drop-zone";
import{zodResolver} from "@hookform/resolvers/zod";
import z from "zod";
import SelectOne from "../Dropdowns/SelectOne";
import Selectbrand from "../Dropdowns/SelectBrand";
import { useRouter } from "next/navigation";
import { ProductApi } from "@/api/ProductsApi";
import toast from "react-hot-toast";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

   const Schema = z.object({
     product : z.string().nonempty({message:"*Required"}),
     category : z.string().nonempty({message:"*Required"}),
     brand : z.string().nonempty({message:"*Required"}),
     productdescription : z.string().nonempty({message:"*Required"}),
     productprice : z.string().nonempty({message:"*Required"}),
     image: z.any().refine(
              (value) => {
                const acceptedTypes = ACCEPTED_IMAGE_TYPES;
          
                if (typeof value === "string") {
                  return true;
                } else if (typeof value === "object") {
                  const isTypeAccepted = acceptedTypes.includes(value?.type);
          
                  return isTypeAccepted;
                }
          
                return false;
              },
              {
                message: "Invalid image format",
              },
            ),
       
   })
   type props={
    products:any,
    categories:any,
    brands:any,
    productid:string

   }
 

const Productseditform = ({products,categories,brands,productid}:props) => {
  
  console.log("products",products)
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState : {errors,},
    } = useForm<TSchema>({resolver :zodResolver(Schema),
      defaultValues: {
        product: products.name,
        image: products.image,
        category:products.category,
        productdescription:products.description,
        productprice:products.price,
        brand:products.brand
      },
    });

type TSchema = z.infer<typeof Schema>;
const router = useRouter();

const submitdata = async (data: any) => {
  try {
   
    const response:any = await ProductApi.updateproducts(data, productid);
    if (response.data.success) {
      toast.success(response.data.message);
      router.push("/admin/products");
      router.refresh();
    }
  } catch (errors: any) {
    toast.error(errors.response.data.message);
   
  }
};




  
  return (
    <>
      {/* <Breadcrumb pageName="Products" /> */}

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
                     Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Products "
                      {...register("product")}
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Product description
                  </label>
                  <textarea
                   
                    placeholder="Category "
                    {...register("productdescription")}
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Product price
                  </label>
                  <input
                    type="text"
                    placeholder="Category "
                    {...register("productprice")}
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
             
             <SelectOne
               register={register("category")}
               name="Category"
               placeHolder="Category"
               data={categories}
             />
           </div>
           <div>
             
             <Selectbrand
               register={register("brand")}
               name="Brands"
               placeHolder="Brands"
               data={brands}
             />
           </div>
                  <div>
                      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                        Product Image
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
                    
                    </div>
    
            
                </div>
              </div>
    
          
    
            
    
             
            </div>
    
    
          </div>
      </form>
    </>
  );
};

export default Productseditform;
