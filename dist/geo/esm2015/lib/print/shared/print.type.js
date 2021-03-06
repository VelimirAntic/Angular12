import { strEnum } from '@igo2/utils';
export const PrintOutputFormat = strEnum(['Pdf', 'Image']);
export const PrintPaperFormat = strEnum([
    'A0',
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'Letter',
    'Legal'
]);
export const PrintOrientation = strEnum(['landscape', 'portrait']);
export const PrintResolution = strEnum(['72', '96', '150', '300']);
export const PrintSaveImageFormat = strEnum([
    'Bmp',
    'Gif',
    'Jpeg',
    'Png',
    'Tiff'
]);
export const PrintLegendPosition = strEnum([
    'none',
    'topright',
    'topleft',
    'bottomleft',
    'bottomright',
    'newpage'
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3ByaW50L3NoYXJlZC9wcmludC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdEMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFJM0QsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ3RDLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLFFBQVE7SUFDUixPQUFPO0NBQ1IsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFHbkUsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFHbkUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDO0lBQzFDLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0NBQ1AsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO0lBQ3pDLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztDQUNWLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0ckVudW0gfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBQcmludE91dHB1dEZvcm1hdCA9IHN0ckVudW0oWydQZGYnLCAnSW1hZ2UnXSk7XG5cbmV4cG9ydCB0eXBlIFByaW50T3V0cHV0Rm9ybWF0ID0ga2V5b2YgdHlwZW9mIFByaW50T3V0cHV0Rm9ybWF0O1xuXG5leHBvcnQgY29uc3QgUHJpbnRQYXBlckZvcm1hdCA9IHN0ckVudW0oW1xuICAnQTAnLFxuICAnQTEnLFxuICAnQTInLFxuICAnQTMnLFxuICAnQTQnLFxuICAnQTUnLFxuICAnTGV0dGVyJyxcbiAgJ0xlZ2FsJ1xuXSk7XG5leHBvcnQgdHlwZSBQcmludFBhcGVyRm9ybWF0ID0ga2V5b2YgdHlwZW9mIFByaW50UGFwZXJGb3JtYXQ7XG5cbmV4cG9ydCBjb25zdCBQcmludE9yaWVudGF0aW9uID0gc3RyRW51bShbJ2xhbmRzY2FwZScsICdwb3J0cmFpdCddKTtcbmV4cG9ydCB0eXBlIFByaW50T3JpZW50YXRpb24gPSBrZXlvZiB0eXBlb2YgUHJpbnRPcmllbnRhdGlvbjtcblxuZXhwb3J0IGNvbnN0IFByaW50UmVzb2x1dGlvbiA9IHN0ckVudW0oWyc3MicsICc5NicsICcxNTAnLCAnMzAwJ10pO1xuZXhwb3J0IHR5cGUgUHJpbnRSZXNvbHV0aW9uID0ga2V5b2YgdHlwZW9mIFByaW50UmVzb2x1dGlvbjtcblxuZXhwb3J0IGNvbnN0IFByaW50U2F2ZUltYWdlRm9ybWF0ID0gc3RyRW51bShbXG4gICdCbXAnLFxuICAnR2lmJyxcbiAgJ0pwZWcnLFxuICAnUG5nJyxcbiAgJ1RpZmYnXG5dKTtcbmV4cG9ydCB0eXBlIFByaW50U2F2ZUltYWdlRm9ybWF0ID0ga2V5b2YgdHlwZW9mIFByaW50U2F2ZUltYWdlRm9ybWF0O1xuXG5leHBvcnQgY29uc3QgUHJpbnRMZWdlbmRQb3NpdGlvbiA9IHN0ckVudW0oW1xuICAnbm9uZScsXG4gICd0b3ByaWdodCcsXG4gICd0b3BsZWZ0JyxcbiAgJ2JvdHRvbWxlZnQnLFxuICAnYm90dG9tcmlnaHQnLFxuICAnbmV3cGFnZSdcbl0pO1xuZXhwb3J0IHR5cGUgUHJpbnRMZWdlbmRQb3NpdGlvbiA9IGtleW9mIHR5cGVvZiBQcmludExlZ2VuZFBvc2l0aW9uO1xuIl19