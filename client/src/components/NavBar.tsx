"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
// profile menu component
const profileMenuItems = [
  {
    label: "Cerrar sesión",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const { data: session } = useSession();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={
              session?.user?.image ??
              "https://cdn-icons-png.flaticon.com/512/660/660611.png"
            }
            onClick={() => {
              if (!session?.user) {
                signIn("google"); 
              }
            }}
          />
          {session?.user ?( <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />) : ''}
        </Button>
      </MenuHandler>
      {session?.user ? (
  <MenuList className="p-1 bg-gray-400 bg-opacity-20 backdrop-blur-md rounded-lg shadow m-4">
    {profileMenuItems.map(({ label, icon }, key) => {
      const isLastItem = key === profileMenuItems.length - 1;
      return (
        <MenuItem
          key={label}
          onClick={closeMenu}
          className={`flex items-center gap-2 rounded ${
            isLastItem
              ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
              : ""
          }`}
        >
          {React.createElement(icon, {
            className: `h-4 w-4 ${isLastItem ? "text-red-800" : ""}`,
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color={isLastItem ? "red" : "inherit"}
            onClick={() => signOut()}
          >
            Cerrar sesión
          </Typography>
        </MenuItem>
      );
    })}
  </MenuList>
) : ''}
    </Menu>
  )
}

// nav list menu
const navListMenuItems = [
  {
    title: "REGLAS BÁSICAS DEL PÁDEL",
    description:
      "jugar un partido de manera reglamentaria.",
  },
  {
    title: "REGLAS DEL SAQUE EN EL PÁDEL",
    description:
      `El saque en el pádel es un momento crucial en el partido, ya que marca el inicio de un punto.
       A diferencia del tenis, el pádel tiene reglas específicas para el saque que lo distinguen..`,
  },
  {
    title: "LA PELOTA Y LA PALA DE PÁDEL",
    description:
      "Las características de la pelota y la pala de pádel también juegan un papel importante en el reglamento oficial.",
  },
];
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Reglas{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid bg-gray-400 bg-opacity-75 backdrop-blur-md rounded-lg shadow dark:bg-gray-900 m-4">
          <Card
            color="transparent"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src="https://images.pexels.com/photos/4536850/pexels-photo-4536850.jpeg?cs=srgb&dl=pexels-lluis-aragones-4536850.jpg&fm=jpg" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Reglas{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Contacto",
    icon: UserCircleIcon,
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 ">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6836/6836861.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Charro
          </span>
        </div>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
