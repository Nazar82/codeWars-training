// https://www.codewars.com/kata/extract-the-contents-of-a-given-tag-from-the-html-document/train/javascript



function getTagContent(htmlString, tag) {
    return !new RegExp(`</?${tag}.?>`, 'g').test(htmlString) ? [] : htmlString.replace(/\n/g, '').replace(/\s{2,}/g, '').match(new RegExp(`<${tag}.+?${tag}>`, 'g')).map(el => el.replace(new RegExp(`</?${tag}.*?>`, 'g'), ''));
}

function getTagContent(htmlString, tag) {
    if (!new RegExp(`</?${tag}.?>`, 'g').test(htmlString)) {
        return [];
    }
    const fixedStr = htmlString.replace(/\n/g, '').replace(/\s{2,}/g, '');
    return fixedStr.match(new RegExp(`<${tag}.+?${tag}>`, 'g')).map(el => el.replace(new RegExp(`</?${tag}.*?>`, 'g'), ''));
}
