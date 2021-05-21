import axios from "axios";
export function getCodeData(...codes) {
    return Promise.all(codes.map(code => {
        return axios.get(`http://localhost:18080/code/${code}`).then(res => res.data.result)
    }))
}
export const getTextByCode = (codedata, code) => {
    const result = codedata.find(codes => codes.code === code);
    return result ? result['text']:''
}