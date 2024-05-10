"use client";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  SegmentedControl,
  Center,
  rem,
} from "@mantine/core";
import { IconEye, IconCode, IconExternalLink } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useState } from "react";
export default function register() {
  const ControlData = [
    {
      value: "0",
      label: (
        <Center style={{ gap: 10 }}>
          <IconEye style={{ width: rem(16), height: rem(16) }} />
          <span>Account</span>
        </Center>
      ),
    },
    {
      value: "1",
      label: (
        <Center style={{ gap: 10 }}>
          <IconCode style={{ width: rem(16), height: rem(16) }} />
          <span>Phone</span>
        </Center>
      ),
    },
    {
      value: "2",
      label: (
        <Center style={{ gap: 10 }}>
          <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
          <span>Scan</span>
        </Center>
      ),
    },
  ];

  const [type, setType] = useState("0");
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <SegmentedControl
        color="rgba(230, 0, 0, 1)"
        data={ControlData}
        transitionDuration={200}
        transitionTimingFunction="linear"
        onChange={(t) => {
          setType(t);
        }}
      />
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {type == "0" ? (
          <TextInput
            withAsterisk
            label="Account"
            placeholder="Please enter your account"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
        ) : (
          ""
        )}

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          key={form.key("termsOfService")}
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group justify="flex-end" mt="md">
          <Button
            onClick={() => {
              form.validate();
            }}
          >
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
