'use client';

import React from 'react';
import * as motion from "motion/react-client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
   <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
         {children}
    </motion.div>
  );
}