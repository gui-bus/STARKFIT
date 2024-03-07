import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";

const Links = [
  {
    txt: "Sobre nós",
    href: "/#About",
  },
  {
    txt: "Beneficios",
    href: "/#Benefits",
  },
  {
    txt: "Pacotes Promocionais",
    href: "/#Membership",
  },
];

const Header = () => {
  return (
    <Navbar position="sticky" isBlurred={false} isBordered className="drop-shadow-md">
      <NavbarBrand>
        <p className="font-black text-2xl select-none cursor-default text-[#1A1A1A]">SPARK<span className="text-warning">FIT</span></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        {Links.map((link) => (
          <NavbarItem key={link.href}>
            <Button variant="light" href={link.href} className="text-sm">
              {link.txt}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
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
