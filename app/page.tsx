import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ search?: string; category?: string }>;
}

const page = async ({ searchParams }: PageProps) => {
  const { search, category } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};

export default page;