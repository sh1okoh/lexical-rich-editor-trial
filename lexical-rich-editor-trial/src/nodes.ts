import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { Klass, LexicalNode } from "lexical";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeNode, CodeHighlightNode } from "@lexical/code";


export const nodes: Klass<LexicalNode>[] = [
  HeadingNode, 
  QuoteNode, 
  ListItemNode,
  ListNode,
  CodeNode,
  CodeHighlightNode,
];
