import "./style.scss";
import { SimpleGrid, Stack, Text } from "@mantine/core";
import {
  useViewportSize,
  useWindowScroll,
  useScrollIntoView,
} from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";
import { Image } from "#/Image";
const ImageW = 250;
interface DataItem {
  src: string;
  height: number;
}

// TODO 实现下拉加载, 图片 hover, 展示序号
export default function Waterfall({ data = [] }: { data: DataItem[] }) {
  const { width } = useViewportSize();

  const cols = useMemo(() => {
    const cols = Math.floor(width / ImageW);
    const W = cols * ImageW + (cols - 1) * 16;
    return W > width ? cols - 1 : cols;
  }, [width]);

  const group = useMemo(() => {
    if (width && cols && data.length) {
      let row: DataItem[][] = [];
      let h: Array<number> = [];
      for (let index = 0; index < cols; index++) {
        row.push([]);
        h.push(0);
      }

      let index = 0;
      data.forEach((item) => {
        if (index >= cols) {
          index = 0;
        }

        const max = Math.max(...h);
        const min = Math.min(...h);
        if (max - min >= ImageW) {
          index = h.findIndex((_) => _ === min);
        }

        row[index].push(item);
        h[index] = (h?.at(index) || 0) + item.height;
        index++;
      });
      return row;
    }
  }, [cols, data]);

  return (
    <div
      className="component waterfall-component"
      style={{
        width: cols * ImageW + (cols - 1) * 16 + "px",
      }}
    >
      <SimpleGrid
        style={{
          fontSize: "300px",
        }}
        cols={cols}
      >
        {group?.map((images, key) => (
          <Stack gap="md" key={key}>
            {images.map((image, key) => (
              <Image
                key={key}
                w={ImageW}
                h={image.height}
                src={image.src}
                alt={image.src}
                radius="md"
              />
            ))}
          </Stack>
        ))}
      </SimpleGrid>
    </div>
  );
}
