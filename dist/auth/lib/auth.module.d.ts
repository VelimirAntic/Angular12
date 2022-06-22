import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth-form/auth-form.component";
import * as i2 from "./auth-form/auth-google.component";
import * as i3 from "./auth-form/auth-intern.component";
import * as i4 from "./auth-form/auth-facebook.component";
import * as i5 from "./auth-form/auth-microsoft.component";
import * as i6 from "./auth-form/auth-microsoftb2c.component";
import * as i7 from "./shared/protected.directive";
import * as i8 from "@angular/common";
import * as i9 from "@angular/forms";
import * as i10 from "@angular/material/form-field";
import * as i11 from "@angular/material/input";
import * as i12 from "@angular/material/icon";
import * as i13 from "@angular/material/button";
import * as i14 from "@igo2/core";
import * as i15 from "@azure/msal-angular";
export declare class IgoAuthModule {
    static forRoot(): ModuleWithProviders<IgoAuthModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IgoAuthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IgoAuthModule, [typeof i1.AuthFormComponent, typeof i2.AuthGoogleComponent, typeof i3.AuthInternComponent, typeof i4.AuthFacebookComponent, typeof i5.AuthMicrosoftComponent, typeof i6.AuthMicrosoftb2cComponent, typeof i7.ProtectedDirective], [typeof i8.CommonModule, typeof i9.ReactiveFormsModule, typeof i10.MatFormFieldModule, typeof i11.MatInputModule, typeof i12.MatIconModule, typeof i13.MatButtonModule, typeof i14.IgoLanguageModule, typeof i15.MsalModule], [typeof i1.AuthFormComponent, typeof i7.ProtectedDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IgoAuthModule>;
}
