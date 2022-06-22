export var OgcFilterOperatorType;
(function (OgcFilterOperatorType) {
    OgcFilterOperatorType["BasicNumericOperator"] = "basicnumericoperator";
    OgcFilterOperatorType["Basic"] = "basic";
    OgcFilterOperatorType["BasicAndSpatial"] = "basicandspatial";
    OgcFilterOperatorType["Spatial"] = "spatial";
    OgcFilterOperatorType["All"] = "all";
    OgcFilterOperatorType["Time"] = "time";
})(OgcFilterOperatorType || (OgcFilterOperatorType = {}));
export var OgcFilterOperator;
(function (OgcFilterOperator) {
    OgcFilterOperator["BBOX"] = "BBox";
    OgcFilterOperator["PropertyIsBetween"] = "PropertyIsBetween";
    OgcFilterOperator["Contains"] = "Contains";
    OgcFilterOperator["During"] = "During";
    OgcFilterOperator["PropertyIsEqualTo"] = "PropertyIsEqualTo";
    OgcFilterOperator["PropertyIsGreaterThan"] = "PropertyIsGreaterThan";
    OgcFilterOperator["PropertyIsGreaterThanOrEqualTo"] = "PropertyIsGreaterThanOrEqualTo";
    OgcFilterOperator["Intersects"] = "Intersects";
    OgcFilterOperator["PropertyIsNull"] = "PropertyIsNull";
    OgcFilterOperator["PropertyIsLessThan"] = "PropertyIsLessThan";
    OgcFilterOperator["PropertyIsLessThanOrEqualTo"] = "PropertyIsLessThanOrEqualTo";
    OgcFilterOperator["PropertyIsLike"] = "PropertyIsLike";
    OgcFilterOperator["PropertyIsNotEqualTo"] = "PropertyIsNotEqualTo";
    OgcFilterOperator["Within"] = "Within";
    OgcFilterOperator["And"] = "And";
    OgcFilterOperator["Or"] = "Or";
    OgcFilterOperator["Not"] = "Not";
})(OgcFilterOperator || (OgcFilterOperator = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZmlsdGVyL3NoYXJlZC9vZ2MtZmlsdGVyLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVkscUJBT1g7QUFQRCxXQUFZLHFCQUFxQjtJQUM3QixzRUFBNkMsQ0FBQTtJQUM3Qyx3Q0FBZSxDQUFBO0lBQ2YsNERBQW1DLENBQUE7SUFDbkMsNENBQW1CLENBQUE7SUFDbkIsb0NBQVcsQ0FBQTtJQUNYLHNDQUFhLENBQUE7QUFDakIsQ0FBQyxFQVBXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFPaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFrQlg7QUFsQkQsV0FBWSxpQkFBaUI7SUFDekIsa0NBQWEsQ0FBQTtJQUNiLDREQUF1QyxDQUFBO0lBQ3ZDLDBDQUFxQixDQUFBO0lBQ3JCLHNDQUFpQixDQUFBO0lBQ2pCLDREQUF1QyxDQUFBO0lBQ3ZDLG9FQUErQyxDQUFBO0lBQy9DLHNGQUFpRSxDQUFBO0lBQ2pFLDhDQUF5QixDQUFBO0lBQ3pCLHNEQUFpQyxDQUFBO0lBQ2pDLDhEQUF5QyxDQUFBO0lBQ3pDLGdGQUEyRCxDQUFBO0lBQzNELHNEQUFpQyxDQUFBO0lBQ2pDLGtFQUE2QyxDQUFBO0lBQzdDLHNDQUFpQixDQUFBO0lBQ2pCLGdDQUFXLENBQUE7SUFDWCw4QkFBUyxDQUFBO0lBQ1QsZ0NBQVcsQ0FBQTtBQUNmLENBQUMsRUFsQlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQWtCNUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBPZ2NGaWx0ZXJPcGVyYXRvclR5cGUge1xuICAgIEJhc2ljTnVtZXJpY09wZXJhdG9yID0gJ2Jhc2ljbnVtZXJpY29wZXJhdG9yJyxcbiAgICBCYXNpYyA9ICdiYXNpYycsXG4gICAgQmFzaWNBbmRTcGF0aWFsID0gJ2Jhc2ljYW5kc3BhdGlhbCcsXG4gICAgU3BhdGlhbCA9ICdzcGF0aWFsJyxcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBUaW1lID0gJ3RpbWUnXG59XG5cbmV4cG9ydCBlbnVtIE9nY0ZpbHRlck9wZXJhdG9yIHtcbiAgICBCQk9YID0gJ0JCb3gnLFxuICAgIFByb3BlcnR5SXNCZXR3ZWVuID0gJ1Byb3BlcnR5SXNCZXR3ZWVuJyxcbiAgICBDb250YWlucyA9ICdDb250YWlucycsXG4gICAgRHVyaW5nID0gJ0R1cmluZycsXG4gICAgUHJvcGVydHlJc0VxdWFsVG8gPSAnUHJvcGVydHlJc0VxdWFsVG8nLFxuICAgIFByb3BlcnR5SXNHcmVhdGVyVGhhbiA9ICdQcm9wZXJ0eUlzR3JlYXRlclRoYW4nLFxuICAgIFByb3BlcnR5SXNHcmVhdGVyVGhhbk9yRXF1YWxUbyA9ICdQcm9wZXJ0eUlzR3JlYXRlclRoYW5PckVxdWFsVG8nLFxuICAgIEludGVyc2VjdHMgPSAnSW50ZXJzZWN0cycsXG4gICAgUHJvcGVydHlJc051bGwgPSAnUHJvcGVydHlJc051bGwnLFxuICAgIFByb3BlcnR5SXNMZXNzVGhhbiA9ICdQcm9wZXJ0eUlzTGVzc1RoYW4nLFxuICAgIFByb3BlcnR5SXNMZXNzVGhhbk9yRXF1YWxUbyA9ICdQcm9wZXJ0eUlzTGVzc1RoYW5PckVxdWFsVG8nLFxuICAgIFByb3BlcnR5SXNMaWtlID0gJ1Byb3BlcnR5SXNMaWtlJyxcbiAgICBQcm9wZXJ0eUlzTm90RXF1YWxUbyA9ICdQcm9wZXJ0eUlzTm90RXF1YWxUbycsXG4gICAgV2l0aGluID0gJ1dpdGhpbicsXG4gICAgQW5kID0gJ0FuZCcsXG4gICAgT3IgPSAnT3InLFxuICAgIE5vdCA9ICdOb3QnXG59XG4iXX0=