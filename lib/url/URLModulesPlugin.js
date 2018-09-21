const URLParser = require("./URLParser");
const URLGenerator = require("./URLGenerator");

class URLModulesPlugin {
	constructor() {
		this.plugin = {
			name: "URLModulesPlugin"
		};
	}

	apply(compiler) {
		const { plugin } = this;
		const { compilation } = compiler.hooks;

		compilation.tap(plugin, (compilation, { normalModuleFactory }) => {
			const { createParser, createGenerator } = normalModuleFactory.hooks;

			createParser.for("url").tap(plugin, options => {
				return new URLParser();
			});

			createGenerator.for("url").tap(plugin, () => {
				return new URLGenerator();
			});
		});
	}
}

module.exports = URLModulesPlugin;
