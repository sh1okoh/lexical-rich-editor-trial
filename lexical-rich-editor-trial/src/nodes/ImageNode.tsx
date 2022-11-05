import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedEditor,
  SerializedLexicalNode,
  Spread,
} from 'lexical';

import {createEditor, DecoratorNode} from 'lexical';
import * as React from 'react';
import {Suspense} from 'react';

const ImageComponent = React.lazy(
  () => import('./ImageComponent');
)