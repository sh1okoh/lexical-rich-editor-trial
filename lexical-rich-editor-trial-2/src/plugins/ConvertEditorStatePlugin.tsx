import { FC } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { SerializedEditorState } from "lexical";


export const ConvertEditorState: FC = () => {
  const [editor] = useLexicalComposerContext();
  let globalJson: SerializedEditorState;
  const exportJson = () => {
    const editorState = editor.getEditorState();
    const json = editorState.toJSON();
    globalJson = json;
    console.log('json', json);
  }

  const importJson = () => {
    editor.update(() => {
      const editorState = editor.parseEditorState(globalJson);
      console.log('editorState', editorState);
      editor.setEditorState(editorState);
    })
  }
  return (
    <>
    <button onClick={exportJson}>
      exportJson
    </button>
    <button onClick={importJson}>
      importJson
    </button>
    </>
  );
};
