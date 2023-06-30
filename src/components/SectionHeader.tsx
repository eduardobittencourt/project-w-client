import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";

export type SectionHeaderProps = {
  title: string;
  description: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
};

export default function SectionHeader({
  title,
  description,
  image,
}: SectionHeaderProps) {
  return (
    <section className="my-10 grid items-center gap-10 lg:my-0 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2">
      <div>
        <h1 className="mb-4 font-serif text-lg">{title}</h1>
        <p className="mb-8 text-sm">{description}</p>
        <ArrowDownIcon className="mx-auto hidden h-6 w-6 animate-bounce fill-red lg:block" />
      </div>

      <Image src={image.src} alt={image.alt} className="justify-self-center" />
    </section>
  );
}
