import axios from "axios";
async function getUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

export default async function Usuario({ params }) {
    const { id } = params; 
    const usuario = await getUsuario(id); 

    return (
        <>
            <h1>Detalles del Usuario</h1>
            
            <table className="table">
            <caption>Información de la Dirección del Usuario y datos</caption>
                <thead>
                    <tr>
                        <th>Street</th>
                        <th>Suite</th>
                        <th>City</th>
                        <th>Zipcode</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.address.street}</td>
                        <td>{usuario.address.suite}</td>
                        <td>{usuario.address.city}</td>
                        <td>{usuario.address.zipcode}</td>
                        <td>{usuario.phone}</td>
                        <td>{usuario.website}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
            <caption>Información de la Geografia</caption>
                <thead>
                    <tr>
                        <th>Lat</th>
                        <th>Lng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.address.geo.lat}</td>
                        <td>{usuario.address.geo.lng}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
            <caption>Información de la compania</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CatchPhrase</th>
                        <th>bs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.company.name}</td>
                        <td>{usuario.company.catchPhrase}</td>
                        <td>{usuario.company.bs}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
