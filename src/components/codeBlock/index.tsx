import {
  Stack,
  CodeBlock,
  createShikiAdapter,
  type CodeBlockRootProps,
  IconButton,
} from "@chakra-ui/react";
import type { HighlighterGeneric } from "shiki";

interface ICodeBlockProps {
  code: string;
  language: string;
  title?: string;
  root?: Omit<CodeBlockRootProps, "children" | "code" | "language">;
}

// biome-ignore lint: Seguindo a documentação do chackra ele pede que isso seja feito
const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json", "javascript"],
      themes: ["github-dark"],
    });
  },
  theme: "github-dark",
});

const CodeBlockComponent = ({
  code,
  language,
  title,
  root,
}: ICodeBlockProps) => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <Stack gap={4}>
        <CodeBlock.Root code={code} language={language} {...root}>
          {title && (
            <CodeBlock.Header>
              <CodeBlock.Title>{title}</CodeBlock.Title>
              <CodeBlock.CopyTrigger asChild>
                <IconButton variant="ghost" size="2xs">
                  <CodeBlock.CopyIndicator />
                </IconButton>
              </CodeBlock.CopyTrigger>
            </CodeBlock.Header>
          )}
          <CodeBlock.Content>
            <CodeBlock.Code>
              <CodeBlock.CodeText />
            </CodeBlock.Code>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </Stack>
    </CodeBlock.AdapterProvider>
  );
};

export default CodeBlockComponent;
