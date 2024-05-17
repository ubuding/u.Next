"use client";
import { getImages } from "@/images";
import { useRef } from "react";
import Hot from "#/Hot";
import Waterfall from "#/Waterfall";
import "./style.scss";
import { useInfiniteScroll } from "ahooks";
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
      <h2>Images</h2>
      {loading ? "" : <Waterfall data={data.list} />}
    </div>
  );
}
