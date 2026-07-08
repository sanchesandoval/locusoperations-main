"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "gtm-call" });
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
      namespace="gtm-call"
      calLink="locusops/gtm-call"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
        theme: "auto",
      }}
    />
  );
}
