import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from "../input/input.component";

@Component({
  // decorator for component
  selector: 'app-home', // component name
  standalone: true, // new feature in angular 17 replaced by app.module.ts
  imports: [MatCardModule, MatButtonModule, InputComponent], // imported modules relationships
  templateUrl: './home.component.html', // template url html
  styleUrl: './home.component.scss', // style url scss or styleUrls:[]
}) // with out any things between decorator and class
export class HomeComponent {
  // class name for component just one class
  testVar: string = 'test';
  y = 0;
  status = false;
  addOne = () => {
    this.y++;
  };

  decreaceOne = () => {
    this.y--;
  };
  showwwwww = () => {
    this.status = !this.status;
  };
}
