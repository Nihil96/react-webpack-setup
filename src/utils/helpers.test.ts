import { formatDate } from "./helpers";

describe("formatDate", () => {
    it("should return the date in the YYYY-MM-DD format", () => {
        const date = new Date(2022, 11, 29);
        const result = formatDate(date, "YYYY-MM-DD");
        expect(result).toEqual("2022-12-29");
    });

    it("should return the date and time in the YYYY-MM-DD HH:mm:ss format", () => {
        const date = new Date(2022, 11, 29, 12, 34, 56);
        const result = formatDate(date, "YYYY-MM-DD HH:mm:ss");
        expect(result).toEqual("2022-12-29 12:34:56")
    })
})