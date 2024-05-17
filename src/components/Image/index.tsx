import "./style.scss";
import NextImage from "next/image";
import { Image as MantineImage } from "@mantine/core";
import type { MantineImageProps, NextImageProps } from "./Image";
export const Image = (props: MantineImageProps) => {
  const { src, alt = "", h = "auto", w = "auto" } = props;
  return (
    <div
      className="component image-component"
      style={{ height: h, width: "250px" }}
    >
      <MantineImage
        // src={src}
        // alt={alt}
        component={() =>
          NImage({
            src,
            alt,
            // width: w == "auto" ? 600 : w,
            // height: h == "auto" ? 600 : h,
          })
        }
        // radius="md"
      />
    </div>
  );
};

function NImage(props: NextImageProps) {
  const _props = Object.assign(props, {
    fill: true,
    // objectFit: "contain",
    objectFit: "cover",
  });
  return <NextImage {..._props} />;
}
