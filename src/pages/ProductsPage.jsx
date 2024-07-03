import { IoPencil } from "react-icons/io5";
import Layout from "../components/Layout";
import { products } from "../data/products";
import { useStore } from "../store";
import { CiTrash } from "react-icons/ci";
import { useState } from "react";

const ProductsPage = () => {
  const expanded = useStore((state) => state.expanded);
  const [pageSelected, setPageSelected] = useState(1)

  return (
    <Layout>
      <div
        className="bg-[var(--dark)] h-full py-20 pt-[90px] pb-40"
        style={
          expanded
            ? {
                paddingLeft: "130px",
                paddingRight: "10px",
                transition: "all 0.5s",
              }
            : {
                paddingLeft: "280px",
                paddingRight: "10px",
                transition: "all 0.5s",
              }
        }
      >
        <h2 className="text-[var(--lightgray)] text-2xl">Products Page</h2>
        {/* contenedor correspondiente a la tabla de datos de ordenes */}
        <div className="w-full border-[1px] border-[var(--gray)] mt-5 rounded-md px-5 py-5">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--gray)] border-b-[2px] border-b-[var(--white)]">
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left pl-5">
                  #ID
                </th>
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left">
                  Product
                </th>
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left">
                  Stock
                </th>
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left">
                  Price
                </th>
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left">
                  Status
                </th>
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="border-b-[var(--gray)] border-b-[1px]">
                  <td className="py-5 text-[var(--white)] font-medium text-left pl-5">
                    #{product.id}
                  </td>
                  <td className="w-80">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt=""
                        className="w-10 h-10 rounded-md"
                      />
                      <span className="text-[var(--white)] font-medium">
                        {product.title}
                      </span>
                    </div>
                  </td>
                  <td className="text-left text-[var(--lightgray)] font-medium text-sm">
                    {product.stock}
                  </td>
                  <td className="text-left text-[var(--lightgray)] font-medium text-sm">
                    ${product.price}
                  </td>
                  <td>
                    <div className="text-left text-[var(--lightgray)] font-medium text-sm flex items-center justify-start">
                      <span
                        className={`${
                          product.status === "active"
                            ? "bg-[var(--lightgreen)]"
                            : "bg-[var(--lightred)]"
                        } px-3 py-1 rounded-full text-[var(--white)] font-semibold`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-start gap-3">
                      <button>
                        <IoPencil size={18} color="#ffab4d" />
                      </button>
                      <button>
                        <CiTrash size={25} color="#f73752" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <div className="border-[1px] border-[var(--gray)] mt-3 py-2 px-5 rounded-md w-max">
          <div className="flex items-center gap-5">
            <button onClick={() => setPageSelected(1)} className={`${pageSelected === 1 ? 'bg-[var(--lightgray)] rounded-md font-medium' : 'bg-[var(--dark)] text-white'} w-10 h-10 border-r-[1px] border-r-[var(--gray)]`}>1</button>
            <button onClick={() => setPageSelected(2)} className={`${pageSelected === 2 ? 'bg-[var(--lightgray)] rounded-md font-medium' : 'bg-[var(--dark)] text-white'} w-10 h-10 border-r-[1px] border-r-[var(--gray)]`}>2</button>
            <button onClick={() => setPageSelected(3)} className={`${pageSelected === 3 ? 'bg-[var(--lightgray)] rounded-md font-medium' : 'bg-[var(--dark)] text-white'} w-10 h-10 border-r-[1px] border-r-[var(--gray)]`}>3</button>
            <button onClick={() => setPageSelected(4)} className={`${pageSelected === 4 ? 'bg-[var(--lightgray)] rounded-md font-medium' : 'bg-[var(--dark)] text-white'} w-10 h-10 border-r-[1px] border-r-[var(--gray)]`}>4</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
