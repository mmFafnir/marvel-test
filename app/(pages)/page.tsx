import { ImageBgLayout } from "@/layouts/ImageBgLayout";
import { HomePage } from "@/pages/home-page";

export default function Home() {
  return (
    <ImageBgLayout src="/bg-image.png">
      <HomePage />
    </ImageBgLayout>
  );
}
