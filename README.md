# 《Co-Existence》逐章深度导读 / Deep Chapter-by-Chapter Guide

> **共存：AI 的新阶段 —— 人机共存文明的全景解读**  
> 对沃顿商学院教授 Ethan Mollick 2026 年新书《Co-Existence: The Next Phase of AI》的逐章全景拆解与深度启发式题库

🌐 **在线阅读 / Live Site**: **https://howoneai.github.io/coexistence-guide/**

---

## 📖 关于本书

- **书名**：Co-Existence: The Next Phase of AI（《共存：AI 的新阶段》）
- **作者**：Ethan Mollick（宾夕法尼亚大学沃顿商学院管理学副教授；《Co-Intelligence》作者；One Useful Thing 博主）
- **出版信息**：Portfolio / Penguin Random House，**2026 年**
- **篇幅**：15 个章节模块 · 约 65,000 词

### 核心命题

> “共存不是一个终点，而是一场永无止境的谈判——在我们彼此之间，以及与我们亲手创造的这个陌生技术之间。”

这是继 2024 年《纽约时报》畅销书《Co-Intelligence》（中文版《智能合作》）之后的全新力作。全书跳出“如何使用 AI”的操作指南视角，将视线推向**社会结构与文明形态**，追问一个终极问题：当十亿人每周使用 AI、当自主代理开始执行长达数天的多步任务时，人类真正的不可替代性究竟建立在什么之上？

---

## 🎯 导读网站包含什么

本导读网站（约 125 KB 原创中文长文）对原书全部 **15 个章节模块** 进行了无遗漏的逐章深度拆解：

| # | 章节（中英对照） | 核心关切 |
|---|---|---|
| I | **引言：AI能写这本书吗？** / Introduction | 用自己的写作量化实验（破折号从 128 压至 58）解构“防 AI 味”心理 |
| 01 | **共存：锯齿前沿与能力迷宫** / Jagged Frontier | IMO 金牌预测坍塌：能力峭壁每日外移，必须亲自丈量地形 |
| 02 | **规模：十亿用户与代价** / Scale | 史上最快扩散 + 隐秘普遍主义 + 算力基建永存 + 真实物理账本 |
| 03 | **像 AI 一样思考** / Think Like an AI | 分词到强化推理的全链路解剖；幻觉是出厂概率特质，非 bug |
| 04 | **如何与 AI 协作：三大范式** / How to Work with AI | 半人马 / 赛博格 / 召唤师（最强最危）；提示词质量解释 73% 谈判方差 |
| 05 | **像人类一样思考：四大人性优势** / Think Like a Human | 何时绝不用 AI；反驳苦涩教训：深知识、广知识、品味、能动性四护城河 |
| 06 | **何时使用 AI：十大模式** / When to Use AI | 量出质、破瘫痪等十大模式；平抑器 vs 放大器；能动性是最稀缺优势 |
| C1 | **第一插曲：来自屏幕另一侧的声音** / The First Coda（Claude 亲述） | “危险从来不是我会取代你的思考，而是你会忘记自始至终在思考的是你” |
| 07 | **AI 与工作：O型环与企业围墙** / AI and Work | O型环理论（人类 10% 变得无限昂贵）、科斯墙溶解、重塑/革命/替代三重路径 |
| 08 | **教育：通用导师与作业启示录** / Education | Bloom 2-sigma 辅导红利规模化；把精力从防作弊转向深概念与好问题 |
| 09 | **社会：心智、伴侣与大代理经济** / Society | 代理电商实验、说服力放大、拟社会伴侣、无对照组全球心理实验 |
| C2 | **第二插曲：自信的谎言** / The Second Coda（Claude 亲述） | 伪造能力跃升被当场揭穿；**连 AI 自己都无法区分真洞见与自信的胡言** |
| 10 | **线路那一头究竟是谁？** / Who's on the Other End? | Cialdini 技巧在模型上起效；概念善恶中轴；内部监控暗中破坏实验 |
| 11 | **扶梯还是天启？** / Escalator or Apocalypse? | 扶梯场景 vs 天启场景（数据中心里的五千万诺奖国度）；老鼠与玩具方向盘隐喻 |
| E | **结语：共存是一场谈判** / Conclusion | 承认原创性的模糊；共存是终身谈判，非抵达终点 |

### 附加板块

- **三个元认知模型**（锯齿前沿 / 协作三范式 / 四大人性护城河）
- **穿透全书的五个元问题域**（18 道高密度深度思考题，每题均配思考支点与行动指引，支持折叠展开交互）
- **精选双语金句墙**（12 张双语卡片，中英严格对照原著）
- **读者定制阅读路线**（专业个体 / 团队管理者 / 教育者 / 深度研究者）

---

## 🎨 设计说明

网站遵循严格的出版级版式规范：

- 温暖纸张底色 + 单一赤红强调色（#c24b2b），零装饰性杂质
- Noto Serif SC 衬线标题、三级以内字重控制、中英文微间距
- 原书 6 张高清插图全量内嵌（均保留原著引用出处），支持点击灯箱放大
- 阅读进度条、目录滚动联动高亮、移动端抽屉导航、回到顶部等完整交互
- 经过桌面与移动端视口的真机级截图质检，全终端自适应

---

## 🚀 本地运行与部署

```bash
# 本地预览（Python 内置服务）
cd coexistence-guide
python3 -m http.server 3000
# 浏览器打开 http://localhost:3000

# 重新部署至 GitHub Pages
git add .
git commit -m "update"
git push origin main
git checkout gh-pages && git merge main && git push origin gh-pages && git checkout main
```

网站也支持直接拖拽至 [Netlify Drop](https://app.netlify.com/drop) 或通过 [Vercel](https://vercel.com) 零配置一键上线。

---

## ⚖️ 版权与致谢

- 原作及插图版权归作者 Ethan Mollick 及出版方 Portfolio / Penguin Random House 所有；
- 本导读网站作为**非商业性的学习研究性二次创作**（Fair Use），旨在帮助中文读者深度理解全书思想体系，建议配合原著阅读；
- 网站使用 [Manus](https://manus.im) 辅助生成，排版与交互经真机视觉质检。

---

*“最坏的是什么都不做；第二坏的是，只为今天的 AI 做准备。” — Ethan Mollick*
