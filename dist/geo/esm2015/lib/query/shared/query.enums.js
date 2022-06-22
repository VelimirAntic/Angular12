export var QueryFormat;
(function (QueryFormat) {
    QueryFormat["GML2"] = "gml2";
    QueryFormat["GML3"] = "gml3";
    QueryFormat["JSON"] = "json";
    QueryFormat["GEOJSON"] = "geojson";
    QueryFormat["GEOJSON2"] = "geojson2";
    QueryFormat["ESRIJSON"] = "esrijson";
    QueryFormat["TEXT"] = "text";
    QueryFormat["HTML"] = "html";
    QueryFormat["HTMLGML2"] = "htmlgml2";
})(QueryFormat || (QueryFormat = {}));
export var QueryFormatMimeType;
(function (QueryFormatMimeType) {
    QueryFormatMimeType["GML2"] = "application/vnd.ogc.gml";
    QueryFormatMimeType["GML3"] = "application/vnd.ogc.gml/3.1.1";
    QueryFormatMimeType["JSON"] = "application/json";
    QueryFormatMimeType["GEOJSON"] = "application/geojson";
    QueryFormatMimeType["GEOJSON2"] = "geojson";
    QueryFormatMimeType["ESRIJSON"] = "application/json";
    QueryFormatMimeType["TEXT"] = "text/plain";
    QueryFormatMimeType["HTML"] = "text/html";
    QueryFormatMimeType["HTMLGML2"] = "text/html";
})(QueryFormatMimeType || (QueryFormatMimeType = {}));
export var QueryHtmlTarget;
(function (QueryHtmlTarget) {
    QueryHtmlTarget["IFRAME"] = "iframe";
    QueryHtmlTarget["BLANK"] = "_blank";
})(QueryHtmlTarget || (QueryHtmlTarget = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9xdWVyeS9zaGFyZWQvcXVlcnkuZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksV0FVWDtBQVZELFdBQVksV0FBVztJQUNyQiw0QkFBYSxDQUFBO0lBQ2IsNEJBQWEsQ0FBQTtJQUNiLDRCQUFhLENBQUE7SUFDYixrQ0FBbUIsQ0FBQTtJQUNuQixvQ0FBcUIsQ0FBQTtJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQiw0QkFBYSxDQUFBO0lBQ2IsNEJBQWEsQ0FBQTtJQUNiLG9DQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFWVyxXQUFXLEtBQVgsV0FBVyxRQVV0QjtBQUVELE1BQU0sQ0FBTixJQUFZLG1CQVVYO0FBVkQsV0FBWSxtQkFBbUI7SUFDN0IsdURBQWdDLENBQUE7SUFDaEMsNkRBQXNDLENBQUE7SUFDdEMsZ0RBQXlCLENBQUE7SUFDekIsc0RBQStCLENBQUE7SUFDL0IsMkNBQW9CLENBQUE7SUFDcEIsb0RBQTZCLENBQUE7SUFDN0IsMENBQW1CLENBQUE7SUFDbkIseUNBQWtCLENBQUE7SUFDbEIsNkNBQXNCLENBQUE7QUFDeEIsQ0FBQyxFQVZXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFVOUI7QUFFRCxNQUFNLENBQU4sSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLG9DQUFpQixDQUFBO0lBQ2pCLG1DQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFIVyxlQUFlLEtBQWYsZUFBZSxRQUcxQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFF1ZXJ5Rm9ybWF0IHtcbiAgR01MMiA9ICdnbWwyJyxcbiAgR01MMyA9ICdnbWwzJyxcbiAgSlNPTiA9ICdqc29uJyxcbiAgR0VPSlNPTiA9ICdnZW9qc29uJyxcbiAgR0VPSlNPTjIgPSAnZ2VvanNvbjInLFxuICBFU1JJSlNPTiA9ICdlc3JpanNvbicsXG4gIFRFWFQgPSAndGV4dCcsXG4gIEhUTUwgPSAnaHRtbCcsXG4gIEhUTUxHTUwyID0gJ2h0bWxnbWwyJ1xufVxuXG5leHBvcnQgZW51bSBRdWVyeUZvcm1hdE1pbWVUeXBlIHtcbiAgR01MMiA9ICdhcHBsaWNhdGlvbi92bmQub2djLmdtbCcsXG4gIEdNTDMgPSAnYXBwbGljYXRpb24vdm5kLm9nYy5nbWwvMy4xLjEnLFxuICBKU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nLFxuICBHRU9KU09OID0gJ2FwcGxpY2F0aW9uL2dlb2pzb24nLFxuICBHRU9KU09OMiA9ICdnZW9qc29uJyxcbiAgRVNSSUpTT04gPSAnYXBwbGljYXRpb24vanNvbicsXG4gIFRFWFQgPSAndGV4dC9wbGFpbicsXG4gIEhUTUwgPSAndGV4dC9odG1sJyxcbiAgSFRNTEdNTDIgPSAndGV4dC9odG1sJ1xufVxuXG5leHBvcnQgZW51bSBRdWVyeUh0bWxUYXJnZXQge1xuICBJRlJBTUUgPSAnaWZyYW1lJyxcbiAgQkxBTksgPSAnX2JsYW5rJ1xufVxuIl19