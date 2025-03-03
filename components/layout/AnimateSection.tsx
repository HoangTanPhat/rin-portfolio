"use client";

import React from "react";
import * as motion from "motion/react-client";

interface AnimateSectionProps {
  id?: string;
  children: React.ReactNode;
}

export default function AnimateSection({ id, children }: AnimateSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ amount: 0.4, once: true }}
      className="relative scroll-smooth"
    >
      {children}
    </motion.section>
  );
}
