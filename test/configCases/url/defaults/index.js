import png from "./file.png";
import svg from "./file.svg";

it("should output assets with module.type === 'url'", () => {
	expect(png).toEqual("/file.png");
	expect(svg).toEqual("/file.svg");
})
