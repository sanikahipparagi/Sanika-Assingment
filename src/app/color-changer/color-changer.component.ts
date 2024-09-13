import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-changer.component.html',
  styleUrl: './color-changer.component.css'
})
export class ColorChangerComponent {
  currentColor: string = 'white'; 

  setColor(color: string): void {
    this.currentColor = color;
  }

}
