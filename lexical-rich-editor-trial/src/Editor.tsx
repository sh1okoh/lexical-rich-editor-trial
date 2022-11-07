import { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import styles from "./Editor.module.scss";
import { AutoFocusPlugin } from "./plugins/AutoFocusPlugin";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { nodes } from "./nodes";
import { theme } from "./editorTheme";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { InlineToolbarPlugin } from "./plugins/InlineToolbarPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "MyEditor",
  onError: (error) => console.error(error),
  theme: theme,
  nodes: nodes
};

export const Editor: FC = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={styles.editorContainer}>
        <ToolbarPlugin />
        <InlineToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable style={{textAlign: 'left'}}/>}
          placeholder={<div>いまなにしてる？</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <AutoFocusPlugin />
      <HistoryPlugin />
      <ListPlugin />
      <CheckListPlugin />
      <CodeHighlightPlugin />
    </LexicalComposer>
  );
};
