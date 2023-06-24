import NavItem from "./NavItem";
import { useDisclosure } from "@mantine/hooks";
// import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group } from "@mantine/core";
import Humberger from "./Humberger";
import {Link} from "react-router-dom";

const LINKS = [
  { title: "Home", path: "/" },
  { title: "Items", path: "/items" },
  { title: "About", path: "/about" },
  { title: "F&Q", path: "/FAQPage" },
];
function DropDownMenu() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        withCloseButton={false}
        overlayProps={{ opacity: 0.85 }}
        size="80%"
      >
        <Drawer.Header>
          <Drawer.Title className=" w-full text-center"></Drawer.Title>
          <Drawer.CloseButton size={"md"} />
        </Drawer.Header>
        <Drawer.Body className="overflow-hidden">
          <ul className="flex flex-col justify-center items-center gap-10 text-xl text-center   bg-white hover:text-white">
            {LINKS.map((link, index) => (
              <NavItem key={index} href={link.path} toggleDropDown={close}>
                {link.title}
              </NavItem>
            ))}
          </ul>
          <div  className="flex justify-center mt-10" onClick={close}>
          <Link to={"/login"} className="btn btn-primary py-1  rounded-md btn-md bg-green-700/80 text-neutral-100 border-0  hover:bg-green-700 transition-all">
            Get Started
          </Link>
          </div>
        </Drawer.Body>
        {/* Drawer content */}
      </Drawer>
      <Group position="center">
        <Humberger openDrawer={open} />
      </Group>
    </>
  );
}
export default DropDownMenu;
