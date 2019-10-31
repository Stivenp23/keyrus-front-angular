import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    menu = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Products',
            href: '/productos'
        },
        {
            title: 'About',
            href: '/'
        },
        {
            title: 'Pages',
            href: '/'
        },
        {
            title: 'Blog',
            href: '/'
        },
        {
            title: 'Contact',
            href: '/'
        },
    ]

    constructor() {
    }

    ngOnInit() {

    }

    nav() {
        let displayType = 'block';
        let toggledInput = document.getElementById("menumain");
        toggledInput.style.display == displayType ? toggledInput.style.display = "none" : toggledInput.style.display = displayType;
    }
}
