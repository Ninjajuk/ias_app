
'use client'
import { Link } from "@mui/material";
import UserPanel from "./UserPAnel";
import { data } from "./dataDashboard";


// import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const Sidebar1 = () => {
  const [openMenu, setOpenMenu] = useState(false); // Keep track of opened submenu

  function handleMenu(){
    setOpenMenu(!openMenu)
  }
//   const [openSubmenu, setOpenSubmenu] = useState({}); 
//   const location = useLocation();
//   const navigate = useNavigate();
  // Function to handle submenu click
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   const handleSubMenuClick = (menu) => {
//     if (openMenu === menu) {
//       setOpenMenu("");
//     } else {
//       setOpenMenu(menu);
//     }
//   };

//   const isActiveMenu = (menuPath) => {
//     if (menuPath === "") {
//       return data.some((item) => {
//         if (Array.isArray(item.submenu)) {
//           return item.submenu.some(
//             (subItem) => location.pathname === `${item.path}${subItem.path}`
//           );
//         }
//         return false;
//       });
//     } else {
//       return location.pathname.includes(menuPath);
//     }
//   };

//   const isActiveSubMenu = (submenuPath) => {
//     if (location.pathname === submenuPath) {
//       return location.pathname === submenuPath;
//     }
//     return null;
//   };

//   const isMenuWithActiveSubmenu = (menu) => {
//     return (
//       Array.isArray(menu.submenu) &&
//       menu.submenu.some((subItem) => location.pathname.includes(subItem.path))
//     );
//   };
  return (
    <>
      <div style={{  height: "100vh",backgroundColor:'gray' }}>
        <div className="hidden md:flex flex-col h-full hover:overflow-y-auto">
            <div className="px-6 flex items-center min-w-full h-16">
              <img
                className="max-w-full h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="hi"
              />
              <h1 className="pl-3">NinjaKing</h1>
            </div>
            <div className="flex flex-col gap-y-7" style={{ flex: "1 1 0%" }}>
              <div className="relative border-t-2 border-indigo-200 border-t-indigo-500">
                <h1 className="px-6 font-medium text-black">Home</h1>
                {data.map((item, index) => (
                  <div key={index}>
                    <div onClick={handleMenu} className={`flex items-center transition duration-400  p-3 space-x-2 text-sm hover:bg-gray-400 cursor-pointer rounded-full text-white 
                     `}
                    >
                     <span>{item.icon}</span> 
                      <span className="">{item.menu}</span>
                      {Array.isArray(item.submenu)&&item.submenu.length > 0 ? (
                          <span className="ml-auto text-2xl">
                            <FaAngleDown />
                          </span>
                        ) : (
                          // <span className="ml-auto text-2xl">
                          //   <FaAngleDown />
                          // </span>
                          null
                        )
                       }
                       
                    </div>
                  {Array.isArray(item.submenu)&&openMenu&&item.submenu.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      to=''
                                      className={`pl-2 py-1  rounded-full flex flex-col  max-h-0 overflow-hidden transition-max-height duration-200 ease-in-out`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                  </div>
                        
                ))}
              </div>

            </div>
 {/* UserPanel placed outside the submenu section */}
        <div className="mt-12 mb-4">
          <UserPanel/>
        </div>
          </div>
       
      </div>
    </>
  );
};
export default Sidebar1;


