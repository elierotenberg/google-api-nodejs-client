// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace doubleclickbidmanager_v1_1 {
  export interface Options extends GlobalOptions {
    version: 'v1.1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * DoubleClick Bid Manager API
   *
   * DoubleClick Bid Manager API allows users to manage and create campaigns and reports.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
   * ```
   */
  export class Doubleclickbidmanager {
    context: APIRequestContext;
    lineitems: Resource$Lineitems;
    queries: Resource$Queries;
    reports: Resource$Reports;
    sdf: Resource$Sdf;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.lineitems = new Resource$Lineitems(this.context);
      this.queries = new Resource$Queries(this.context);
      this.reports = new Resource$Reports(this.context);
      this.sdf = new Resource$Sdf(this.context);
    }
  }

  /**
   * A channel grouping defines a set of rules that can be used to categorize events in a path report.
   */
  export interface Schema$ChannelGrouping {
    /**
     * The name to apply to an event that does not match any of the rules in the channel grouping.
     */
    fallbackName?: string | null;
    /**
     * Channel Grouping name.
     */
    name?: string | null;
    /**
     * Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping.
     */
    rules?: Schema$Rule[];
  }
  /**
   * DisjunctiveMatchStatement that OR's all contained filters.
   */
  export interface Schema$DisjunctiveMatchStatement {
    /**
     * Filters. There is a limit of 100 filters that can be set per disjunctive match statement.
     */
    eventFilters?: Schema$EventFilter[];
  }
  /**
   * Request to fetch stored line items.
   */
  export interface Schema$DownloadLineItemsRequest {
    /**
     * File specification (column names, types, order) in which the line items will be returned. Default to EWF.
     */
    fileSpec?: string | null;
    /**
     * Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned.
     */
    filterIds?: string[] | null;
    /**
     * Filter type used to filter line items to fetch.
     */
    filterType?: string | null;
    /**
     * Format in which the line items will be returned. Default to CSV.
     */
    format?: string | null;
  }
  /**
   * Download line items response.
   */
  export interface Schema$DownloadLineItemsResponse {
    /**
     * Retrieved line items in CSV format. For more information about file formats, see Entity Write File Format.
     */
    lineItems?: string | null;
  }
  /**
   * Request to fetch stored inventory sources, campaigns, insertion orders, line items, YouTube ad groups and ads.
   */
  export interface Schema$DownloadRequest {
    /**
     * File types that will be returned. If INVENTORY_SOURCE is requested, no other file types may be requested. Acceptable values are: - "AD" - "AD_GROUP" - "CAMPAIGN" - "INSERTION_ORDER" - "INVENTORY_SOURCE" - "LINE_ITEM"
     */
    fileTypes?: string[] | null;
    /**
     * The IDs of the specified filter type. This is used to filter entities to fetch. At least one ID must be specified.
     */
    filterIds?: string[] | null;
    /**
     * Filter type used to filter entities to fetch. PARTNER_ID and INVENTORY_SOURCE_ID may only be used when downloading inventory sources.
     */
    filterType?: string | null;
    /**
     * SDF Version (column names, types, order) in which the entities will be returned. Default to 5.
     */
    version?: string | null;
  }
  /**
   * Download response.
   */
  export interface Schema$DownloadResponse {
    /**
     * Retrieved ad groups in SDF format.
     */
    adGroups?: string | null;
    /**
     * Retrieved ads in SDF format.
     */
    ads?: string | null;
    /**
     * Retrieved campaigns in SDF format.
     */
    campaigns?: string | null;
    /**
     * Retrieved insertion orders in SDF format.
     */
    insertionOrders?: string | null;
    inventorySources?: string | null;
    /**
     * Retrieved line items in SDF format.
     */
    lineItems?: string | null;
  }
  /**
   * Defines the type of filter to be applied to the path, a DV360 event dimension filter.
   */
  export interface Schema$EventFilter {
    /**
     * Filter on a dimension.
     */
    dimensionFilter?: Schema$PathQueryOptionsFilter;
  }
  /**
   * Filter used to match traffic data in your report.
   */
  export interface Schema$FilterPair {
    /**
     * Filter type.
     */
    type?: string | null;
    /**
     * Filter value.
     */
    value?: string | null;
  }
  /**
   * List queries response.
   */
  export interface Schema$ListQueriesResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".
     */
    kind?: string | null;
    /**
     * Next page's pagination token if one exists.
     */
    nextPageToken?: string | null;
    /**
     * Retrieved queries.
     */
    queries?: Schema$Query[];
  }
  /**
   * List reports response.
   */
  export interface Schema$ListReportsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
     */
    kind?: string | null;
    /**
     * Next page's pagination token if one exists.
     */
    nextPageToken?: string | null;
    /**
     * Retrieved reports.
     */
    reports?: Schema$Report[];
  }
  /**
   * Additional query options.
   */
  export interface Schema$Options {
    /**
     * Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items.
     */
    includeOnlyTargetedUserLists?: boolean | null;
    /**
     * Options that contain Path Filters and Custom Channel Groupings.
     */
    pathQueryOptions?: Schema$PathQueryOptions;
  }
  /**
   * Parameters of a query or report.
   */
  export interface Schema$Parameters {
    /**
     * Filters used to match traffic data in your report.
     */
    filters?: Schema$FilterPair[];
    /**
     * Data is grouped by the filters listed in this field.
     */
    groupBys?: string[] | null;
    /**
     * Deprecated. This field is no longer in use.
     */
    includeInviteData?: boolean | null;
    /**
     * Metrics to include as columns in your report.
     */
    metrics?: string[] | null;
    /**
     * Additional query options.
     */
    options?: Schema$Options;
    /**
     * Report type.
     */
    type?: string | null;
  }
  /**
   * Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
   */
  export interface Schema$PathFilter {
    /**
     * Filter on an event to be applied to some part of the path.
     */
    eventFilters?: Schema$EventFilter[];
    /**
     * Indicates the position of the path the filter should match to (first, last, or any event in path).
     */
    pathMatchPosition?: string | null;
  }
  /**
   * Path Query Options for Report Options.
   */
  export interface Schema$PathQueryOptions {
    /**
     * Custom Channel Groupings.
     */
    channelGrouping?: Schema$ChannelGrouping;
    /**
     * Path Filters. There is a limit of 100 path filters that can be set per report.
     */
    pathFilters?: Schema$PathFilter[];
  }
  /**
   * Dimension Filter on path events.
   */
  export interface Schema$PathQueryOptionsFilter {
    /**
     * Dimension the filter is applied to.
     */
    filter?: string | null;
    /**
     * Indicates how the filter should be matched to the value.
     */
    match?: string | null;
    /**
     * Value to filter on.
     */
    values?: string[] | null;
  }
  /**
   * Represents a query.
   */
  export interface Schema$Query {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".
     */
    kind?: string | null;
    /**
     * Query metadata.
     */
    metadata?: Schema$QueryMetadata;
    /**
     * Query parameters.
     */
    params?: Schema$Parameters;
    /**
     * Query ID.
     */
    queryId?: string | null;
    /**
     * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataEndTimeMs?: string | null;
    /**
     * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataStartTimeMs?: string | null;
    /**
     * Information on how often and when to run a query.
     */
    schedule?: Schema$QuerySchedule;
    /**
     * Canonical timezone code for report data time. Defaults to America/New_York.
     */
    timezoneCode?: string | null;
  }
  /**
   * Query metadata.
   */
  export interface Schema$QueryMetadata {
    /**
     * Range of report data.
     */
    dataRange?: string | null;
    /**
     * Format of the generated report.
     */
    format?: string | null;
    /**
     * The path to the location in Google Cloud Storage where the latest report is stored.
     */
    googleCloudStoragePathForLatestReport?: string | null;
    /**
     * The path in Google Drive for the latest report.
     */
    googleDrivePathForLatestReport?: string | null;
    /**
     * The time when the latest report started to run.
     */
    latestReportRunTimeMs?: string | null;
    /**
     * Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English.
     */
    locale?: string | null;
    /**
     * Number of reports that have been generated for the query.
     */
    reportCount?: number | null;
    /**
     * Whether the latest report is currently running.
     */
    running?: boolean | null;
    /**
     * Whether to send an email notification when a report is ready. Default to false.
     */
    sendNotification?: boolean | null;
    /**
     * List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.
     */
    shareEmailAddress?: string[] | null;
    /**
     * Query title. It is used to name the reports generated from this query.
     */
    title?: string | null;
  }
  /**
   * Information on how frequently and when to run a query.
   */
  export interface Schema$QuerySchedule {
    /**
     * Datetime to periodically run the query until.
     */
    endTimeMs?: string | null;
    /**
     * How often the query is run.
     */
    frequency?: string | null;
    /**
     * Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.
     */
    nextRunMinuteOfDay?: number | null;
    /**
     * Canonical timezone code for report generation time. Defaults to America/New_York.
     */
    nextRunTimezoneCode?: string | null;
    /**
     * When to start running the query. Not applicable to `ONE_TIME` frequency.
     */
    startTimeMs?: string | null;
  }
  /**
   * Represents a report.
   */
  export interface Schema$Report {
    /**
     * Key used to identify a report.
     */
    key?: Schema$ReportKey;
    /**
     * Report metadata.
     */
    metadata?: Schema$ReportMetadata;
    /**
     * Report parameters.
     */
    params?: Schema$Parameters;
  }
  /**
   * An explanation of a report failure.
   */
  export interface Schema$ReportFailure {
    /**
     * Error code that shows why the report was not created.
     */
    errorCode?: string | null;
  }
  /**
   * Key used to identify a report.
   */
  export interface Schema$ReportKey {
    /**
     * Query ID.
     */
    queryId?: string | null;
    /**
     * Report ID.
     */
    reportId?: string | null;
  }
  /**
   * Report metadata.
   */
  export interface Schema$ReportMetadata {
    /**
     * The path to the location in Google Cloud Storage where the report is stored.
     */
    googleCloudStoragePath?: string | null;
    /**
     * The ending time for the data that is shown in the report.
     */
    reportDataEndTimeMs?: string | null;
    /**
     * The starting time for the data that is shown in the report.
     */
    reportDataStartTimeMs?: string | null;
    /**
     * Report status.
     */
    status?: Schema$ReportStatus;
  }
  /**
   * Report status.
   */
  export interface Schema$ReportStatus {
    /**
     * If the report failed, this records the cause.
     */
    failure?: Schema$ReportFailure;
    /**
     * The time when this report either completed successfully or failed.
     */
    finishTimeMs?: string | null;
    /**
     * The file type of the report.
     */
    format?: string | null;
    /**
     * The state of the report.
     */
    state?: string | null;
  }
  /**
   * Represents the upload status of a row in the request.
   */
  export interface Schema$RowStatus {
    /**
     * Whether the stored entity is changed as a result of upload.
     */
    changed?: boolean | null;
    /**
     * Entity Id.
     */
    entityId?: string | null;
    /**
     * Entity name.
     */
    entityName?: string | null;
    /**
     * Reasons why the entity can't be uploaded.
     */
    errors?: string[] | null;
    /**
     * Whether the entity is persisted.
     */
    persisted?: boolean | null;
    /**
     * Row number.
     */
    rowNumber?: number | null;
  }
  /**
   * A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external\} that can be // applied to a path event to determine if that name should be applied.
   */
  export interface Schema$Rule {
    disjunctiveMatchStatements?: Schema$DisjunctiveMatchStatement[];
    /**
     * Rule name.
     */
    name?: string | null;
  }
  /**
   * Request to run a stored query to generate a report.
   */
  export interface Schema$RunQueryRequest {
    /**
     * Report data range used to generate the report.
     */
    dataRange?: string | null;
    /**
     * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataEndTimeMs?: string | null;
    /**
     * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataStartTimeMs?: string | null;
    /**
     * Canonical timezone code for report data time. Defaults to America/New_York.
     */
    timezoneCode?: string | null;
  }
  /**
   * Request to upload line items.
   */
  export interface Schema$UploadLineItemsRequest {
    /**
     * Set to true to get upload status without actually persisting the line items.
     */
    dryRun?: boolean | null;
    /**
     * Format the line items are in. Default to CSV.
     */
    format?: string | null;
    /**
     * Line items in CSV to upload. Refer to Entity Write File Format for more information on file format.
     */
    lineItems?: string | null;
  }
  /**
   * Upload line items response.
   */
  export interface Schema$UploadLineItemsResponse {
    /**
     * Status of upload.
     */
    uploadStatus?: Schema$UploadStatus;
  }
  /**
   * Represents the status of upload.
   */
  export interface Schema$UploadStatus {
    /**
     * Reasons why upload can't be completed.
     */
    errors?: string[] | null;
    /**
     * Per-row upload status.
     */
    rowStatus?: Schema$RowStatus[];
  }

  export class Resource$Lineitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves line items in CSV format. YouTube & partners line items are not supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.lineitems.downloadlineitems({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fileSpec": "my_fileSpec",
     *       //   "filterIds": [],
     *       //   "filterType": "my_filterType",
     *       //   "format": "my_format"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lineItems": "my_lineItems"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    downloadlineitems(
      params: Params$Resource$Lineitems$Downloadlineitems,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    downloadlineitems(
      params?: Params$Resource$Lineitems$Downloadlineitems,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DownloadLineItemsResponse>;
    downloadlineitems(
      params: Params$Resource$Lineitems$Downloadlineitems,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    downloadlineitems(
      params: Params$Resource$Lineitems$Downloadlineitems,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DownloadLineItemsResponse>,
      callback: BodyResponseCallback<Schema$DownloadLineItemsResponse>
    ): void;
    downloadlineitems(
      params: Params$Resource$Lineitems$Downloadlineitems,
      callback: BodyResponseCallback<Schema$DownloadLineItemsResponse>
    ): void;
    downloadlineitems(
      callback: BodyResponseCallback<Schema$DownloadLineItemsResponse>
    ): void;
    downloadlineitems(
      paramsOrCallback?:
        | Params$Resource$Lineitems$Downloadlineitems
        | BodyResponseCallback<Schema$DownloadLineItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DownloadLineItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DownloadLineItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DownloadLineItemsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Lineitems$Downloadlineitems;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Lineitems$Downloadlineitems;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/doubleclickbidmanager/v1.1/lineitems/downloadlineitems'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DownloadLineItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DownloadLineItemsResponse>(parameters);
      }
    }

    /**
     * Uploads line items in CSV format. YouTube & partners line items are not supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.lineitems.uploadlineitems({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dryRun": false,
     *       //   "format": "my_format",
     *       //   "lineItems": "my_lineItems"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "uploadStatus": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    uploadlineitems(
      params: Params$Resource$Lineitems$Uploadlineitems,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    uploadlineitems(
      params?: Params$Resource$Lineitems$Uploadlineitems,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadLineItemsResponse>;
    uploadlineitems(
      params: Params$Resource$Lineitems$Uploadlineitems,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    uploadlineitems(
      params: Params$Resource$Lineitems$Uploadlineitems,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadLineItemsResponse>,
      callback: BodyResponseCallback<Schema$UploadLineItemsResponse>
    ): void;
    uploadlineitems(
      params: Params$Resource$Lineitems$Uploadlineitems,
      callback: BodyResponseCallback<Schema$UploadLineItemsResponse>
    ): void;
    uploadlineitems(
      callback: BodyResponseCallback<Schema$UploadLineItemsResponse>
    ): void;
    uploadlineitems(
      paramsOrCallback?:
        | Params$Resource$Lineitems$Uploadlineitems
        | BodyResponseCallback<Schema$UploadLineItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadLineItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadLineItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadLineItemsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Lineitems$Uploadlineitems;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Lineitems$Uploadlineitems;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/doubleclickbidmanager/v1.1/lineitems/uploadlineitems'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadLineItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadLineItemsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Lineitems$Downloadlineitems
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DownloadLineItemsRequest;
  }
  export interface Params$Resource$Lineitems$Uploadlineitems
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadLineItemsRequest;
  }

  export class Resource$Queries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.createquery({
     *     // If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME.
     *     asynchronous: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "metadata": {},
     *       //   "params": {},
     *       //   "queryId": "my_queryId",
     *       //   "reportDataEndTimeMs": "my_reportDataEndTimeMs",
     *       //   "reportDataStartTimeMs": "my_reportDataStartTimeMs",
     *       //   "schedule": {},
     *       //   "timezoneCode": "my_timezoneCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "params": {},
     *   //   "queryId": "my_queryId",
     *   //   "reportDataEndTimeMs": "my_reportDataEndTimeMs",
     *   //   "reportDataStartTimeMs": "my_reportDataStartTimeMs",
     *   //   "schedule": {},
     *   //   "timezoneCode": "my_timezoneCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    createquery(
      params: Params$Resource$Queries$Createquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createquery(
      params?: Params$Resource$Queries$Createquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Query>;
    createquery(
      params: Params$Resource$Queries$Createquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createquery(
      params: Params$Resource$Queries$Createquery,
      options: MethodOptions | BodyResponseCallback<Schema$Query>,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    createquery(
      params: Params$Resource$Queries$Createquery,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    createquery(callback: BodyResponseCallback<Schema$Query>): void;
    createquery(
      paramsOrCallback?:
        | Params$Resource$Queries$Createquery
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Query> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Queries$Createquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Createquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/doubleclickbidmanager/v1.1/query').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Query>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Query>(parameters);
      }
    }

    /**
     * Deletes a stored query as well as the associated stored reports.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.deletequery({
     *     // Query ID to delete.
     *     queryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deletequery(
      params: Params$Resource$Queries$Deletequery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deletequery(
      params?: Params$Resource$Queries$Deletequery,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    deletequery(
      params: Params$Resource$Queries$Deletequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deletequery(
      params: Params$Resource$Queries$Deletequery,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    deletequery(
      params: Params$Resource$Queries$Deletequery,
      callback: BodyResponseCallback<void>
    ): void;
    deletequery(callback: BodyResponseCallback<void>): void;
    deletequery(
      paramsOrCallback?:
        | Params$Resource$Queries$Deletequery
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Queries$Deletequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Deletequery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/doubleclickbidmanager/v1.1/query/{queryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a stored query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.getquery({
     *     // Query ID to retrieve.
     *     queryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "params": {},
     *   //   "queryId": "my_queryId",
     *   //   "reportDataEndTimeMs": "my_reportDataEndTimeMs",
     *   //   "reportDataStartTimeMs": "my_reportDataStartTimeMs",
     *   //   "schedule": {},
     *   //   "timezoneCode": "my_timezoneCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getquery(
      params: Params$Resource$Queries$Getquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getquery(
      params?: Params$Resource$Queries$Getquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Query>;
    getquery(
      params: Params$Resource$Queries$Getquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getquery(
      params: Params$Resource$Queries$Getquery,
      options: MethodOptions | BodyResponseCallback<Schema$Query>,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    getquery(
      params: Params$Resource$Queries$Getquery,
      callback: BodyResponseCallback<Schema$Query>
    ): void;
    getquery(callback: BodyResponseCallback<Schema$Query>): void;
    getquery(
      paramsOrCallback?:
        | Params$Resource$Queries$Getquery
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Query>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Query> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Getquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Getquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/doubleclickbidmanager/v1.1/query/{queryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Query>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Query>(parameters);
      }
    }

    /**
     * Retrieves stored queries.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.listqueries({
     *     // Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
     *     pageSize: 'placeholder-value',
     *     // Optional pagination token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "queries": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listqueries(
      params: Params$Resource$Queries$Listqueries,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listqueries(
      params?: Params$Resource$Queries$Listqueries,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListQueriesResponse>;
    listqueries(
      params: Params$Resource$Queries$Listqueries,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listqueries(
      params: Params$Resource$Queries$Listqueries,
      options: MethodOptions | BodyResponseCallback<Schema$ListQueriesResponse>,
      callback: BodyResponseCallback<Schema$ListQueriesResponse>
    ): void;
    listqueries(
      params: Params$Resource$Queries$Listqueries,
      callback: BodyResponseCallback<Schema$ListQueriesResponse>
    ): void;
    listqueries(
      callback: BodyResponseCallback<Schema$ListQueriesResponse>
    ): void;
    listqueries(
      paramsOrCallback?:
        | Params$Resource$Queries$Listqueries
        | BodyResponseCallback<Schema$ListQueriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListQueriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListQueriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListQueriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Queries$Listqueries;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Listqueries;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/doubleclickbidmanager/v1.1/queries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListQueriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListQueriesResponse>(parameters);
      }
    }

    /**
     * Runs a stored query to generate a report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.queries.runquery({
     *     // If true, tries to run the query asynchronously.
     *     asynchronous: 'placeholder-value',
     *     // Query ID to run.
     *     queryId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataRange": "my_dataRange",
     *       //   "reportDataEndTimeMs": "my_reportDataEndTimeMs",
     *       //   "reportDataStartTimeMs": "my_reportDataStartTimeMs",
     *       //   "timezoneCode": "my_timezoneCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    runquery(
      params: Params$Resource$Queries$Runquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runquery(
      params?: Params$Resource$Queries$Runquery,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    runquery(
      params: Params$Resource$Queries$Runquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runquery(
      params: Params$Resource$Queries$Runquery,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    runquery(
      params: Params$Resource$Queries$Runquery,
      callback: BodyResponseCallback<void>
    ): void;
    runquery(callback: BodyResponseCallback<void>): void;
    runquery(
      paramsOrCallback?:
        | Params$Resource$Queries$Runquery
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Runquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Runquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/doubleclickbidmanager/v1.1/query/{queryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Queries$Createquery
    extends StandardParameters {
    /**
     * If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME.
     */
    asynchronous?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Query;
  }
  export interface Params$Resource$Queries$Deletequery
    extends StandardParameters {
    /**
     * Query ID to delete.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$Getquery extends StandardParameters {
    /**
     * Query ID to retrieve.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$Listqueries
    extends StandardParameters {
    /**
     * Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
     */
    pageSize?: number;
    /**
     * Optional pagination token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Queries$Runquery extends StandardParameters {
    /**
     * If true, tries to run the query asynchronously.
     */
    asynchronous?: boolean;
    /**
     * Query ID to run.
     */
    queryId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }

  export class Resource$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves stored reports.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.reports.listreports({
     *     // Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
     *     pageSize: 'placeholder-value',
     *     // Optional pagination token.
     *     pageToken: 'placeholder-value',
     *     // Query ID with which the reports are associated.
     *     queryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listreports(
      params: Params$Resource$Reports$Listreports,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listreports(
      params?: Params$Resource$Reports$Listreports,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReportsResponse>;
    listreports(
      params: Params$Resource$Reports$Listreports,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listreports(
      params: Params$Resource$Reports$Listreports,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    listreports(
      params: Params$Resource$Reports$Listreports,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    listreports(
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    listreports(
      paramsOrCallback?:
        | Params$Resource$Reports$Listreports
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Reports$Listreports;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Listreports;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/doubleclickbidmanager/v1.1/queries/{queryId}/reports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Listreports
    extends StandardParameters {
    /**
     * Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
     */
    pageSize?: number;
    /**
     * Optional pagination token.
     */
    pageToken?: string;
    /**
     * Query ID with which the reports are associated.
     */
    queryId?: string;
  }

  export class Resource$Sdf {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves entities in SDF format.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/doubleclickbidmanager.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const doubleclickbidmanager = google.doubleclickbidmanager('v1.1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await doubleclickbidmanager.sdf.download({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "fileTypes": [],
     *       //   "filterIds": [],
     *       //   "filterType": "my_filterType",
     *       //   "version": "my_version"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adGroups": "my_adGroups",
     *   //   "ads": "my_ads",
     *   //   "campaigns": "my_campaigns",
     *   //   "insertionOrders": "my_insertionOrders",
     *   //   "inventorySources": "my_inventorySources",
     *   //   "lineItems": "my_lineItems"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    download(
      params: Params$Resource$Sdf$Download,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    download(
      params?: Params$Resource$Sdf$Download,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DownloadResponse>;
    download(
      params: Params$Resource$Sdf$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Sdf$Download,
      options: MethodOptions | BodyResponseCallback<Schema$DownloadResponse>,
      callback: BodyResponseCallback<Schema$DownloadResponse>
    ): void;
    download(
      params: Params$Resource$Sdf$Download,
      callback: BodyResponseCallback<Schema$DownloadResponse>
    ): void;
    download(callback: BodyResponseCallback<Schema$DownloadResponse>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Sdf$Download
        | BodyResponseCallback<Schema$DownloadResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DownloadResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DownloadResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DownloadResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sdf$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sdf$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://doubleclickbidmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/doubleclickbidmanager/v1.1/sdf/download').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DownloadResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DownloadResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sdf$Download extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DownloadRequest;
  }
}
