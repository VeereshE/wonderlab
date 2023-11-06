"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar, Stack, Drawer, Typography, Link } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../commomImages/filled-logo.svg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { H5_1 } from "@/theme/fonts";

const HeaderBar = () => {
  const [isOpenDrawer, setIsOpenDrawr] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#000000" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#000000",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              background: "#FFFFFF",
              maxHeight: "90px",
            }}
          >
            <Image
              src={logo}
              width={60}
              height={10}
              alt="logo"
              style={{
                height: "40%",
              }}
            />
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsOpenDrawr(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isOpenDrawer}>
        <Stack
          minWidth={"40%"}
          padding={"40px"}
          sx={{
            backgroundColor: "#000000",
            direction: "column",
            flexGrow: 1,
            color: "#FFFFFF",
          }}
        >
          <CloseIcon
            onClick={() => setIsOpenDrawr(false)}
            sx={{ alignSelf: "flex-end", width: "24px" }}
          />
          <Stack alignSelf={"center"} flexGrow={1} justifyContent={"center"}>
            {[
              "HOME",
              "ABOUT US",
              "OUR COMPANIES",
              "TEAMS",
              "CASE STUDIES",
              "CONTACT",
            ].map((each) => (
              <Typography variant="h5" sx={{ fontSize: H5_1 }}>
                <Link href={"#"} underline="hover" color="inherit">
                  {each}
                </Link>
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default HeaderBar;
