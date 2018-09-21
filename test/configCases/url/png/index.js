import url from "./file.png";

it("should output assets with module.type === 'url'", () => {
	expect(url).toEqual("/file.png");
})
