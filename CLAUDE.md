# QukaAI 文档项目

## 项目概述

QukaAI 是一个基于 LLM(大语言模型) 实现的赛博记忆应用，旨在扩容个人"记忆"。该项目是 QukaAI 的文档网站，使用 Next.js 和 Fumadocs 构建。

## 技术栈

- **框架**: Next.js 15.1.7
- **文档引擎**: Fumadocs (fumadocs-mdx, fumadocs-ui, fumadocs-core)
- **UI 框架**: React 18 + TypeScript
- **样式**: Tailwind CSS 4.0.7
- **组件库**: Radix UI
- **部署**: Docker (支持 standalone 输出)

## 项目结构

```
docs/
├── content/docs/          # 文档内容
│   ├── api/              # API 文档
│   └── info/             # 产品信息文档
├── src/
│   ├── app/              # Next.js 13+ App Router
│   │   ├── (home)/       # 首页
│   │   ├── api/          # API 路由
│   │   └── docs/         # 文档页面
│   ├── components/       # React 组件
│   └── lib/              # 工具函数
├── public/               # 静态资源
└── package.json          # 依赖配置
```

## 开发环境设置

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```
服务器将在 `http://0.0.0.0:33031` 启动

### 构建
```bash
npm run build
```

### 生产服务器
```bash
npm run start
```

## 关键配置

### Next.js 配置 (next.config.mjs)
- 启用 MDX 支持 (fumadocs-mdx)
- standalone 输出模式 (适合 Docker 部署)
- 图片优化已禁用

### 文档配置 (source.config.ts)
- 文档目录: `content/docs`
- 使用 Fumadocs MDX 配置

### 开发端口
- 默认端口: 33031
- 监听所有接口: 0.0.0.0

## 文档内容

### 产品功能
- 记忆碎片录入
- 基于 LLM 的记忆问答  
- 日记(工作日志)
- 生活管家功能

### 设计理念
- 无尽黑洞概念: 随意存储记忆碎片，需要时一问便知
- C 端用户友好的 UI 交互
- 企业级 API 支持

## Docker 部署

项目包含 Dockerfile，支持容器化部署：

```bash
docker build -t quka-docs .
docker run -p 33031:33031 quka-docs
```

## 开发注意事项

1. **文档更新**: 修改 `content/docs/` 下的 MDX 文件
2. **样式调整**: 使用 Tailwind CSS 类名
3. **组件开发**: 遵循 Radix UI + shadcn/ui 模式
4. **类型检查**: 项目使用 TypeScript 5.7.3
5. **代码规范**: 使用 ESLint (eslint-config-next)

## 环境变量

- `SITE_NAME`: 网站名称 (在文档中动态显示)

## 相关命令

- `npm run dev`: 开发服务器
- `npm run build`: 构建生产版本
- `npm run start`: 启动生产服务器
- `npm run postinstall`: 处理 MDX 文件 (fumadocs-mdx)