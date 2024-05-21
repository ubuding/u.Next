import "./style.scss";
import { ActionIcon, Avatar, Popover, Button } from "@mantine/core";
import { IconBrandGithub, IconSun, IconLogout } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div className="modules-layout navbar-wrap">
      <div className="navbar">
        <div className="logo-wrap">
          <div className="logo"></div>
        </div>
        <div className="label"></div>

        <div className="tools">
          <div className="user item"></div>

          <div className="git item">
            <ActionIcon
              size="xl"
              variant="gradient"
              // gradient={{ from: "orange", to: "yellow", deg: 223 }}
            >
              <IconBrandGithub />
            </ActionIcon>
          </div>
          <div className="theme item">
            <ActionIcon
              size="xl"
              variant="gradient"
              // gradient={{ from: "orange", to: "yellow", deg: 223 }}
            >
              <IconSun />
            </ActionIcon>
          </div>

          <div className="avatar item">
            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Avatar src="avatar.png" alt="it's me" />
              </Popover.Target>
              <Popover.Dropdown>
                <Button>
                  <IconLogout /> Logout
                </Button>
              </Popover.Dropdown>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
