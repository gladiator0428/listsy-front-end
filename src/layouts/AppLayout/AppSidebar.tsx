import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaGoogle,
  FaBuilding,
  FaCarSide,
  FaShoppingBag,
  FaRegQuestionCircle,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineKeyboardArrowDown,
  MdHome,
  MdShoppingCartCheckout,
  MdPets,
} from "react-icons/md";
import { RiMessage2Fill, RiServiceLine } from "react-icons/ri";
import { PiPlusBold } from "react-icons/pi";
import * as Styled from "./layout.styles";

const mainNav = [
  {
    label: "Home",
    href: "/",
    icon: <MdHome />,
  },
  {
    label: "For Sale",
    href: "/sale",
    icon: <MdShoppingCartCheckout />,
  },
  {
    label: "Real Estate",
    href: "/realestate",
    icon: <FaBuilding />,
  },
  {
    label: "Trucks",
    href: "/trucks",
    icon: <FaCarSide />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <RiServiceLine />,
  },
  {
    label: "Pets",
    href: "/pets",
    icon: <MdPets />,
  },
  {
    label: "Jobs",
    href: "/jobs",
    icon: <FaShoppingBag />,
  },
];

export const AppSidebar: React.FC = () => {
  return (
    <Styled.AppSidebarWrapper>
      <Styled.AppSidebarContainer>
        <Styled.SidebarCountrySelect>
          <p>
            <MdLocationOn size={15} />
            <span>Las Vegas, NV, United States</span>
            <MdOutlineKeyboardArrowDown size={15} />
          </p>
        </Styled.SidebarCountrySelect>
        <div>
          {mainNav.map((item, key) => (
            <Styled.SidebarMainNavItem href={item.href} key={key}>
              {item.icon}
              <span>{item.label}</span>
            </Styled.SidebarMainNavItem>
          ))}
        </div>
        <Styled.SidebarCommunity>
          <h1>
            <span>Community</span>
            <PiPlusBold size={20} />
          </h1>
        </Styled.SidebarCommunity>
        <div>
          <Styled.SidebarMainNavItem href={"/help"}>
            <FaRegQuestionCircle />
            <span>Help</span>
          </Styled.SidebarMainNavItem>
          <Styled.SidebarMainNavItem href={"/feedback"}>
            <RiMessage2Fill />
            <span>Feedback</span>
          </Styled.SidebarMainNavItem>
        </div>
      </Styled.AppSidebarContainer>
      <Styled.AppSidebarFooter>
        <Styled.SidebarFooterNav>
          <a href="#">About</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Notice</a>
        </Styled.SidebarFooterNav>
        <h1>@2023 Listsy</h1>
        <Styled.SidebarSocialNav>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaGoogle />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </Styled.SidebarSocialNav>
      </Styled.AppSidebarFooter>
    </Styled.AppSidebarWrapper>
  );
};
