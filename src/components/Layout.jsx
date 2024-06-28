import Sidebar from "./Sidebar"
import Topbar from "./Topbar"


const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-row">
      <Sidebar />
      <div className="flex-[5]">
        <Topbar />
        {children}
      </div>
    </div>
  )
}

export default Layout