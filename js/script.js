// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const app = new Vue (
    {
        el: "#root",

        data: {
            todo: [
                {
                    text: 'Work on the project',
                    done: false
                },
                {
                    text: 'Add something in Portfolio',
                    done: false
                },
                {
                    text: 'Have a meet with Sarah',
                    done: false
                },
                {
                    text: 'Join a new online language class',
                    done: false
                },
                {
                    text: 'Read 20 minutes',
                    done: false
                },
                {
                    text: 'Run 10kms',
                    done: false
                }

            ],

            newTask: "",
        },

        methods: {
            
            removeToDo: function(index) {
                this.todo.splice(index, 1);
            },

            addTask: function() {
                //pusho un nuovo obj in array
                this.todo.push({text: this.newTask, done: false});
                this.newTask = "";
            }
        }
    }
)