import { CharactersList } from "@/widgets/CharactersList";
import { ImageBgLayout } from "../ImageBgLayout/ImageBgLayout";

export const HomePage = () => {
  return (
    <ImageBgLayout src="/bg-image.png">
      <main>
        <CharactersList />
      </main>
    </ImageBgLayout>
  );
};
