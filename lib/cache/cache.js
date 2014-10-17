/**
 * @license
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
goog.provide('lf.cache.Cache');

goog.forwardDeclare('lf.Row');



/**
 * Row-cache interface.
 * @interface
 */
lf.cache.Cache = function() {};


/**
 * Inserts/Updates contents in cache.
 * @param {!Array.<!lf.Row>} rows
 */
lf.cache.Cache.prototype.set;


/**
 * Returns contents from the cache.
 * @param {!Array.<number>} ids
 * @return {!Array.<?lf.Row>} The requested cache entries or null if not found.
 */
lf.cache.Cache.prototype.get;


/**
 * Removes entries from the cache.
 * @param {!Array.<number>} rowIds
 */
lf.cache.Cache.prototype.remove;


/** @return {number} The number of rows currently in the cache. */
lf.cache.Cache.prototype.getCount;