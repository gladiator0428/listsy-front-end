import React, { useEffect, useRef, useState, useContext } from "react";
import Image from "next/image";
import {
  IoMdMenu,
  IoIosSearch,
  IoIosAdd,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { TbLogin, TbUserPlus, TbUser, TbLogout } from "react-icons/tb";
import * as Styled from "./layout.styles";
import Link from "next/link";
import { Auth as AuthContext } from "@/context/contexts";
import { useRouter } from "next/router";
import { SERVER_UPLOAD_URI } from "@/config";

export const Header: React.FC = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const { authContext, setAuthContext } = useContext<any>(AuthContext);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (authContext.user) {
      setCurrentUser(authContext.user);
    } else {
      setCurrentUser(null);
    }
  }, [authContext]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthContext((prev: any) => ({ ...prev, user: null }));
    router.push("/auth/login");
  };

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderLogoWrapper>
        <div>
          <IoMdMenu size={40} />
        </div>
        <Image
          src="/assets/images/logo.png"
          width={113}
          height={43}
          alt="App logo"
          onClick={() => router.push("/")}
        />
      </Styled.HeaderLogoWrapper>
      <Styled.HeaderNavWrapper>
        <Styled.HeaderSearchInput>
          <input type="text" placeholder="Search..." onChange={() => {}} />
          <IoIosSearch size={20} color="#AFAFAF" />
        </Styled.HeaderSearchInput>
        <div className="icon-wrapper">
          <IoIosAdd size={24} />
        </div>
        <div className="icon-wrapper">
          <IoMdNotificationsOutline size={24} />
          <span />
        </div>
        <Styled.AuthActionWrapper ref={wrapperRef}>
          <Styled.AuthActionButton onClick={() => setVisible((prev) => !prev)}>
            {currentUser ? (
              currentUser?.avatar ? (
                <Image
                  src={SERVER_UPLOAD_URI + currentUser?.avatar}
                  alt="user avatar"
                  width={32}
                  height={32}
                />
              ) : (
                // <Styled.EmptyAvatar>
                currentUser?.firstName[0].toString().toUpperCase() +
                currentUser?.lastName[0].toString().toUpperCase()
                // </Styled.EmptyAvatar>
              )
            ) : (
              <TbUser size={16} />
            )}
          </Styled.AuthActionButton>
          {currentUser ? (
            <Styled.AuthListWrapper visible={visible ? "true" : undefined}>
              <Link href={"/profile"}>
                <TbUser size={24} />
                <span>Profile</span>
              </Link>
              <p onClick={handleLogout}>
                <TbLogout size={24} />
                <span>Logout</span>
              </p>
            </Styled.AuthListWrapper>
          ) : (
            <Styled.AuthListWrapper visible={visible ? "true" : undefined}>
              <Link href={"/auth/login"}>
                <TbLogin size={24} />
                <span>Sign In</span>
              </Link>
              <Link href={"/auth/register"}>
                <TbUserPlus size={24} />
                <span>Sign Up</span>
              </Link>
            </Styled.AuthListWrapper>
          )}
        </Styled.AuthActionWrapper>
      </Styled.HeaderNavWrapper>
    </Styled.HeaderWrapper>
  );
};
