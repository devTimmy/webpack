import url from "./file.svg";

it("should output assets with module.type === 'url'") {
	expect(url).toEqual("/file.svg");
}
