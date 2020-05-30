export const getObrasApi = async () => {
    const url = `https://gobiernoabierto.cordoba.gob.ar/api/v2/obras-publicas/tipos-obras-publicas/?format=json`;
    //fetch a la api
    const res = await fetch(url);
    //respuesta en json
    const data = await res.json();
    return data;
}