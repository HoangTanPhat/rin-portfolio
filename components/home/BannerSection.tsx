"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import banner from "public/images/banner-1.png";
import * as motion from "motion/react-client";

export default function BannerSection() {
  return (
    <motion.section
          id='banner-section'
          initial={{ opacity: 0, x: 50, transition: { duration: 0.5 } }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          viewport={{ amount: 0.4, once: true }}
          className="relative scroll-smooth"
        >
            <ImageWithText fullSize={true} src={banner} />      
    </motion.section>
  );
}
