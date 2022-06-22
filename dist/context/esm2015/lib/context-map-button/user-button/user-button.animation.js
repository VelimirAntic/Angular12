import { trigger, state, style, transition, animate } from '@angular/animations';
export function userButtonSlideInOut() {
    return trigger('userButtonState', [
        state('collapse', style({
            width: '0',
            overflow: 'hidden',
            display: 'none'
        })),
        state('expand', style({
            overflow: 'hidden',
            display: 'display'
        })),
        transition('collapse => expand', animate('200ms')),
        transition('expand => collapse', animate('200ms'))
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1idXR0b24uYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29udGV4dC9zcmMvbGliL2NvbnRleHQtbWFwLWJ1dHRvbi91c2VyLWJ1dHRvbi91c2VyLWJ1dHRvbi5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLE9BQU8sT0FBTyxDQUFDLGlCQUFpQixFQUFFO1FBQ2hDLEtBQUssQ0FDSCxVQUFVLEVBQ1YsS0FBSyxDQUFDO1lBQ0osS0FBSyxFQUFFLEdBQUc7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQ0g7UUFDRCxLQUFLLENBQ0gsUUFBUSxFQUNSLEtBQUssQ0FBQztZQUNKLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1NBQ25CLENBQUMsQ0FDSDtRQUNELFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNuRCxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICBhbmltYXRlLFxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyQnV0dG9uU2xpZGVJbk91dCgpOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcigndXNlckJ1dHRvblN0YXRlJywgW1xuICAgIHN0YXRlKFxuICAgICAgJ2NvbGxhcHNlJyxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pXG4gICAgKSxcbiAgICBzdGF0ZShcbiAgICAgICdleHBhbmQnLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGRpc3BsYXk6ICdkaXNwbGF5J1xuICAgICAgfSlcbiAgICApLFxuICAgIHRyYW5zaXRpb24oJ2NvbGxhcHNlID0+IGV4cGFuZCcsIGFuaW1hdGUoJzIwMG1zJykpLFxuICAgIHRyYW5zaXRpb24oJ2V4cGFuZCA9PiBjb2xsYXBzZScsIGFuaW1hdGUoJzIwMG1zJykpXG4gIF0pO1xufVxuIl19