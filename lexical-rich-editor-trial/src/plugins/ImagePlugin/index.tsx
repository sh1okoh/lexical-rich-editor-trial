import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {$wrapNodeInElement, mergeRegister} from '@lexical/utils';
import {
  $createParagraphNode,
  $createRangeSelection,
  $getSelection,
  $insertNodes,
  $isNodeSelection,
  $isRootOrShadowRoot,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  createCommand,
  DRAGOVER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  LexicalCommand,
  LexicalEditor,
} from 'lexical';
import {useEffect, useRef, useState} from 'react';
import * as React from 'react';

import getSelection from '../../shared/src/getDOMSelection';

import landscapeImage from '../../images/landscape.jpg';
import yellowFlowerImage from '../../images/yellow-flower.jpg';
import {
  $createImageNode,
  $isImageNode,
  ImageNode,
  ImagePayload,
} from '../../nodes/ImageNode';
import Button from '../../ui/Button';
import {DialogActions, DialogButtonsList} from '../../ui/Dialog';
import FileInput from '../../ui/FileInput';
import TextInput from '../../ui/TextInput';

