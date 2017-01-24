import {Component} from 'angular2/core';

import {NewComponent} from './new.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/html/new.html'



})

export class AppComponent {
	myTopicFirst = NewComponent.myText;
	myTopicSecond = NewComponent.myTextSecond;
	
}
