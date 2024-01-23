export default function MoreInfo({ params }: { params: { id: string } }) {
  return <h1>{params.id}</h1>;
}
