export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product: {params.id}</h1>
    </div>
  );
}
