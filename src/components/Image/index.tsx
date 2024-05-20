import "./style.scss";
import NextImage from "next/image";
import { Image as MantineImage } from "@mantine/core";
import type { MantineImageProps, NextImageProps } from "./type";
import { useMemo } from "react";
export const Image = (props: MantineImageProps) => {
  const {
    src,
    alt = "",
    height = "auto",
    width = "250px",
    className = "",
  } = props;
  return (
    <div
      className={"component image-component " + className}
      style={{ height, width }}
    >
      <MantineImage
        component={() =>
          NImage({
            src,
            alt,
          })
        }
      />
    </div>
  );
};

function NImage(_: NextImageProps) {
  const props = useMemo(
    () =>
      Object.assign(_, {
        fill: true,
        objectFit: "cover",
      }),
    [_]
  );
  return <NextImage {...props} />;
}
