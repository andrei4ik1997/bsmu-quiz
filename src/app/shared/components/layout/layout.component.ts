import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss',
	imports: [RouterOutlet, NzLayoutModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
