"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import pulseInnovatesBranding from "@/lib/images/branding-pulse-innovates.png";
import dangKhoiBranding from "@/lib/images/branding-dang-khoi.png";
import xynioBranding from "@/lib/images/branding-xynio.png";
import AnimateSection from "@/components/layout/AnimateSection";

export default function BrandingSection({
  noTitle = false,
}: {
  noTitle?: boolean;
}) {
  return (
    <AnimateSection id="branding">
      {!noTitle && (
        <h2 className="text-xl md:text-2xl text-textSecondary my-8">
          Branding
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mb-3">
        <div className="relative aspect-square">
          <ImageWithText
            src={pulseInnovatesBranding}
            title="BRAND: PULSE INNOVATES"
            href="/branding/pulse-innovates"
          />
        </div>
        <div className="relative aspect-square">
          <ImageWithText
            src={dangKhoiBranding}
            title="BRAND: DANG KHOI TRAVEL"
            href="/branding/dang-khoi-travel"
          />
        </div>
        <div className="relative aspect-square">
          <ImageWithText
            src={xynioBranding}
            title="BRAND: XYNIO"
            href="/branding/xynio"
          />
        </div>
      </div>
    </AnimateSection>
  );
}
