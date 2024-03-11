import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";

const Links = [
  {
    txt: "Beneficios",
    href: "/#Benefits",
  },
  {
    txt: "Sobre nós",
    href: "/#About",
  },
  {
    txt: "Planos",
    href: "/#Membership",
  },
  {
    txt: "Suplementos",
    href: "/#Supplements",
  },
];

const Header = () => {
  return (
    <Navbar
      position="sticky"
      isBlurred={false}
      isBordered
      className="drop-shadow-md"
    >
      <NavbarBrand>
        <Link href="#" className="cursor-pointer">
          <p className="font-black text-2xl select-none text-[#1A1A1A]">
            STARK<span className="text-warning">FIT</span>
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-2" justify="center">
        {Links.map((link) => (
          <NavbarItem key={link.href}>
            <Button
              variant="light"
              href={link.href}
              className="text-sm"
              as={Link}
            >
              {link.txt}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#"
            variant="shadow"
            className="text-white"
            endContent={<FaWhatsapp size={25} />}
            radius="sm"
          >
            WhatsApp
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
