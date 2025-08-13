export default async function page ({ params }:{ params: Promise<{ item: string }>}) {
    const { item } = await params;
    return (
        <div>
            <h1>Item Page</h1>
            <p>Viewing item: {item}</p>
        </div>
    );
}
