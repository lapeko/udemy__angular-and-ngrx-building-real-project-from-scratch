import {Component, inject} from '@angular/core'
import {RouterLink} from '@angular/router'
import {Store} from '@ngrx/store'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'

import {register} from '../../store/auth.actions'

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
  private fb = inject(FormBuilder)
  private store: Store = inject(Store)

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  onSubmit(): void {
    const request = {user: this.form.getRawValue()}
    this.store.dispatch(register({request}))
  }
}
