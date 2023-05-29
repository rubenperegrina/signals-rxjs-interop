import { Component, Injector, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './interfaces/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users!: Signal<Users[]>;
  public age: WritableSignal<number> = signal(0);
  public totalAge: Signal<number> = computed(() => this.age() * 2);
  constructor(private usersService: UsersService, private injector: Injector){
  }

  ngOnInit(): void {
      this.users = this.usersService.getUsers();
      effect(() => {
        console.log(`Age: ${this.age()}`);
        console.log(this.totalAge());
      }, {injector: this.injector})
  }

  public updateAge(){
    this.age.update(age => age+2);
  }
}
