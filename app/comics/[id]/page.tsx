import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import { ComicsElementPage } from "@/pagesFSD/ComicsElement";
import { comicsService } from "@/entities/Comics";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const comics = await comicsService.getById(Number(params.id));
  return {
    title: comics.results[0].title,
    description: comics.results[0].description,
  };
}

const ComicsIdPage: NextPage<IProps> = async ({ params }) => {
  try {
    const comics = await comicsService.getById(Number(params.id));
    return <ComicsElementPage comics={comics.results[0]} />;
  } catch (error) {
    return notFound();
  }
};

export default ComicsIdPage;
