export function saveAsFile(fileName, data = '', postfix = (+(new Date)).toString()) {

    const lnk = document.createElement('a');
    lnk.href = `data:text/plain;content-disposition=attachment;filename=${fileName},${data}`
    lnk.download = fileName;
    lnk.target = '_blank';
    lnk.style.display = 'none';
    lnk.id = `downloadlnk-${postfix}`;
    document.body.appendChild(lnk);
    lnk.click();
    document.body.removeChild(lnk);
}
