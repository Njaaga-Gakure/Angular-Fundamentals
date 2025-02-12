# Angular

## Data Binding

### Interpolation

    <h1>{{ title }}</h1>

### Property Binding

    <input [value]="username">

### Event Binding

    <button (click)="sayHello()">Click</button>

### Two-Way Binding

    <input [(ngModel)]="name">

## Directives

### Structural Directives

#### \*ngIf

    <button (click)="show = !show">Toggle</button>
    <p *ngIf="show">This text is conditionally shown! 🎉</p>

#### \*ngFor

    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>

### Attribute Directives

#### ngClass

    <p [ngClass]="{ 'red-text': isRed }">This is a colored text</p>
    <button (click)="isRed = !isRed">Toggle Color</button>

#### ngStyle

    <p [ngStyle]="{ 'color': isRed ? 'red' : 'black' }">Styled text</p>
