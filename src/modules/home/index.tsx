"use client";
import { useRef, useState } from "react";
import { Center, Loader } from "@mantine/core";
import { useInfiniteScroll } from "ahooks";
import ImageWaterfall from "#/ImageWaterfall";
import Hot from "./components/Hot";
import { getImages } from "./service";
import "./style.scss";
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll(
    (_) => {
      console.log(_, ">>>");
      return getImages();
    },
    {
      target: ref,
      isNoMore: (_: any) => {
        console.log(_, "isNoMore >>>");
        return !_?.hasData;
      },
    }
  );

  return (
    <div ref={ref} className="module home-module">
      <Hot />
      {loading ? (
        <Center inline style={{ height: "100%" }}>
          <Loader />
        </Center>
      ) : (
        <ImageWaterfall data={data.list} />
      )}
      {loadingMore ? (
        <Center inline style={{ height: "200px" }}>
          <Loader />
        </Center>
      ) : (
        ""
      )}
    </div>
  );
}
