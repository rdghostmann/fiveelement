//tableToExcel 
import { createElement } from "react"; 
import * as XSLX from "xlsx";

export const tableToExcel = (tableId, fileName) => {
    const table = document.getElementById(tableId); 
    const Link = createElement('link'); 
    const worksheet = XSLX.utils.table_to_sheet(table);
    const workbook = XSLX.utils.book_new(); 
    XSLX.utils.book_append_sheet(workbook, worksheet, fileName);

    const s2ab = (s) => {

        const buf = new ArrayBuffer(s.length);

        const view = new Uint8Array(buf);

        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;

        return buf;

    }


    //Generate a download link

    const wbout = XSLX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

    const url = window.URL.createObjectURL(blob);

    Link.ref = url;

    Link.download = `${fileName}.xlsx`;

    Link.click();
}