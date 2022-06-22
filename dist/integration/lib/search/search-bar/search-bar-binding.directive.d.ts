import { OnInit, OnDestroy } from '@angular/core';
import { SearchBarComponent } from '@igo2/geo';
import { SearchState } from '../search.state';
import * as i0 from "@angular/core";
export declare class SearchBarBindingDirective implements OnInit, OnDestroy {
    private component;
    private searchState;
    get searchTerm(): string;
    get searchType(): string;
    private searchTerm$$;
    private searchType$$;
    private searchDisabled$$;
    constructor(component: SearchBarComponent, searchState: SearchState);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSearchTermChange(searchTerm?: string): void;
    onSearchTypeChange(searchType?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBarBindingDirective, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SearchBarBindingDirective, "[igoSearchBarBinding]", never, {}, {}, never>;
}
