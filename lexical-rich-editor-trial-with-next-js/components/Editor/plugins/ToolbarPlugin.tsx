import { $createHeadingNode, HeadingTagType } from "@lexical/rich-text";
import { FC, useCallback, useState } from "react";
import styles from "./ToolbarPlugin.module.scss";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection } from "lexical";
import { $wrapNodes } from "@lexical/selection";

const SupportedBlockType = {
  paragraph: "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
} as const;
type BlockType = keyof typeof SupportedBlockType;

export const ToolbarPlugin: FC = () => {
  const [blockType, setBlockType] = useState<BlockType>("paragraph");
  const [editor] = useLexicalComposerContext();
  
  const formatHeading = useCallback(
    (type: HeadingTagType) => {
      if (blockType !== type) {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            $wrapNodes(selection, () => $createHeadingNode(type));
          }
        });
      }
    },
    [blockType, editor],
  );

  return (
    <div className={styles.toolbar}>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["h1"]}
        aria-label={SupportedBlockType["h1"]}
        aria-checked={blockType === "h1"}
        onClick={() => formatHeading('h1')}
      >
        h1
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["h2"]}
        aria-label={SupportedBlockType["h2"]}
        aria-checked={blockType === "h2"}
        onClick={() => formatHeading('h2')}
      >
        h2
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["h3"]}
        aria-label={SupportedBlockType["h3"]}
        aria-checked={blockType === "h3"}
        onClick={() => formatHeading('h3')}
      >
        h3
      </button>
    </div>
  );
};