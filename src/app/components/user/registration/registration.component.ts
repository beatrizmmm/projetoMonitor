import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControlOptions, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  user = {} as User;
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private router: Router,
              private toaster: ToastrService) { }

  get f(): any { return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmePassword')
    };

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      matricula: ['', Validators.required],
      password: ['',
        [Validators.required, Validators.minLength(4)]
      ],
      confirmePassword: ['', Validators.required],
    }, formOptions);
  }

  register(): void {
    this.user = { ...this.form.value };
    this.accountService.register(this.user).subscribe(
      () => this.router.navigateByUrl('/dashboard'),
      (error: any) => this.toaster.error(error.error)
    )
  }

}
