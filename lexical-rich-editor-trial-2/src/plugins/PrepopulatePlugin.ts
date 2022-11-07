import { FC, useEffect, useLayoutEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {$generateNodesFromDOM} from '@lexical/html';
import { $getRoot, $insertNodes } from "lexical";

export const PrepopulatePlugin: FC = () => {
  const [editor] = useLexicalComposerContext();

  useLayoutEffect(() => {
    editor.update(() => {
      const parser = new DOMParser();
      const htmlString = "<h1>Hello, World!!</h1>";
      const dom = parser.parseFromString(htmlString, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      $getRoot().select();
      $insertNodes(nodes);
    })
  }, [editor]);
  return null;
};
