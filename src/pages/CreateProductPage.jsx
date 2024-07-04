import { useState } from "react";
import Layout from "../components/Layout";
import { useStore } from "../store";
import { categories } from "../data/categories";

const CreateProductPage = () => {
  const expanded = useStore((state) => state.expanded);
  const [status, setStatus] = useState(false);

  const handleCheckbox = (event) => {
    setStatus(event.target.checked);
  };

  return (
    <Layout>
      <div
        className="bg-[var(--dark)] h-full py-20 pt-[90px] pb-40"
        style={
          expanded
            ? {
                paddingLeft: "130px",
                paddingRight: "20px",
                transition: "all 0.5s",
              }
            : {
                paddingLeft: "280px",
                paddingRight: "20px",
                transition: "all 0.5s",
              }
        }
      >
        <h2 className="text-[var(--lightgray)] text-2xl">
          Create a new product
        </h2>
        <div className="flex flex-col w-full mt-5">
          <form className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-col gap-2 flex-[2]">
                <label className="text-xs font-medium text-[var(--white)]">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Orange Micro Headphone"
                  className="w-full bg-transparent focus:outline-none border-[1px] border-[var(--gray)] py-4 text-sm text-[var(--white)] px-5"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-medium text-[var(--white)]">
                  Product Price
                </label>
                <input
                  type="number"
                  placeholder="150"
                  className="w-full bg-transparent focus:outline-none border-[1px] border-[var(--gray)] py-4 text-sm text-[var(--white)] px-5"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-medium text-[var(--white)]">
                  Product Stock
                </label>
                <input
                  type="number"
                  placeholder="50"
                  className="w-full bg-transparent focus:outline-none border-[1px] border-[var(--gray)] py-4 text-sm text-[var(--white)] px-5"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-[var(--white)]">
                Product Description
              </label>
              <textarea
                rows={5}
                placeholder="Insert your description"
                className="py-3 px-5 text-sm text-[var(--white)] border-[1px] border-[var(--gray)] w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-medium text-[var(--white)]">
                  Product Image
                </label>
                <input
                  type="file"
                  placeholder="50"
                  accept="image/*"
                  className="w-full bg-transparent focus:outline-none border-[1px] border-[var(--gray)] py-4 text-sm text-[var(--white)] px-5"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-medium text-[var(--white)]">
                  Product Category
                </label>
                <select className="w-full bg-transparent focus:outline-none border-[1px] border-[var(--gray)] py-5 text-sm text-[var(--white)] px-5">
                  <option value="#" selected disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option
                      className="bg-[var(--dark)]"
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <label
                htmlFor="status"
                className={`flex-1 ${
                  status ? "bg-[var(--lightgreen)]" : "bg-[var(--lightred)]"
                } py-5 mt-6 px-5 transition-all duration-500 cursor-pointer`}
              >
                <span
                  className={`${
                    status ? "text-[var(--darkgreen)]" : "text-[var(--darkred)]"
                  } transition-all duration-500`}
                >
                  {status ? "Status: Active" : "Status: Inactive"}
                </span>
                <input
                  id="status"
                  onClick={handleCheckbox}
                  type="checkbox"
                  className="hidden"
                />
              </label>
            </div>
            <button className="self-start bg-[var(--violet)] text-[var(--white)] px-4 py-2 text-sm">Save</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProductPage;
