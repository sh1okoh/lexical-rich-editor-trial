import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FC, useCallback, useEffect, useState } from "react";
import styles from "./ToolbarPlugin.module.scss";
import { HeadingTagType, $createHeadingNode, $isHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { $getSelection, $isRangeSelection } from "lexical"
import { $wrapNodes } from "@lexical/selection";
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND, INSERT_CHECK_LIST_COMMAND } from "@lexical/list"
import { $createCodeNode } from "@lexical/code"

const SupportedBlockType = {
  paragraph: "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  quote: "Quote",
  number: "Numbered List",
  bullet: "Bulleted List",
  check: "Check List",
  code: "Code Block",
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
            console.log('selection', selection);
            $wrapNodes(selection, () => $createHeadingNode(type));
          }
        });
      }
    },
    [blockType, editor],
  );

  const formatQuote = useCallback(() => {
    if (blockType !== "quote") {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createQuoteNode());
        }
      })
    }
  }, [blockType, editor])

  const formatBulletList = useCallback(() => {
    if (blockType !== "bullet") {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    }
  }, [blockType, editor]);

  const formatNumberedList = useCallback(() => {
    if (blockType !== "number") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    }
  }, [blockType, editor]);

  const formatCheckList = useCallback(() => {
    if (blockType !== "check") {
      editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
    }
  }, [blockType, editor]);

  const formatCode = useCallback(() => {
    if (blockType !== "code") {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createCodeNode());
        }
      })
    }
  }, [blockType, editor])

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return;

        const anchorNode = selection.anchor.getNode();
        const targetNode =
          anchorNode.getKey() === "root"
            ? anchorNode
            : anchorNode.getTopLevelElementOrThrow();

        if ($isHeadingNode(targetNode)) {
          const tag = targetNode.getTag();
          setBlockType(tag);
        } else {
          const nodeType = targetNode.getType();
          if (nodeType in SupportedBlockType) {
            setBlockType(nodeType as BlockType);
          } else {
            setBlockType("paragraph");
          }
        }
      })
    })
  })
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
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["quote"]}
        aria-label={SupportedBlockType["quote"]}
        aria-checked={blockType === "quote"}
        onClick={formatQuote}
      >
        ??????
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["bullet"]}
        aria-label={SupportedBlockType["bullet"]}
        aria-checked={blockType === "bullet"}
        onClick={formatBulletList}
      >
        b
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["number"]}
        aria-label={SupportedBlockType["number"]}
        aria-checked={blockType === "number"}
        onClick={formatNumberedList}
      >
        num
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["check"]}
        aria-label={SupportedBlockType["check"]}
        aria-checked={blockType === "check"}
        onClick={formatCheckList}
      >
        check
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["code"]}
        aria-label={SupportedBlockType["code"]}
        aria-checked={blockType === "code"}
        onClick={formatCode}
      >
        code
        </button>
    </div>
  );
};