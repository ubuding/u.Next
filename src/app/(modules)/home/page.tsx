"use client";
import { getImages } from "@/images";
import { useEffect, useState } from "react";
import Hot from "#/Hot";
import Waterfall from "#/Waterfall";
import "./style.scss";
export default function Home() {
  const [list, setList] = useState<number[]>([]);
  useEffect(() => {
    getImages().then((data: any) => {
      setList(data);
    });
  }, []);
  return (
    <div className="module home-module">
      <Hot />
      <h2>Images</h2>
      <Waterfall data={list} />
    </div>
  );
}
