import { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import styles from "./Editor.module.scss";
import { AutoFocusPlugin } from "./plugins/AutoFocusPlugin";


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
      <div className={styles.editorContainer}>
        <RichTextPlugin
          contentEditable={<ContentEditable/>}
          placeholder={<div>いまなにしてる？</div>}
          ErrorBoundary={ErrorBoundaryComponent}
        />
      </div>
      <AutoFocusPlugin />
    </LexicalComposer>
  );
};
