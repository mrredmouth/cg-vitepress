

```md
.                             # 项目根目录
├─ docs
│  ├─ .vitepress              # 配置目录。是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。
│  │  ├─ cache                # 缓存目录。默认情况下，VitePress 将其开发服务器缓存存储在 .vitepress/cache 中，并将生产构建输出存储在 .vitepress/dist 中。
│  │  └─ config.js            # 配置文件。自定义 VitePress 站点的各个方面
│  ├─ src                     # 源目录。在config.js中配置
│     ├─ api-examples.md      # .vitepress 目录之外的 Markdown 文件被视为源文件。
│     ├─ markdown-examples.md
│     └─ index.md
└─ package.json
```


+ 每个 .md 文件将在相同的路径被编译成为 .html 文件。例如，index.md 将会被编译成 index.html，可以在生成的 VitePress 站点的根路径 / 进行访问。

+ .mjs 文件:
mjs 是 "module JavaScript" 的缩写。
这个扩展名明确地告诉 Node.js 这个文件使用的是 ES Modules（ESM）语法，无论 package.json 中的 "type" 如何设置。
即使 package.json 中没有 "type": "module"，Node.js 也会将 .mjs 文件解析为 ESM。
它的存在是为了在同一个项目中同时使用 CommonJS 和 ES Modules 时，提供清晰的区分。

+ .mts 文件:
mts 是 "module TypeScript" 的缩写。
这个扩展名用于明确指定该 TypeScript 文件使用 ES Modules 语法。
当你使用 TypeScript 5.0+ 并希望项目采用 ESM 时，可以使用 .mts 来确保模块解析的一致性。
与 .mjs 类似，.mts 是给 TypeScript 编译器的一个明确信号，表明这个文件应被视为 ESM。