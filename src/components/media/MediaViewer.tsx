"use client";

import React from "react";
import { MediaAsset } from "./MediaContext";
import { ImageViewer } from "./ImageViewer";
import { VideoPlayer } from "./VideoPlayer";

export function MediaViewer({ item }: { item: MediaAsset }) {
  if (item.type === "video") {
    return <VideoPlayer item={item} />;
  }

  return <ImageViewer item={item} />;
}
