import {Component, inject} from '@angular/core'
import {RouterLink} from '@angular/router'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  standalone: true
})
export class RegisterComponent {
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    console.log('submit');
    console.log(this.form.value);
    console.log(this.form.getRawValue());
  }
}
