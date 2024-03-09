import React from "react";
import classNames from "classnames";
import { Route } from "../../interfaces";
import { Link } from "react-router-dom";
import NavItem from "../shared/NavItem";
import Tooltip from "../shared/Tooltip";
import { HiMenu } from "react-icons/hi";
import { useLocation } from "react-router";
import routes from "../../routes";
import { getPath } from "../../utils";

const Header = () => {
  const [show, setShow] = React.useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = React.useState<number>(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [secondVariant, setSecondVariant] = React.useState<boolean>(false);
  const [toggleMoblie, setToggleMoblie] = React.useState<boolean>(false);
  const menuLeft = React.useRef<HTMLDivElement>(null);
  let pathname = getPath(useLocation().pathname, 1);

  React.useEffect(() => {
    if (
      pathname === "/recruitment" ||
      pathname === "/about-us" ||
      pathname === "/contactus"
    ) {
      setSecondVariant(true);
    } else {
      setSecondVariant(false);
    }
  }, [pathname]);

  const menuToggle = () => {
    menuLeft.current?.classList.toggle("menu-toggle");
  };

  return (
    <>
      <div
        className={classNames(
          "px-[40px] lg:px-[150px] flex space-between justify-between items-center h-[70px] lg:h-[120px] fixed top-0 w-full z-50 transition duration-100  drop-shadow-md  ease-linear ",
          secondVariant ? "bg-white" : "bg-primary",
          show ? "" : "translate-y-[-100%]"
        )}
      >
        <Link to="/">
          <svg x="0px" y="0px" viewBox="0 0 1500 1500" width="165">
            <style type="text/css"></style>
            <g id="V_2_">
              <g id="V_1_">
                <title>Logo2020</title>
                <polygon
                  id="V"
                  className={classNames("fill-[#ff7200]")}
                  points="105.6,547 190.5,547 291.5,765.2 413.3,547 477.2,547 291.4,953.5  "
                ></polygon>
              </g>
            </g>
            <g id="M_2_">
              <g id="M_3_">
                <polygon
                  id="M_4_"
                  className={classNames(
                    secondVariant ? "fill-primary" : " fill-[#ffff]"
                  )}
                  points="344.9,953.5 528.8,547.7 681.3,853.1 830.3,547.7 1028.9,953.5 959.8,953.5 833.8,727.4  718.2,953.5 651.3,953.5 525.4,730.8 416.9,953.5  "
                ></polygon>
              </g>
            </g>
            <g id="O_2_">
              <g id="O_1_">
                <path
                  id="O"
                  className={classNames(
                    secondVariant ? "fill-primary" : " fill-[#ffff]"
                  )}
                  d="M1190,547c-112.2,0.5-202.8,92-202.2,204.3s92.1,202.8,204.4,202.2c111.8-0.6,202.2-91.4,202.2-203.2 C1394.1,637.7,1302.6,546.7,1190,547z M1277.9,857.2c-59.8,45.9-152.3,41.1-198.1-18.7c-45.8-59.8-18.4-145.1,41.4-190.9 c59.8-45.8,140.3-50.4,186.1,9.4C1353.1,716.8,1337.7,811.3,1277.9,857.2L1277.9,857.2z"
                ></path>
              </g>
            </g>
          </svg>
        </Link>

        <div className="hidden lg:flex items-center justify-around space-x-6 font-semibold  text-typography-secondary">
          {routes.map((route) =>
            !route.dropdown ? (
              <NavItem
                textPrimary={secondVariant ? "text-primary" : "text-white"}
                textHover={secondVariant ? "text-extra" : "text-[whitesmoke]"}
                title={route.title}
                path={
                  route.dropdownData && route.dropdownPath
                    ? route.dropdownPath(route.dropdownData[0])
                    : route.href
                }
                key={route.href}
                activeNav={true}
                activeUnderline={true}
              ></NavItem>
            ) : (
              <Tooltip key={route.href}>
                <NavItem
                  textPrimary={secondVariant ? "text-primary" : "text-white"}
                  textHover={secondVariant ? "text-extra" : "text-[whitesmoke]"}
                  title={route.title}
                  path={
                    route.dropdownData && route.dropdownPath
                      ? route.dropdownPath(route.dropdownData[0])
                      : route.href
                  }
                  key={route.href}
                  dropdown={route.dropdown}
                  activeNav={true}
                  activeUnderline={true}
                ></NavItem>
                <Tooltip.Panel
                  className={classNames(
                    "flex w-80 flex-col items-start px-4 py-5  ",
                    secondVariant
                      ? "bg-white text-primary"
                      : "bg-primary text-secondary"
                  )}
                >
                  {route.dropdownData?.map((data) => (
                    <NavItem
                      textPrimary={
                        secondVariant ? "text-primary" : "text-white"
                      }
                      textHover={secondVariant ? "text-white" : "text-primary"}
                      className="hover:text-secondary mt-5"
                      title={data.title}
                      path={data.slug}
                      key={data.title}
                    />
                  ))}
                </Tooltip.Panel>
              </Tooltip>
            )
          )}
        </div>

        <div
          className={classNames(
            "text-[30px]  block lg:hidden",
            secondVariant ? "text-primary" : "text-white"
          )}
          onClick={menuToggle}
        >
          <HiMenu />
        </div>
      </div>
      <div
        className={classNames(
          "lg:hidden absolute left-0 top-[60px] flex flex-col  translate-x-[100%] transition ease duration-500 overflow-hidden w-full h-screen bg-primary "
        )}
        ref={menuLeft}
      >
        {routes.map((route) => (
          <NavItem
            textPrimary={secondVariant ? "text-primary" : "text-white"}
            textHover={secondVariant ? "text-extra" : "text-[whitesmoke]"}
            title={route.title}
            path={route.href}
            key={route.href}
            activeNav={true}
            className="text-[14px] font-[700] p-5 border-b-[0.5px] border-[rbga(52,35,82,0.2)]"
            // onClick={() => {
            //   menuToggle;
            // }}
          ></NavItem>
        ))}
      </div>
    </>
  );
};

export default React.memo(Header);
