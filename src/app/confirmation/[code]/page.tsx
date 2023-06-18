type ConfirmationPageProps = { params: { code: string } };
export default function ConfirmationPage({ params }: ConfirmationPageProps) {
  const { code } = params;

  return <p>{code}</p>;
}
