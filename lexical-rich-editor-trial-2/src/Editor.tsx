import { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { PrepopulatePlugin } from "./plugins/PrepopulatePlugin";
import { ConvertEditorState } from "./plugins/ConvertEditorStatePlugin";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "MyEditor",
  onError: (error) => console.error(error),
};

export const Editor: FC = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>いまなにしてる？</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <PrepopulatePlugin />
      <ConvertEditorState />
    </LexicalComposer>
  );
};