



import type {
  GridSelection,
  LexicalEditor,
  NodeKey,
  NodeSelection,
  RangeSelection,
} from 'lexical';

import './ImageNode.css';

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {useCollaborationContext} from '@lexical/react/LexicalCollaborationContext';
import {CollaborationPlugin} from '@lexical/react/LexicalCollaborationPlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {HashtagPlugin} from '@lexical/react/LexicalHashtagPlugin';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LinkPlugin} from '@lexical/react/LexicalLinkPlugin';
import {LexicalNestedComposer} from '@lexical/react/LexicalNestedComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {useLexicalNodeSelection} from '@lexical/react/useLexicalNodeSelection';
import {mergeRegister} from '@lexical/utils';
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  $setSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  KEY_ENTER_COMMAND,
  KEY_ESCAPE_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';
import * as React from 'react';
import {Suspense, useCallback, useEffect, useRef, useState} from 'react';

const imageCache = new Set();

function useSuspenseImage(src: string) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      }
    })
  }
}

function LazyImage({
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  maxWidth,
}: {
  altText: string;
  className: string | null;
  height: 'inherit' | number;
  imageRef: {current: null | HTMLImageElement};
  maxWidth: number;
  src: string;
  width: 'inherit' | number;
}): JSX.Element {
  useSuspenseImage(src);
  return (
    <img
      className={className || undefined}
      src={src}
      alt={altText}
      ref={imageRef}
      style={{
        height,
        maxWidth,
        width,
      }}
      draggable="false"
    />
  );
}

export default function ImageComponent(
  {
    src,
    altText,
    nodeKey,
    width,
    height,
    maxWidth,
    resizable,
    showCaption,
    caption,
    captionsEnabled,
  }: {
    altText: string;
    caption: LexicalEditor;
    height: 'inherit' | number;
    maxWidth: number;
    nodeKey: NodeKey;
    resizable: boolean;
    showCaption: boolean;
    src: string;
    width: 'inherit' | number;
    captionsEnabled: boolean;
  }): JSX.Element {
    return (
      <>
      hogehoge
      </>
    )
  })
