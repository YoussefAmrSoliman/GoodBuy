 const page = ({ params }:{ params: { item: String } }) =>(
    <div>
        <h1>Item Page</h1>
        <p>Viewing item: {params.item}</p>
    </div>
)
export default page;