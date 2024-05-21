"use client";
import {
  Chip,
  Input,
  Radio,
  Button,
  Group,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
export default function Index() {
  // const { setColorScheme } = useMantineColorScheme();
  // const computedColorScheme = useComputedColorScheme("light", {
  //   getInitialValueInEffect: true,
  // });
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
    <div>
      Index
      <Radio label="I cannot be unchecked" />
      <Input placeholder="Input component" />;
      <Chip defaultChecked>Awesome chip</Chip>
      <Group>
        <Button onClick={() => setColorScheme("light")}>Light</Button>
        <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        <Button onClick={() => setColorScheme("auto")}>Auto</Button>
        <Button onClick={clearColorScheme}>Clear</Button>
      </Group>
      {/* <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      ></ActionIcon> */}
    </div>
  );
}
