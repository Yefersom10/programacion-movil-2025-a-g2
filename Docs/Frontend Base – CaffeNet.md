# Caffenet – Frontend (Ionic + Angular)

Caffenet es una aplicación híbrida construida con Ionic + Angular, diseñada para la gestión de productos, pedidos, reservas y usuarios en una cafetería. Está estructurada en módulos funcionales y orientada a la escalabilidad, utilizando buenas prácticas de separación de responsabilidades.

###  Tecnologías Usadas
- Framework principal: Ionic + Angular

- Lenguaje: TypeScript

- Estilos: SCSS con Ionic Components

- Gestión de rutas: Angular Modular Routing

- Comunicación con el backend: HttpClient centralizado vía api.service.ts

- Autenticación: JWT con auth.service.ts y guardas de rutas

- Almacenamiento local: token.service.ts

- Arquitectura: Modular y basada en Core/Shared/Modules

### Estructura del Proyecto
````pl
src/
└── app/
    ├── core/                  # Lógica global del sistema
    │   ├── services/          # Servicios de autenticación, API 
    │   
    │
    ├── shared/                
    │   ├── components/        # Bottom bar, cards, etc.
    │   
    │
    ├── modules/               # Cada módulo representa un dominio funcional
    │   ├── admin/             # Gestión administrativa
    │   ├── comprobante/       # Comprobantes de pago
    │   ├── detalle-pedido/    # Detalles de cada pedido
    │   ├── pago/              # Procesos de pago
    │   ├── pedido/            # Lógica de pedidos
    │   ├── producto/          # Catálogo de productos
    │   ├── reserva/           # Sistema de reservas
    │   ├── user/              # Login, registro, usuarios
    │   └── mainmenu/          # Menú principal / Home
    │
    ├── app.routes.ts          # Enrutamiento centralizado
    └── app.module.ts          # Módulo raíz
````

### Instalación y Ejecución
````
# Instalar dependencias
npm install

# Ejecutar en navegador
ionic serve

# Ejecutar en dispositivo Android (con Capacitor configurado)
ionic cap run android
````

### Rutas Principales

| Ruta|	Descripción|
|--------|--------|
|/login	|Inicio de sesión|
|/register|	Registro de usuario|
|/home|	Página principal|
|/productos	|Lista de productos|
|/reserva/crear	|Crear una nueva reserva|
|/pedido/detalle/:id|	Detalle de un pedido|

### Componentes Compartidos
- En shared/components/:

- bottom-bar/: Barra de navegación inferior

- product-card/: Tarjeta individual para mostrar un producto

## Detalle de componentes o carpeta de los mismos

### Componentes de User(Usuario)

#### Login

El componente de login muestra dos cajas de texto para ingresar el correo y la contraseña del usuario que quiere registrar todo la funcionalidad del login se maneja en un solo page  tiene en si su html, scss y ts.Todo se comunica con el service que envia los datos a la base de datos.

##### Codigo html
````hmtl
<ion-content [fullscreen]="true">
  <div class="login-container">
    <div class="back-button">
      <ion-icon name="chevron-back"></ion-icon>
    </div>

    <div class="login-title">
      <h1>Ingreso</h1>
    </div>


    <!-- Mensaje de éxito -->
    <div *ngIf="successMessage" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>
    <!-- Errores -->
    <div *ngIf="errors.length > 0">
      <div *ngFor="let error of errors" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>


    <div class="login-form">
      <div class="form-field">
        <input type="email" placeholder="Correo:" [(ngModel)]="userId">
      </div>

      <div class="form-field">
        <input type="password" placeholder="Contraseña:" [(ngModel)]="password">
      </div>

      <div class="login-button">
        <ion-button expand="block" (click)="login()">
          Iniciar sesión
        </ion-button>
      </div>
    </div>

    <div class="login-options">
      <div class="register-option" [routerLink]="['/register']">
        <p>¿Aún no tienes cuenta? <span class="link">Regístrate</span></p>
      </div>

      <div class="forgot-option" (click)="forgotPassword()">
        <p>¿Olvidaste tu contraseña?</p>
      </div>

      <div class="divider"></div>

      <div class="guest-option">
        <p>Continuar como <span class="link">Invitado</span></p>
      </div>

      <div class="login-option">
        <div class="login-option-admin" [routerLink]="['/admin-login']">
          <p>Continuar como <span class="link">Administrador</span></p>
        </div>
      </div>
    </div>
  </div>
