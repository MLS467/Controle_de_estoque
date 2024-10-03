import { endpoints } from "./endpoints.js";
async function ExcluirTel(id, num) {
    const res = await fetch(`${endpoints.excluirTelColab}?id=${id}&numero=${num}`);
    if (res.status === 200)
        return true;
    return false;
}

export { ExcluirTel };