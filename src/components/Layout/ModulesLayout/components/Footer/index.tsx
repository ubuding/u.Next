import { Text } from "@mantine/core";
import { IconLink, IconMail } from "@tabler/icons-react";

import "./style.scss";
export default function Footer() {
  return (
    <div className="modules-layout footer-wrap">
      <div className="item">
        <IconMail size={16} color="#fff" />
        <Text
          size="sm"
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "teal", deg: 166 }}
        >
          Email
        </Text>
      </div>
      <div className="item">
        <IconLink size={16} color="#fff" />
        <Text
          size="sm"
          fw={900}
          variant="gradient"
          gradient={{ from: "red", to: "yellow", deg: 166 }}
        >
          Address
        </Text>
      </div>

      <div className="item text"></div>
    </div>
  );
}
