import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cadastroForm: FormGroup;


  constructor(private fb: FormBuilder) {
    // Inicializa o formulário de cadastro com validações básicas
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  formModel = {
    UserName: '',
    PasswordHash: ''
  }



  @ViewChild('fecharModalCadastrar') fecharModalCadastrar: any;
  VisualizarSenha(id: string) {
    id = "#" + id;

    let campo = <HTMLInputElement>document.querySelector(id);

    if (campo.type === "password") {
      campo.type = "text";
    } else {
      campo.type = "password";
    }

  }

  hasError(field: string, error: string) {
    const control = this.cadastroForm.get(field);
    return control && control.hasError(error) && control.touched;
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      // Aqui você pode integrar com um serviço para enviar os dados do usuário
      console.log('Usuário cadastrado com sucesso:', this.cadastroForm.value);
      this.fecharModal();
    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }
 abriu(){
  console.log("abriu")
 }
  fecharModal() {
    const modalElement = document.getElementById('modalCadastrar');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      const modalBackdrop: any = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop) {
        modalBackdrop.parentNode.removeChild(modalBackdrop);
      }
      document.body.classList.remove('modal-open');
    }
  }
}
