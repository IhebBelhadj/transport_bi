import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    itemList: any[] = [

        {
            label: "Engagement client 1",
            routerLink: ['/dashboard/engagement-client-1'],
            role: 'DM'
        },
        {
            label: "Engagement client 2",
            routerLink: ['/dashboard/engagement-client-2'],
            role: 'RSC'
        },
        {
            label: "Analyse fidelite",
            routerLink: ['/dashboard/analyse-fidelite'],
            role: 'RF'
        },
        {
            label: "Analyse fidelite 2",
            routerLink: ['/dashboard/analyse-fidelite-2'],
            role: 'DV'
        },
        {
            label: "Apercu des annulations",
            routerLink: ['/dashboard/apercu-annulations'],
            role: 'RSC'
        },
        {
            label: "Cout1",
            routerLink: ['/dashboard/cout1'],
            role: ''
        },
        {
            label: "Cout2",
            routerLink: ['/dashboard/cout2'],
            role: ''
        },

    ];

    constructor(public layoutService: LayoutService, public authService: AuthService) { }

    ngOnInit() {

        const role = this.authService.userValue.role;

        this.model = [
            {
                label: 'Dashboards',
                items: this.itemList.filter(item => item.role === role)
            },
        ];
    }
}
