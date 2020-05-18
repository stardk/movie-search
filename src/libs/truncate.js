export default function (value) {
    if (!value) return '';
    value = value.toString();
    return value.length > 35 ? (value.slice(0, 33).trim() + '...') : value;
}