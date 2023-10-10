"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavItem = ({
  children,
  ...props
}: LinkProps & { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`block w-full py-3 px-4 text-white hover:bg-gray-600 ${
        pathname === props.href && "bg-gray-600  font-bold"
      }`}
      {...props}
    >
      {children}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="min-h-screen bg-gray-700 min-w-[300px]">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/data-loading">Data Loading</NavItem>
      <NavItem href="/mixing-components">Mixing Component</NavItem>
      <NavItem href="/waterfall/nested">Waterfall</NavItem>
      <NavItem href="/form">Form</NavItem>
      <NavItem href="/todos">Todos</NavItem>
      <NavItem href="/dashboard">Parallel Routes</NavItem>
      <NavItem href="/login">Interception Routes</NavItem>
    </nav>
  );
};
