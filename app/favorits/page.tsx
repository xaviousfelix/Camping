// app/favorits/page.tsx
import { Suspense } from "react";
import ClientPage from "./ClientPage";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ClientPage />
    </Suspense>
  );
}
