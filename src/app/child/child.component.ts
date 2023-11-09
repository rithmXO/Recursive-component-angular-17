import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  showParent = false;
}
