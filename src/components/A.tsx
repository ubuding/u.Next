"use client";
import { Button, Alert } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconInfoCircle } from "@tabler/icons-react";
export default function A() {
  const icon = <IconInfoCircle />;
  return (
    <Button
      onClick={() =>
        notifications.show({
          color: "red",
          title: "Default notification",
          message: "Hey there, your code is awesome! 🤥",
        })
      }
    >
      Show notification
    </Button>
  );
}
