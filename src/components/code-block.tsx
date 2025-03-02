import * as Base from "fumadocs-ui/components/codeblock";

export interface CodeBlockProps {
  code: string;
  wrapper?: Base.CodeBlockProps;
  lang: string;
}

export async function CodeBlock({ code, lang, wrapper }: CodeBlockProps) {
  return <Base.CodeBlock {...wrapper}>{code}</Base.CodeBlock>;
}
