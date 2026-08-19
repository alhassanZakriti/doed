import { Suspense } from "react";
import { GetStartedPageContent } from "@/components/GetStartedPageContent";

export default function GetStartedPage() {
  return (
    <Suspense fallback={null}>
      <GetStartedPageContent />
    </Suspense>
  );
}
