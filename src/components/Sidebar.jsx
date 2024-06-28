import { useLocation, Link } from "wouter"
import { FaChartPie, FaBoxOpen, FaBoxes } from "react-icons/fa";
import { FaBoxesPacking, FaPeopleCarryBox } from "react-icons/fa6";
import { TbCategory2, TbCategoryPlus } from "react-icons/tb";
import { useStore } from "../store";

const Sidebar = () => {
  const location = useLocation()[0]
  const expanded = useStore(state => state.expanded)

  return (
    <aside className="h-full fixed bg-[var(--dark)] flex-[1.5] border-r-2 border-r-[var(--white)] overflow-y-auto" style={expanded ? { width: "100px", transition: "width 0.5s" } : { width: "250px", transition: "width 0.5s" }}>
      <nav className="">
        <div className="mb-2 flex justify-center">
          <img src="/logo.png" alt="" width={expanded ? 60 : 100} className="m-5 transition-['width'] duration-500" />
        </div>
        {/* sidebar container */}
        <div className="pl-2">
          {/* dashboard section */}
          <div>
            <h2 className="text-xs text-[var(--lightgray)]">DASHBOARD</h2>
            <ul className="pl-2 py-2 flex flex-col">
              <Link href="/">
                <li className={location === "/" ? "flex flex-row items-center gap-2 text-[var(--white)] bg-[var(--gray)] py-2 pl-4 rounded-l-full" : "flex flex-row items-center gap-2 text-[var(--white)] hover:bg-[var(--gray)] py-2 pl-4 rounded-l-full"}>
                  {!expanded ? (
                    <span>Dashboard</span>
                  ) : (
                    <FaChartPie color={location === "/" ? "#00FEFB" : "#CECECE"} size={expanded ? 30 : 20} />
                  )}
                </li>
              </Link>
            </ul>
          </div>

          {/* products section */}
          <div>
            <h2 className="text-xs text-[var(--lightgray)]">PRODUCTS</h2>
            <ul className="pl-2 py-2 flex flex-col">
              <Link href="/products">
                <li className={location === "/products" ? "flex flex-row items-center gap-2 text-[var(--white)] bg-[var(--gray)] py-2 pl-4 rounded-l-full" : "flex flex-row items-center gap-2 text-[var(--white)] hover:bg-[var(--gray)] py-2 pl-4 rounded-l-full"}>
                  {!expanded ? (
                    <span>Products</span>
                  ) : (
                    <FaBoxOpen color={location === "/products" ? "#00FEFB" : "#CECECE"} size={expanded ? 30 : 20} />
                  )}
                </li>
              </Link>
              <Link href="/products/create">
                <li className={location === "/products/create" ? "flex flex-row items-center gap-2 text-[var(--white)] bg-[var(--gray)] py-2 pl-4 rounded-l-full" : "flex flex-row items-center gap-2 text-[var(--white)] hover:bg-[var(--gray)] py-2 pl-4 rounded-l-full"}>
                  {!expanded ? (
                    <span>Create Product</span>
                  ) : (
                    <FaBoxesPacking color={location === "/products/create" ? "#00FEFB" : "#CECECE"} size={expanded ? 30 : 20} />
                  )}
                </li>
              </Link>
            </ul>
          </div>

          {/* categories section */}
          <div>
            <h2 className="text-xs text-[var(--lightgray)]">CATEGORIES</h2>
            <ul className="pl-2 py-2 flex flex-col">
              <Link href="/categories">
                <li className={location === "/categories" ? "flex flex-row items-center gap-2 text-[var(--white)] bg-[var(--gray)] py-2 pl-4 rounded-l-full" : "flex flex-row items-center gap-2 text-[var(--white)] hover:bg-[var(--gray)] py-2 pl-4 rounded-l-full"}>
                  {!expanded ? (
                    <span>Categories</span>
                  ) : (
                    <TbCategory2 color={location === "/categories" ? "#00FEFB" : "#CECECE"} size={expanded ? 30 : 20} />
                  )}
                </li>
              </Link>
              <Link href="/categories/create">
                <li className={location === "/categories/create" ? "flex flex-row items-center gap-2 text-[var(--white)] bg-[var(--gray)] py-2 pl-4 rounded-l-full" : "flex flex-row items-center gap-2 text-[var(--white)] hover:bg-[var(--gray)] py-2 pl-4 rounded-l-full"}>
                  {!expanded ? (
                    <span>Create Category</span>
                  ) : (
                    <TbCategoryPlus color={location === "/categories/create" ? "#00FEFB" : "#CECECE"} size={expanded ? 30 : 20} />
                  )}
                </li>
              </Link>
            </ul>
          </div>

          {/* orders section */}
          <div>
            <h2 className="text-xs text-[var(--lightgray)]">ORDERS</h2>
            <ul className="pl-2 py-2 flex flex-col">
              <Link href="/orders">
                <li className={location === "/orders" ? "flex flex-row items-center gap-2 text-[var(--white)] bg-[var(--gray)] py-2 pl-4 rounded-l-full" : "flex flex-row items-center gap-2 text-[var(--white)] hover:bg-[var(--gray)] py-2 pl-4 rounded-l-full"}>
                  {!expanded ? (
                    <span>Orders</span>
                  ) : (
                    <FaBoxes color={location === "/orders" ? "#00FEFB" : "#CECECE"} size={expanded ? 30 : 20} />
                  )}
                </li>
              </Link>
              <Link href="/orders/create">
                <li className={location === "/orders/create" ? "flex flex-row items-center gap-2 text-[var(--white)] bg-[var(--gray)] py-2 pl-4 rounded-l-full" : "flex flex-row items-center gap-2 text-[var(--white)] hover:bg-[var(--gray)] py-2 pl-4 rounded-l-full"}>
                  {!expanded ? (
                    <span>Create Order</span>
                  ) : (
                    <FaPeopleCarryBox color={location === "/orders/create" ? "#00FEFB" : "#CECECE"} size={expanded ? 30 : 20} />
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar