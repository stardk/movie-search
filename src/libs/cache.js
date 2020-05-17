export default {
    getItem: function (name) {
        return JSON.parse(localStorage[name]);
    },
    setItem: function (name, item) {
        localStorage[name] = JSON.stringify(item);
    }
}