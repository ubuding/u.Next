import "./style.scss";
import { ActionIcon } from "@mantine/core";
import { IconBrandGithub, IconSun, IconMoon } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div className="component navbar-component">
      <div className="navbar">
        <div className="logo"></div>
        <div className="tools">
          <div className="user item"></div>
          <div className="git item">
            <ActionIcon
              size="xl"
              variant="gradient"
              gradient={{ from: "orange", to: "yellow", deg: 223 }}
            >
              <IconBrandGithub />
            </ActionIcon>
          </div>
          <div className="theme item">
            <ActionIcon
              size="xl"
              variant="gradient"
              gradient={{ from: "orange", to: "yellow", deg: 223 }}
            >
              <IconSun />
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
