import { Template } from 'meteor/templating';

import { Tarefas } from '../api/tarefas.js';

import './tarefas.js';
import './body.html';

Template.body.helpers({
    tarefas() {
        return Tarefas.find({}, { sort: { createdAt: -1 } });
    },
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;
        Tarefas.insert({
            text,
            createdAt: new Date(), 
        });
        target.text.value = '';
    },
    
});

