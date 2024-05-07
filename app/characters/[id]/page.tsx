import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import { CharacterElementPage } from "@/pagesFSD/CharacterElement";
import { characterService } from "@/entities/Character";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  try {
    const comics = await characterService.getById(Number(params.id));
    return {
      title: comics.results[0].name,
      description: comics.results[0].description,
    };
  } catch (error) {
    return {
      title: "Charcter no found",
    };
  }
}

const CharacterIdPage: NextPage<IProps> = async ({ params }) => {
  try {
    const character = await characterService.getById(Number(params.id));
    return <CharacterElementPage character={character.results[0]} />;
  } catch (error) {
    return notFound();
  }
};

export default CharacterIdPage;
