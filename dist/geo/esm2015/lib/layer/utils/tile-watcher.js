import { uuid, Watcher, SubjectStatus } from '@igo2/utils';
export class TileWatcher extends Watcher {
    constructor(layer) {
        super();
        this.loaded = 0;
        this.loading = 0;
        this.source = layer.options.source.ol;
        this.id = uuid();
    }
    watch() {
        this.source.on(`tileloadstart`, e => this.handleLoadStart(e));
        this.source.on(`tileloadend`, e => this.handleLoadEnd(e));
        this.source.on(`tileloaderror`, e => this.handleLoadEnd(e));
    }
    unwatch() {
        this.source.un(`tileloadstart`, e => this.handleLoadStart(e));
        this.source.un(`tileloadend`, e => this.handleLoadEnd(e));
        this.source.un(`tileloaderror`, e => this.handleLoadEnd(e));
    }
    handleLoadStart(event) {
        // This is to avoid increasing
        // the number of loaded tiles if a tile was loading
        // before subscribing to this watcher
        if (!event.tile.__watchers__) {
            event.tile.__watchers__ = [];
        }
        event.tile.__watchers__.push(this.id);
        this.loading += 1;
        this.status = SubjectStatus.Working;
    }
    handleLoadEnd(event) {
        if (!event.tile.__watchers__) {
            return;
        }
        const watcherIndex = event.tile.__watchers__.indexOf(this.id);
        if (watcherIndex < 0) {
            return;
        }
        event.tile.__watchers__.splice(watcherIndex, 1);
        this.loaded += 1;
        const loading = this.loading;
        if (this.loaded >= loading) {
            if (loading === this.loading) {
                this.status = SubjectStatus.Done;
                this.loaded = this.loading = 0;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS13YXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvdXRpbHMvdGlsZS13YXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUszRCxNQUFNLE9BQU8sV0FBWSxTQUFRLE9BQU87SUFPdEMsWUFBWSxLQUFrQztRQUM1QyxLQUFLLEVBQUUsQ0FBQztRQU5GLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBTWxCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVTLEtBQUs7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRVMsT0FBTztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxlQUFlLENBQUMsS0FBVTtRQUNoQyw4QkFBOEI7UUFDOUIsbURBQW1EO1FBQ25ELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBRWpCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUMxQixJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDaEM7U0FDRjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbFNvdXJjZVRpbGUgZnJvbSAnb2wvc291cmNlL1RpbGUnO1xuaW1wb3J0IHsgdXVpZCwgV2F0Y2hlciwgU3ViamVjdFN0YXR1cyB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuaW1wb3J0IHsgVGlsZUxheWVyIH0gZnJvbSAnLi4vc2hhcmVkL2xheWVycy90aWxlLWxheWVyJztcbmltcG9ydCB7IFZlY3RvclRpbGVMYXllciB9IGZyb20gJy4uL3NoYXJlZC9sYXllcnMvdmVjdG9ydGlsZS1sYXllcic7XG5cbmV4cG9ydCBjbGFzcyBUaWxlV2F0Y2hlciBleHRlbmRzIFdhdGNoZXIge1xuICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9hZGVkID0gMDtcbiAgcHJpdmF0ZSBsb2FkaW5nID0gMDtcblxuICBwcml2YXRlIHNvdXJjZTogb2xTb3VyY2VUaWxlO1xuXG4gIGNvbnN0cnVjdG9yKGxheWVyOiBUaWxlTGF5ZXIgfCBWZWN0b3JUaWxlTGF5ZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlID0gbGF5ZXIub3B0aW9ucy5zb3VyY2Uub2w7XG4gICAgdGhpcy5pZCA9IHV1aWQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB3YXRjaCgpIHtcbiAgICB0aGlzLnNvdXJjZS5vbihgdGlsZWxvYWRzdGFydGAsIGUgPT4gdGhpcy5oYW5kbGVMb2FkU3RhcnQoZSkpO1xuICAgIHRoaXMuc291cmNlLm9uKGB0aWxlbG9hZGVuZGAsIGUgPT4gdGhpcy5oYW5kbGVMb2FkRW5kKGUpKTtcbiAgICB0aGlzLnNvdXJjZS5vbihgdGlsZWxvYWRlcnJvcmAsIGUgPT4gdGhpcy5oYW5kbGVMb2FkRW5kKGUpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1bndhdGNoKCkge1xuICAgIHRoaXMuc291cmNlLnVuKGB0aWxlbG9hZHN0YXJ0YCwgZSA9PiB0aGlzLmhhbmRsZUxvYWRTdGFydChlKSk7XG4gICAgdGhpcy5zb3VyY2UudW4oYHRpbGVsb2FkZW5kYCwgZSA9PiB0aGlzLmhhbmRsZUxvYWRFbmQoZSkpO1xuICAgIHRoaXMuc291cmNlLnVuKGB0aWxlbG9hZGVycm9yYCwgZSA9PiB0aGlzLmhhbmRsZUxvYWRFbmQoZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMb2FkU3RhcnQoZXZlbnQ6IGFueSkge1xuICAgIC8vIFRoaXMgaXMgdG8gYXZvaWQgaW5jcmVhc2luZ1xuICAgIC8vIHRoZSBudW1iZXIgb2YgbG9hZGVkIHRpbGVzIGlmIGEgdGlsZSB3YXMgbG9hZGluZ1xuICAgIC8vIGJlZm9yZSBzdWJzY3JpYmluZyB0byB0aGlzIHdhdGNoZXJcbiAgICBpZiAoIWV2ZW50LnRpbGUuX193YXRjaGVyc19fKSB7XG4gICAgICBldmVudC50aWxlLl9fd2F0Y2hlcnNfXyA9IFtdO1xuICAgIH1cbiAgICBldmVudC50aWxlLl9fd2F0Y2hlcnNfXy5wdXNoKHRoaXMuaWQpO1xuXG4gICAgdGhpcy5sb2FkaW5nICs9IDE7XG4gICAgdGhpcy5zdGF0dXMgPSBTdWJqZWN0U3RhdHVzLldvcmtpbmc7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxvYWRFbmQoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRpbGUuX193YXRjaGVyc19fKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd2F0Y2hlckluZGV4ID0gZXZlbnQudGlsZS5fX3dhdGNoZXJzX18uaW5kZXhPZih0aGlzLmlkKTtcbiAgICBpZiAod2F0Y2hlckluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnRpbGUuX193YXRjaGVyc19fLnNwbGljZSh3YXRjaGVySW5kZXgsIDEpO1xuXG4gICAgdGhpcy5sb2FkZWQgKz0gMTtcblxuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmc7XG4gICAgaWYgKHRoaXMubG9hZGVkID49IGxvYWRpbmcpIHtcbiAgICAgIGlmIChsb2FkaW5nID09PSB0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBTdWJqZWN0U3RhdHVzLkRvbmU7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdGhpcy5sb2FkaW5nID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==