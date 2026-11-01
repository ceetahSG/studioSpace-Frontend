import EditStudioForm from "./EditStudioForm";

export default async function EditStudioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`http://localhost:5000/studio/id/${id}`);
  const studio = await data.json();
  console.log("Fetched studio data:", studio);

  return <EditStudioForm studio={studio} />;
}
