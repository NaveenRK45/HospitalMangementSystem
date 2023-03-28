import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const MaterialComponent =[
    MatButtonModule
]

@NgModule({
    declarations:[],
    imports:[CommonModule,MaterialComponent],
    exports:[MaterialComponent]
})
export class MaterialModule {}