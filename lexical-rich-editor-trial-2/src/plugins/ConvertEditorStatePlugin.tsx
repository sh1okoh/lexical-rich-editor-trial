import { FC } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";


export const ConvertEditorState: FC = () => {
  const [editor] = useLexicalComposerContext();
  const handleOnClick = () => {
    const editorState = editor.getEditorState();
    const json = editorState.toJSON();
    console.log('json', json);
  }
  return (
    <>
    <button onClick={handleOnClick}>
      送信するよ！
    </button>
    </>
  );
};
