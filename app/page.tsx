import LandmarkContainer from "@/components/home/LandmarkContainer";

interface PageProps {
  searchParams: Promise<{ search?: string; category?: string }>;
}

const page = async ({ searchParams }: PageProps) => {
  const { search, category } = await searchParams;

  return (
    <section>
      
        <LandmarkContainer search={search} category={category} />
    </section>
  );
};

export default page;