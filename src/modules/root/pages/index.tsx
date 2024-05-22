"use client";
import {
  Chip,
  Input,
  Radio,
  Button,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Notification,
  useComputedColorScheme,
  Alert,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { getInfo } from "@/root/service";
import { useRootStore } from "@/root/store";
export default function Index() {
  const changeLanguage = (lng: "zh" | "en") => {
    // i18n.changeLanguage(lng);
  };

  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  const count = useRootStore((state) => state.count);
  const increment = useRootStore((state) => state.increment);
  const apiInfo = () => {
    getInfo({ name: "ubuding" }).then((resp) => {
      console.log(resp.data.title);
    });
  };
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
      <Alert variant="light" color="blue" title="Alert title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis,
        quae tempore necessitatibus placeat saepe.
      </Alert>
      <Notification title="We notify you that">
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
      <Group>
        <Button onClick={() => apiInfo()}>service</Button>
        <Button onClick={() => increment(1)}>{count}</Button>
      </Group>
      <Group>
        {/* {t("title")}？？？ */}
        <Button onClick={() => changeLanguage("en")}>English</Button>
        <Button onClick={() => changeLanguage("zh")}>chinese</Button>
      </Group>
    </div>
  );
}
