/** @format */

// /** @format */

// import "./../styles/nav.css";
// import { Link } from "react-scroll";

// function header() {
//   return (
//     <div>
//       <nav className='hidden md:flex'>
//         <img
//           src='https://media.licdn.com/dms/image/C4E0BAQHNtxsFSIDI6Q/company-logo_200_200/0/1646712718829/sandtank_logo?e=1714608000&v=beta&t=BmPokoBzOESpoR-EaGEIWj-S1CU3JBO5KPRLfKuT1Ls'
//           alt='sand tank logo'
//           className='h-16 rounded-full'
//         />
//         <div id='nav-part2'>
//           <h4>
//             <Link
//               className='cursor-pointer'
//               to='work'
//               smooth={true}
//               duration={500}>
//               Work
//             </Link>
//           </h4>
//           <h4>
//             <Link
//               className='cursor-pointer'
//               to='testimonials'
//               smooth={true}
//               duration={500}>
//               Testimonials
//             </Link>
//           </h4>
//           <h4>
//             <Link
//               className='cursor-pointer'
//               to='about'
//               smooth={true}
//               duration={500}>
//               About US
//             </Link>
//           </h4>
//           <h4>
//             <Link
//               className='cursor-pointer'
//               to='contact'
//               smooth={true}
//               duration={500}>
//               Contact US
//             </Link>
//           </h4>
//           <h4>
//             <Link
//               className='cursor-pointer'
//               to='faq'
//               smooth={true}
//               duration={500}>
//               FAQs
//             </Link>
//           </h4>
//         </div>
//         <h3>Menu</h3>
//       </nav>
//     </div>
//   );
// }
// export default header;

import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  // Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  NewspaperIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "Features",
    description: "Get to know about all the features of sand tank",
    icon: SquaresPlusIcon,
    to: "#",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    to: "aboutUs",
  },
  {
    title: "Events",
    description: "Get all the Updates about the Events of sand tank",
    icon: TagIcon,
    to: "/events",
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    to: "#",
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
    to: "/news",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    to: "blogs",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, to }, key) => (
      <Link to={to} key={key}>
        <MenuItem className='flex items-center gap-3 rounded-lg'>
          <div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant='h6'
              color='blue-gray'
              className='flex items-center text-sm font-bold'>
              {title}
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs !font-medium text-blue-gray-500'>
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}>
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
      <Link to='/'>
        <Typography
          as='a'
          // href='/'
          variant='small'
          color='blue-gray'
          className='font-medium'>
          <ListItem className='flex items-center gap-2 py-2 pr-4'>
            Home
          </ListItem>
        </Typography>
      </Link>
      <NavListMenu />
      <Link to={"contactUs"}>
        <Typography
          as='a'
          variant='small'
          color='blue-gray'
          className='font-medium'>
          <ListItem className='flex items-center gap-2 py-2 pr-4'>
            Contact Us
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className='mx-auto top-2 w-screen-xl sticky z-[50] py-2'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5 lg:ml-2'>
          Sand Tank
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <IconButton
          variant='text'
          color='blue-gray'
          className='lg:hidden'
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Header;

// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const [isSticky, setIsSticky] = useState(false);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "700px",
//       threshold: 0, // Trigger when the entire element is in view
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) setIsSticky(!entry.isIntersecting);
//       });
//     }, observerOptions);

//     const navbarElement = navbarRef.current;
//     if (navbarElement) {
//       observer.observe(navbarElement);
//     }

//     return () => {
//       if (navbarElement) {
//         observer.unobserve(navbarElement);
//       }
//     };
//   }, []);

//   const resource = [
//     {
//       name: "Our Profile",
//       to: "aboutUs",
//     },
//     {
//       name: "Vision & Mission",
//       to: "vision",
//     },
//     {
//       name: "Blog",
//       to: "blogs",
//     },
//     {
//       name: "News",
//       to: "news",
//     },
//     {
//       name: "Events",
//       to: "events",
//     },
//     {
//       name: "Working Process",
//       to: "working",
//     },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.body.addEventListener("click", handleClickOutside);

//     return () => {
//       document.body.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav
//       ref={navbarRef}
//       className={`border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 ${
//         isSticky
//           ? "fixed top-0 left-0 w-full z-50 shadow-md"
//           : "absolute top-0 w-full"
//       }`}>
//       <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
//         <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
//           <img
//             src='https://media.licdn.com/dms/image/C4E0BAQHNtxsFSIDI6Q/company-logo_200_200/0/1646712718829/sandtank_logo?e=1716422400&v=beta&t=dhC7mdeLMsjlMxMDipDA98QXJjA0ZP1xsVw1ILuf19k'
//             className='h-8'
//             alt='sand tank'
//           />
//           <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
//             Sand Tank
//           </span>
//         </a>
//         <button
//           id='menu'
//           onClick={toggleMenu}
//           type='button'
//           className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
//           aria-expanded={isMenuOpen}
//           aria-controls='navbar-dropdown'>
//           <span className='sr-only'>Open main menu</span>
//           <svg
//             className='h-5 w-5'
//             aria-hidden='true'
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 17 14'>
//             <path
//               stroke='currentColor'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               strokeWidth='2'
//               d='M1 1h15M1 7h15M1 13h15'
//             />
//           </svg>
//         </button>
//         <div
//           className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
//           id='navbar-dropdown'>
//           <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900'>
//             <li>
//               <NavLink
//                 to='/'
//                 exact='true'
//                 className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
//                 aria-current='page'>
//                 Home
//               </NavLink>
//             </li>
//             <li className='relative' ref={dropdownRef}>
//               <button
//                 id='dropdownNavbarLink'
//                 onClick={toggleDropdown}
//                 className='flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
//                 aria-expanded={isDropdownOpen}
//                 aria-controls='dropdownNavbar'>
//                 Resource
//                 <svg
//                   className='ms-2.5 h-2.5 w-2.5'
//                   aria-hidden='true'
//                   xmlns='http://www.w3.org/2000/svg'
//                   fill='none'
//                   viewBox='0 0 10 6'>
//                   <path
//                     stroke='currentColor'
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     strokeWidth='2'
//                     d='m1 1 4 4 4-4'
//                   />
//                 </svg>
//               </button>
//               {/* Dropdown menu */}
//               <div
//                 id='dropdownNavbar'
//                 className={`z-10 ${
//                   isDropdownOpen ? "" : "hidden"
//                 } md:absolute w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700`}>
//                 <ul
//                   className='py-2 text-sm text-gray-700 dark:text-gray-400'
//                   aria-labelledby='dropdownLargeButton'>
//                   {resource.map((el, i) => (
//                     <li key={i + 1} onClick={toggleDropdown}>
//                       <Link
//                         to={el.to}
//                         className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
//                         {el.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//             <li>
//               <NavLink
//                 to='/aboutUs'
//                 className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'>
//                 Services
//               </NavLink>
//             </li>
//             <li>
//               <a
//                 href='#'
//                 className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'>
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <Link
//                 to='contactUs'
//                 className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
