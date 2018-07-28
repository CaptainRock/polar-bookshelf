import {FormHandler} from '../../FormHandler';

declare var global: any;
global.$ = global.jQuery = require("jquery");

import 'bootstrap/dist/js/bootstrap.bundle.js';

import React from 'react'
import { render } from "react-dom";
import { JSONSchema6 } from "json-schema";
import Form from "react-jsonschema-form";
import {SchemaUIFactory} from './SchemaUIFactory';
import {SchemaFactory} from './SchemaFactory';

require('summernote/dist/summernote-bs4');

/**
 * Code to accept new input for flashcards, notes, comments, etc.
 */
export class InputController {

    createNewFlashcard(targetElement: HTMLElement, formHandler: FormHandler) {

        let schema: JSONSchema6 = SchemaFactory.create();
        let schemaUI = SchemaUIFactory.create();

        if(!targetElement) {
            throw new Error("No schemaFormElement");
        }

        if(!schema) {
            throw new Error("No schema");
        }

        if(!formHandler) {
            throw new Error("No formHandler");
        }

        let onChangeCallback = () => function(data: any) { formHandler.onChange(data) };
        let onSubmitCallback = () => function(data: any) { formHandler.onSubmit(data) };
        //let onErrorCallback = () => function(data: any) { formHandler.onError(data) };

        let onErrorCallback = () => function(data: any) { formHandler.onError(data) };

        render((
            <Form schema={schema}
                  autocomplete="off"
                  uiSchema={schemaUI}
                  showErrorList={false}
                  onChange={onChangeCallback()}
                  onSubmit={onSubmitCallback()}
                  onError={onErrorCallback()} />
        ), targetElement);

    }

}
