import { getGift } from "@/resources/getGift";

type GiftPageProps = { params: { id: string } };
export default async function GiftPage({ params }: GiftPageProps) {
  const { id } = params;
  const gift = await getGift(id);
  console.log(gift);

  return <div></div>;
}
