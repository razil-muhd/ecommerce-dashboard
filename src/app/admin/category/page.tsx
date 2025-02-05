import { CategoryApi } from "@/api/CategoryApi";
import CategoryTable from "@/components/Category/CategoryTables";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

async function getAllCategory() {
  const response: any = await CategoryApi.getAllCategory();
  return response.data;
}

const CategoryTables = async () => {
  const categories = await getAllCategory();
  const categoryData = categories.data;
 
  return (
    <div>
      <DefaultLayout>
        <CategoryTable category={categoryData} />
      </DefaultLayout>
    </div>
  );
};

export default CategoryTables;
