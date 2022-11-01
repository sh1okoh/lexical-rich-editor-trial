import { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ErrorBoundaryType } from "@lexical/react/shared/useDecorators";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "MyEditor",
  onError: (error) => console.error(error),
};

const ErrorBoundaryComponent: FC = () => {
  return (
    <>
    error!
    </>
  )
}

export const Editor: FC = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>いまなにしてる？</div>}
        ErrorBoundary={ErrorBoundaryComponent}
      />
    </LexicalComposer>
  );
};
