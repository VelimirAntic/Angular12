import { Observable } from 'rxjs';
import { Direction, DirectionOptions } from '../shared/directions.interface';
export declare abstract class DirectionsSource {
    abstract enabled: boolean;
    abstract getName(): string;
    abstract route(coordinates: [number, number][], directionsOptions: DirectionOptions): Observable<Direction[]>;
}
