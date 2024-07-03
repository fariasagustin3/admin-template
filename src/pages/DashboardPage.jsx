import Layout from "../components/Layout";
import { useStore } from "../store";
import { CiWallet, CiCreditCard1, CiTrash } from "react-icons/ci";
import { FaUserFriends, FaRegUserCircle } from "react-icons/fa";
import { IoBagHandleOutline, IoDiamond, IoFlagOutline, IoPencil } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { orders } from "../data/orders";

const rangeData = [
  { day: "05-01", temperature: [-1, 10] },
  { day: "05-02", temperature: [2, 15] },
  { day: "05-03", temperature: [3, 12] },
  { day: "05-04", temperature: [4, 12] },
  { day: "05-05", temperature: [12, 16] },
  { day: "05-06", temperature: [5, 16] },
  { day: "05-07", temperature: [3, 12] },
  { day: "05-08", temperature: [0, 8] },
  { day: "05-09", temperature: [-3, 5] },
];

const data = [
  { name: "Page A", uv: 5, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 15, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 6, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 10, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 5, pv: 4800, amt: 2181 },
];

const DashboardPage = () => {
  const expanded = useStore((state) => state.expanded);

  return (
    <Layout>
      <div
        className="bg-[var(--dark)] h-full py-20 pt-[80px]"
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
        <h2 className="text-[var(--lightgray)] text-2xl">Dashboard Page</h2>

        {/* contenedor de todas las tarjetas */}
        <div className="grid grid-cols-12 gap-4 mt-5">
          {/* tarjeta individual */}
          <div className="col-3 py-5 px-3 w-full col-span-3 border-[1px] border-[var(--gray)] rounded-md grid grid-cols-4 bg-[var(--black)]">
            {/* parte izquierda de la tarjeta */}
            <div className="grid col-span-2 justify-items-start grid-rows-2">
              <h2 className="grid row-span-1 justify-items-start text-md text-[var(--white)]">
                Total Revenue
              </h2>
              <p className="grid row-span-1 self-end text-2xl font-medium text-[var(--white)]">
                $92,854
              </p>
            </div>
            {/* parte derecha de la tarjeta */}
            <div className="grid col-span-2 justify-items-end grid-rows-2">
              <div className="bg-gradient-to-r from-[#e4088f] to-[#9e1db6] w-10 h-10 flex items-center justify-center rounded-full">
                <CiWallet
                  color="#CECECE"
                  size={16}
                  style={{ strokeWidth: 0.5 }}
                />
              </div>
              <p className="grid row-span-1 self-end text-sm text-[var(--lightgray)] font-medium">
                +6.32%
              </p>
            </div>
          </div>

          <div className="col-3 py-5 px-3 w-full col-span-3 border-[1px] border-[var(--gray)] rounded-md grid grid-cols-4 bg-[var(--black)]">
            {/* parte izquierda de la tarjeta */}
            <div className="grid col-span-2 justify-items-start grid-rows-2">
              <h2 className="grid row-span-1 justify-items-start text-md text-[var(--white)]">
                Total Customer
              </h2>
              <p className="grid row-span-1 self-end text-2xl font-medium text-[var(--white)]">
                48,789
              </p>
            </div>
            {/* parte derecha de la tarjeta */}
            <div className="grid col-span-2 justify-items-end grid-rows-2">
              <div className="bg-gradient-to-r from-[#005FEB] to-[#00BFFA] w-10 h-10 flex items-center justify-center rounded-full">
                <FaUserFriends
                  color="#CECECE"
                  size={16}
                  style={{ strokeWidth: 0.5 }}
                />
              </div>
              <p className="grid row-span-1 self-end text-sm text-[var(--lightgray)] font-medium">
                +12.45%
              </p>
            </div>
          </div>

          <div className="col-3 py-5 px-3 w-full col-span-3 border-[1px] border-[var(--gray)] rounded-md grid grid-cols-4 bg-[var(--black)]">
            {/* parte izquierda de la tarjeta */}
            <div className="grid col-span-2 justify-items-start grid-rows-2">
              <h2 className="grid row-span-1 justify-items-start text-md text-[var(--white)]">
                Total Orders
              </h2>
              <p className="grid row-span-1 self-end text-2xl font-medium text-[var(--white)]">
                88,234
              </p>
            </div>
            {/* parte derecha de la tarjeta */}
            <div className="grid col-span-2 justify-items-end grid-rows-2">
              <div className="bg-gradient-to-r from-[#EE0D74] to-[#FE6308] w-10 h-10 flex items-center justify-center rounded-full">
                <IoBagHandleOutline
                  color="#CECECE"
                  size={18}
                  style={{ strokeWidth: 0.5 }}
                />
              </div>
              <p className="grid row-span-1 self-end text-sm text-[var(--lightgray)] font-medium">
                +3.12%
              </p>
            </div>
          </div>

          <div className="col-3 py-5 px-3 w-full col-span-3 border-[1px] border-[var(--gray)] rounded-md grid grid-cols-4 bg-[var(--black)]">
            {/* parte izquierda de la tarjeta */}
            <div className="grid col-span-2 justify-items-start grid-rows-2">
              <h2 className="grid row-span-1 justify-items-start text-md text-[var(--white)]">
                Conversion Rate
              </h2>
              <p className="grid row-span-1 self-end text-2xl font-medium text-[var(--white)]">
                $92,854
              </p>
            </div>
            {/* parte derecha de la tarjeta */}
            <div className="grid col-span-2 justify-items-end grid-rows-2">
              <div className="bg-gradient-to-r from-[#7BDE30] to-[#2EB835] w-10 h-10 flex items-center justify-center rounded-full">
                <IoIosStats
                  color="#CECECE"
                  size={18}
                  style={{ strokeWidth: 0.5 }}
                />
              </div>
              <p className="grid row-span-1 self-end text-sm text-[var(--lightgray)] font-medium">
                +6.32%
              </p>
            </div>
          </div>
        </div>

        {/* contenedor de la sección de las gráficas */}
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="grid col-span-8 py-5 px-4 border-[1px] border-[var(--gray)] rounded-md bg-[var(--black)]">
            <h3 className="text-[var(--white)] font-medium">Earning Reports</h3>
            <div className="grid grid-cols-12 gap-5 mt-5">
              <div className="grid col-span-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-[var(--white)] text-[30px] font-medium">
                    $856
                  </h2>
                  <span className="px-3 bg-[var(--darkgreen)] rounded-md text-sm py-2 text-[var(--lightgreen)]">
                    +10.6%
                  </span>
                </div>

                <div>
                  <p className="text-[var(--white)] text-sm">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate.
                  </p>
                </div>
              </div>
              <div className="grid col-span-8 ">
                <BarChart width={430} height={250} data={rangeData}>
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="2">
                      <stop
                        offset="40%"
                        stopColor="#232735"
                        stopOpacity={0.8}
                      />
                      <stop offset="60%" stopColor="#232735" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1.5">
                      <stop
                        offset="40%"
                        stopColor="#2B46A2"
                        stopOpacity={0.6}
                      />
                      <stop offset="60%" stopColor="#2B46A2" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Bar dataKey="temperature" fill="url(#colorPv)" />
                </BarChart>
              </div>
            </div>

            {/* seccion de datos generales mensualmente */}
            <div className="w-full grid grid-cols-12 py-3 border-[1px] border-[var(--gray)] rounded-md">
              {/* tarjeta unica */}
              <div className="grid col-span-4 grid-cols-6 border-r-[1px] border-r-[var(--gray)] place-items-center place-content-center px-5">
                <div className="bg-[var(--darkgreen)] w-10 h-10 grid place-content-center col-span-2 rounded-full">
                  <CiCreditCard1
                    color="#1E9D6B"
                    size={20}
                    style={{ strokeWidth: 0.5 }}
                  />
                </div>
                <div className="grid col-span-4">
                  <h3 className="text-[var(--white)] text-2xl font-medium">
                    $95,286.50
                  </h3>
                  <p className="text-[var(--lightgray)] text-sm">
                    Total Revenue
                  </p>
                </div>
              </div>

              {/* tarjeta unica */}
              <div className="grid col-span-4 grid-cols-6 border-r-[1px] border-r-[var(--gray)] place-items-center place-content-center px-5">
                <div className="bg-[var(--darkblue)] w-10 h-10 grid place-content-center col-span-2 rounded-full">
                  <IoDiamond
                    color="#32C0FF"
                    size={20}
                    style={{ strokeWidth: 0.5 }}
                  />
                </div>
                <div className="grid col-span-4">
                  <h3 className="text-[var(--white)] text-2xl font-medium">
                    $58,820
                  </h3>
                  <p className="text-[var(--lightgray)] text-sm">
                    Total Profit
                  </p>
                </div>
              </div>

              {/* tarjeta unica */}
              <div className="grid col-span-4 grid-cols-6 place-items-center place-content-center px-5">
                <div className="bg-[var(--darkviolet)] w-10 h-10 grid place-content-center col-span-2 rounded-full">
                  <FaRegUserCircle
                    color="#522FB9"
                    size={20}
                    style={{ strokeWidth: 0.5 }}
                  />
                </div>
                <div className="grid col-span-4">
                  <h3 className="text-[var(--white)] text-2xl font-medium">
                    $26,498
                  </h3>
                  <p className="text-[var(--lightgray)] text-sm">
                    Total Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* contenedor de la tarjeta que contiene el grafico de area junto con los datos */}
          <div className="grid w-full grid-cols-12 col-span-4 py-5 px-4 border-[1px] border-[var(--gray)] rounded-md bg-[var(--black)]">
            <h3 className="text-[var(--white)] font-medium grid col-span-12">
              Total Earnings
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <h3 className="text-[30px] font-semibold text-[var(--white)]">
                68%
              </h3>
              <p className="text-[var(--lightgreen)] font-medium">25%</p>
            </div>
            {/* contenedor del grafico */}
            <div className="grid col-span-12 -mt-5">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient
                      id="myGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3d2745" />
                      <stop offset="100%" stopColor="#2f1f29" />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#923eb9"
                    strokeWidth={3}
                    fill="url(#myGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              {/* contenedor de los datos mensuales */}
              <div style={{ height: "50%", marginTop: 10 }}>
                <div className="grid grid-cols-12 gap-2">
                  <div className="grid col-span-2 place-content-center bg-[var(--darkgreen)] rounded-md">
                    <CiWallet color="#19b265" size={24} strokeWidth={1.5} />
                  </div>

                  <div className="grid col-span-5">
                    <h3 className="text-[var(--white)] font-medium text-lg">
                      $545.69
                    </h3>
                    <span className="text-[var(--lightgray)] text-sm">
                      Last Month Sales
                    </span>
                  </div>

                  <div className="grid col-span-5 place-items-end">
                    <span className="text-[var(--lightgreen)] self-center font-medium text-lg">
                      35%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2 mt-5">
                  <div className="grid col-span-2 place-content-center bg-[var(--darkblue)] rounded-md">
                    <IoFlagOutline
                      color="#2e4fc3"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="grid col-span-5">
                    <h3 className="text-[var(--white)] font-medium text-lg">
                      $6956.48
                    </h3>
                    <span className="text-[var(--lightgray)] text-sm">
                      Last Year Sales
                    </span>
                  </div>

                  <div className="grid col-span-5 place-items-end">
                    <span className="text-[var(--lightgreen)] self-center font-medium text-lg">
                      66%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contenedor correspondiente a la tabla de datos de ordenes */}
        <div className="w-full border-[1px] border-[var(--gray)] mt-5 rounded-md px-5 py-5">
          <h3 className="text-[var(--white)] font-medium mb-5">
            Recent Orders
          </h3>
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
                  Quantity
                </th>
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left">
                  Price
                </th>
                <th className="py-2 text-[var(--white)] font-bold text-sm text-left">
                  Date
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
              {orders.map((product) => (
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
                    {product.quantity}
                  </td>
                  <td className="text-left text-[var(--lightgray)] font-medium text-sm">
                    ${product.price}
                  </td>
                  <td className="text-left text-[var(--lightgray)] font-medium text-sm">
                    {product.date}
                  </td>
                  <td>
                    <div
                      className='text-left text-[var(--lightgray)] font-medium text-sm flex items-center justify-start'
                    >
                      <span
                        className={`${
                          product.status === "completed"
                            ? "bg-[var(--lightgreen)]"
                            : product.status === "cancelled"
                            ? "bg-[var(--lightred)]"
                            : "bg-[var(--yellow)]"
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
      </div>
    </Layout>
  );
};

export default DashboardPage;
