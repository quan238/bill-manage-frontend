import { FC, useState } from "react";
import { Avatar, Box, Theme, useMediaQuery } from "@mui/material";
import LayoutDrawer from "layout/Main/LayoutDrawer";
import Scrollbar from "components/Scrollbar";
import { FlexBetween } from "components/Flex-box";
import { navigations } from "./NavigationList";
import SidebarAccordion from "./SidebarAccordion";
import {
  ListLabel,
  BadgeValue,
  StyledText,
  BulletIcon,
  NavWrapper,
  ExternalLink,
  NavItemButton,
  SidebarWrapper,
  ChevronLeftIcon,
  ListIconWrapper,
} from "./LayoutStyledComponents";
import { useLocation, useNavigate } from "react-router-dom";

const TOP_HEADER_AREA = 70;

// -----------------------------------------------------------------------------
type DashboardSidebarProps = {
  sidebarCompact: any;
  showMobileSideBar: any;
  setSidebarCompact: () => void;
  setShowMobileSideBar: () => void;
};
// -----------------------------------------------------------------------------

const Sidebar: FC<DashboardSidebarProps> = (props) => {
  const {
    sidebarCompact,
    showMobileSideBar,
    setShowMobileSideBar,
    setSidebarCompact,
  } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const [onHover, setOnHover] = useState(false);
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  // side hover when side bar is compacted
  const COMPACT = sidebarCompact && !onHover ? 1 : 0;
  // handle active current page
  const activeRoute = (path: string) => (location.pathname === path ? 1 : 0);

  // handle navigate to another route and close sidebar drawer in mobile device
  const handleNavigation = (path: string) => {
    navigate(path);
    setShowMobileSideBar();
  };

  const renderLevels = (data: any) => {
    return data.map((item: any, index: any) => {
      if (item.type === "label")
        return (
          <ListLabel key={index} compact={COMPACT}>
            {item.label}
          </ListLabel>
        );

      if (item.children) {
        return (
          <SidebarAccordion key={index} item={item} sidebarCompact={COMPACT}>
            {renderLevels(item.children)}
          </SidebarAccordion>
        );
      } else if (item.type === "extLink") {
        return (
          <ExternalLink
            key={index}
            href={item.path}
            rel="noopener noreferrer"
            target="_blank"
          >
            <NavItemButton key={item.name} name="child" active={0}>
              {item.icon ? (
                <ListIconWrapper>
                  <item.icon />
                </ListIconWrapper>
              ) : (
                <span className="item-icon icon-text">{item.iconText}</span>
              )}

              <StyledText compact={COMPACT}>{item.name}</StyledText>

              {/* <Box mx="auto" /> */}

              {item.badge && (
                <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue>
              )}
            </NavItemButton>
          </ExternalLink>
        );
      } else {
        return (
          <Box key={index}>
            <NavItemButton
              key={item.name}
              className="navItem"
              active={activeRoute(item.path)}
              onClick={() => handleNavigation(item.path)}
            >
              {item?.icon ? (
                <ListIconWrapper>
                  <item.icon />
                </ListIconWrapper>
              ) : (
                <BulletIcon active={activeRoute(item.path)} />
              )}

              <StyledText compact={COMPACT}>{item.name}</StyledText>

              {/* <Box mx="auto" /> */}

              {item.badge && (
                <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue>
              )}
            </NavItemButton>
          </Box>
        );
      }
    });
  };

  const content = (
    <Scrollbar
      autoHide
      clickOnTrack={false}
      sx={{
        overflowX: "hidden",
        maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
      }}
    >
      <NavWrapper compact={sidebarCompact}>
        {renderLevels(navigations)}
      </NavWrapper>
    </Scrollbar>
  );

  if (downLg) {
    return (
      <LayoutDrawer
        open={showMobileSideBar ? true : false}
        onClose={setShowMobileSideBar}
      >
        <Box p={2} maxHeight={TOP_HEADER_AREA}>
          <img
            alt="Logo"
            width={105}
            height={50}
            src="/assets/images/logo.svg"
            style={{ marginLeft: 8 }}
          />
        </Box>

        {content}
      </LayoutDrawer>
    );
  }

  return (
    <SidebarWrapper
      compact={sidebarCompact ? 1 : 0}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => sidebarCompact && setOnHover(false)}
    >
      <FlexBetween
        p={2}
        maxHeight={TOP_HEADER_AREA}
        justifyContent={COMPACT ? "center" : "space-between"}
      >
        <Avatar
          src={
            COMPACT
              ? "/assets/images/bazaar-white-sm.svg"
              : "/assets/images/logo.svg"
          }
          sx={{ borderRadius: 0, width: "auto", marginLeft: COMPACT ? 0 : 1 }}
        />

        <ChevronLeftIcon
          color="disabled"
          compact={COMPACT}
          onClick={setSidebarCompact}
          sidebarcompact={sidebarCompact ? 1 : 0}
        />
      </FlexBetween>

      {content}
    </SidebarWrapper>
  );
};

export default Sidebar;
