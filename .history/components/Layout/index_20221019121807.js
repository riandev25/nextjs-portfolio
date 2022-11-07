import Sidebar from "../NavigationBar";
import "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <main>{children}</main>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;

// import { Outlet } from "react-router-dom";
// import Sidebar from "../Sidebar/";
// import "./index.scss";

// const Layout = () => {
//   return (
//     <div className="App">
//       <Sidebar />
//       <div className="">
//         <span className="bg-[#ffd700] opacity-60 absolute bottom-0 left-[120px] text-lg font-labelle top-9">
//           &lt;body&gt;
//         </span>

//         <Outlet />
//         <span className="bg-[#ffd700] opacity-60 absolute bottom-0 left-[120px] text-lg font-labelle">
//           &lt;/body&gt;
//           <br />
//           <span className="ml-[-120px]">&lt;/html&gt;</span>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Layout;
