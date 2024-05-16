import "./style.scss";
import { SimpleGrid, Image } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";
export default function Waterfall() {
  const { width } = useViewportSize();

  // const [columns, setcolumns] = useState(0);
  const columns = useMemo(() => {
    if (width < 600) {
      return 1;
    } else if (width < 800) {
      return 2;
    } else if (width < 1000) {
      return 3;
    } else if (width < 1200) {
      return 4;
    } else if (width < 1400) {
      return 5;
    }
    return 6;
  }, [width]);

  useEffect(() => {
    console.log(columns, "columnscolumnscolumnscolumns");
  }, [columns]);
  return (
    <div className="component waterfall-component">
      <SimpleGrid
        style={{
          fontSize: "300px",
        }}
        cols={{
          xl: 6,
          lg: 5,
          md: 4,
          sm: 3,
          xs: 2,
        }}
      >
        <Image h={200} radius="md" src="/images/1.jpg" alt="/images/1.jpg" />
        <Image h={300} radius="md" src="/images/2.jpg" alt="/images/1.jpg" />
        <Image h={250} radius="md" src="/images/3.jpg" alt="/images/1.jpg" />
        <Image h={200} radius="md" src="/images/4.jpg" alt="/images/1.jpg" />
        <Image h={250} radius="md" src="/images/5.jpg" alt="/images/1.jpg" />
        <Image h={300} radius="md" src="/images/6.jpg" alt="/images/1.jpg" />
        <Image h={200} radius="md" src="/images/7.jpg" alt="/images/1.jpg" />
      </SimpleGrid>
    </div>
  );
}
