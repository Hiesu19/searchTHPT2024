module.exports = {
    titleToSlug: function convertToCamelCase(text) {
        const vietnameseMap = {
            à: "a",
            á: "a",
            ả: "a",
            ã: "a",
            ạ: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẳ: "a",
            ẵ: "a",
            ặ: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẩ: "a",
            ẫ: "a",
            ậ: "a",
            è: "e",
            é: "e",
            ẻ: "e",
            ẽ: "e",
            ẹ: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ể: "e",
            ễ: "e",
            ệ: "e",
            ì: "i",
            í: "i",
            ỉ: "i",
            ĩ: "i",
            ị: "i",
            ò: "o",
            ó: "o",
            ỏ: "o",
            õ: "o",
            ọ: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ổ: "o",
            ỗ: "o",
            ộ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ở: "o",
            ỡ: "o",
            ợ: "o",
            ù: "u",
            ú: "u",
            ủ: "u",
            ũ: "u",
            ụ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ử: "u",
            ữ: "u",
            ự: "u",
            ỳ: "y",
            ý: "y",
            ỷ: "y",
            ỹ: "y",
            ỵ: "y",
            đ: "d",
        };

        // Remove accents and convert to English equivalent
        text = text
            .toLowerCase()
            .normalize("NFD") // Decompose combined characters
            .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
            .split("")
            .map((char) => vietnameseMap[char] || char)
            .join("");

        // Remove punctuation and transform to camel case
        return text
            .replace(/[^a-zA-Z0-9 ]/g, "") // Remove punctuation
            .split(/ +/) // Split by spaces
            .map((word, index) => {
                if (index === 0) {
                    return word;
                }
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join("");
    },
};
