'use client';

import React from 'react';
import * as motion from "motion/react-client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
   <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
         {children}
    </motion.div>
  );
}