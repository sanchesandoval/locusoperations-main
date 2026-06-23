"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "locus-revenue-motion-audit" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#2d7a6e" },
          dark: { "cal-brand": "#2d7a6e" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="locus-revenue-motion-audit"
      calLink="locusops/locus-revenue-motion-audit"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
        theme: "auto",
      }}
    />
  );
}
