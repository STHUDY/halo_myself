/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Category } from './category';

/**
 * 
 * @export
 * @interface CategoryList
 */
export interface CategoryList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof CategoryList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof CategoryList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof CategoryList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<Category>}
     * @memberof CategoryList
     */
    'items': Array<Category>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof CategoryList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof CategoryList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof CategoryList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof CategoryList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof CategoryList
     */
    'totalPages': number;
}

