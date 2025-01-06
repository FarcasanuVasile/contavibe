import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink],
})
export class HeaderComponent {
  inputChecked = false;
  toggleMenu(ev: Event) {
    this.inputChecked = !this.inputChecked;
    console.log(this.inputChecked);
    ev.preventDefault();
    console.log(ev);
  }
}
