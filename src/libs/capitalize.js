export default function (value) {
    if (!value) return '';
    value = value.toString();
    return value[0].toUpperCase() + value.slice(1);
}