</ion-content>
````
##### Codigo Scss
````scss
ion-content {
    --background: #1e1221;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
  
  .login-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
  }
  
  .back-button {
    margin-top: 10px;
    margin-bottom: 20px;
    
    ion-icon {
      color: white;
      font-size: 24px;
    }
  }
  
  .login-title {
    margin-bottom: 40px;
    
    h1 {
      color: white;
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      margin: 0;
    }
  }
  
  .login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 30px;
    
    .form-field {
      width: 100%;
      
      input {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.25);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 15px;
        font-size: 16px;
        outline: none;
        
        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
    
    .login-button {
      margin-top: 16px;
      
      ion-button {
        --background: #9d2c4e;
        --background-activated: #7a2239;
        --border-radius: 8px;
        --color: white;
        --box-shadow: none;
        height: 50px;
        font-size: 16px;
        font-weight: normal;
        text-transform: none;
      }
    }
  }
  
  .login-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    
    p {
      color: white;
      font-size: 14px;
      margin: 8px 0;
      text-align: center;
    }
    
    .link {
      color: white;
      text-decoration: underline;
    }
    
    .register-option {
      margin-bottom: 8px;
    }
    
    .forgot-option {
      margin-bottom: 20px;
    }
    
    .divider {
      width: 70%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 20px 0;
    }
    
    .guest-option {
      margin-top: 8px;
    }
  }
````
##### Codigo ts
````ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, IonicModule} from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { LoginService } from './login.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterLink],
})
export class LoginPage {
  userId: string = '';
  password: string = '';
  successMessage = '';
  errors: string[] = [];

  constructor(
    private loginService: LoginService,  // Inyecta el servicio
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  login() {
    this.errors = [];
    this.successMessage = '';
  
    if (!this.userId) this.errors.push('El correo electrónico es obligatorio.');
    if (!this.password) this.errors.push('La contraseña es obligatoria.');
  
    if (this.errors.length > 0) return;
  
    const userData = {
      userId: this.userId,
      password: this.password
    };
  
    this.loginService.login(userData).subscribe({
      next: (response: boolean) => {
        if (response === true) {
          this.successMessage = 'Inicio de sesión exitoso. Redirigiendo al menú...';
          setTimeout(() => this.navCtrl.navigateRoot('/mainmenu'), 1000);
        } else {
          this.errors.push('Credenciales incorrectas. Intenta de nuevo.');
        }
      },
      error: () => {
        this.errors.push('Error de conexión. Intenta más tarde.');
      }
    });
  }
  forgotPassword() {
    this.alertCtrl.create({
      header: 'Recuperar contraseña',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Ingresa tu correo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Enviar',
          handler: data => {
            if (!data.email) {
              this.errors = ['El correo es obligatorio'];
              return;
            }
  
            this.loginService.recuperarContrasenia(data.email).subscribe({
              next: (response) => {
                this.successMessage = response.message;
                this.errors = [];
              },
              error: (err) => {
                this.errors = [err.error.message || 'Error al recuperar contraseña'];
                this.successMessage = '';
              }
            });
          }
        }
      ]
    }).then(alert => alert.present());
  }
}

````
##### Codigo de service
````ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/api.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${API_BASE_URL}/loginUser`;

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  recuperarContrasenia(email: string): Observable<any> {
    return this.http.post(`${API_BASE_URL}/recuperar-contrasenia?email=${encodeURIComponent(email)}`, {});
  }
}

````

