import React from "react";
import { Button } from "./button";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, IconButton, List, ListItem } from "@material-tailwind/react";
import { rc } from "@/lib/utils";

function NavLogo({ blue }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2 items-center text-lg cursor-pointer animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-out"
      onClick={() => navigate("/")}
    >
      <h1
        className={rc(
          "text-white text-lg sm:text-2xl font-bold",
          blue && "text-white"
        )}
      >
        <span className={rc("text-4xl text-primary-default", blue && 'text-white')}>F</span>UTURGRAMER
      </h1>
    </div>
  );
}

const navItemList = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Spaces",
    path: "/spaces",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];

function NavItems({ blue }) {
  const navigate = useNavigate();
  return (
    <div className="lg:flex gap-8 items-center hidden animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-out">
      {navItemList.map((item, i) => (
        <div
          key={i}
          className={rc(
            "text-white hover:opacity-90 cursor-pointer",
            blue && "text-white"
          )}
          onClick={() => navigate(item.path)}
        >
          {item.name}
        </div>
      ))}
      <Button variant={blue ? "secondary" : "default"}>Sign up</Button>
    </div>
  );
}

function DrawerWithNavigation({ pathname }) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        variant="text"
        className={rc(
          "ml-auto h-8 w-8 focus:bg-transparent active:bg-transparent lg:hidden"
        )}
        ripple={false}
        onClick={openDrawer}
        data-aos="flip-down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={pathname === "/about" ? "white" : "white"}
          stroke={pathname === "/about" ? "white" : "white"}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </IconButton>
      <Drawer open={open} onClose={closeDrawer} className="bg-background-default">
        <div className="mb-2 bg-background-default flex items-center justify-between p-5 space-x-5">
          <NavLogo />
          <IconButton variant="text" color="white" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          {navItemList.map((item, i) => (
            <ListItem
              className="opacity-80 text-primary-default focus:font-semibold focus:opacity-100 cursor-pointer "
              key={i}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

function Navbar() {
  const pathname = useLocation().pathname;
  const blue = pathname === "/about";
  return (
    <div className={rc("w-full  border-b border-primary-default bg-background-default", blue && "bg-primary-default border-white")}>
      <div
        className={rc(
          "w-full flex justify-between items-center p-5 mx-auto px-6 cont"
        )}
      >
        <NavLogo blue={blue} />
        <NavItems blue={blue} />
        <DrawerWithNavigation blue={blue} pathname={pathname} />
      </div>
    </div>
  );
}

export default Navbar;
