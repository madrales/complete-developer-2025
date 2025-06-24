import fetch from "node-fetch";

const routeHello = () => "Hello World!";

const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        return error;
    }
    const names = data.map((item) => `id: ${item.id}, name: ${item.name}`).join("<br>");
    return names;
};
export {routeHello, routeAPINames };