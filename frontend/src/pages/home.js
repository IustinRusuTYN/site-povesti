// src/pages/home.js
import React from "react";
import PageLayout from "../components/pagelayout";
/**
 * home - page orchestrator
 *
 * This page imports small, focused components from src/components/home:
 * - herosection
 * - featuredstoriescarousel
 * - adfreesection
 *
 * Keeping page file minimal: it simply composes the smaller pieces.
 */
import Herosection from "../components/home/herosection";
import FeaturedStoriesCarousel from "../components/home/featuredstoriescarousel";
import Adfreesection from "../components/home/adfreesection";

export default function Home() {
  return (
    <PageLayout>
      <Herosection />
      <FeaturedStoriesCarousel />
      <Adfreesection />
    </PageLayout>
  );
}
