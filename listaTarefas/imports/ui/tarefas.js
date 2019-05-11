import { Template } from 'meteor/templating';

import { Tarefas } from '../api/tarefas.js';

import './tarefas.html';

Template.tarefa.events({
    'click .toggle-checked'() {
        Tarefas.update(this._id, {
            $set: { checked: !this.checked },
        });
    },
    'click .delete'() {
        Tarefas.remove(this._id);
    },
});