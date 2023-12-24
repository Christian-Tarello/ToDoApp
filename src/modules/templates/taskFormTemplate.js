export default class TaskFormTemplate {
    createInputWrapper() {
        const element = document.createElement('li');
        element.classList.add('taskForm-field');
        return element;
    }

    createLabel(label, name) {
        const element = document.createElement('label');
        element.setAttribute('for', name);
        element.classList.add('taskForm-label');
        element.innerText = label;
        return element;
    }

    createTextInput(name, value) {
        const element = document.createElement('input');
        element.setAttribute('type', 'text');
        element.setAttribute('id', name);
        element.setAttribute('name', name);
        element.setAttribute('required', '');
        element.setAttribute('value', value);
        element.classList.add('taskForm-text');
        return element
    }

    createSelect(name, optionElements) {
        const element = document.createElement('select');
        element.setAttribute('id', name);
        element.setAttribute('name', name);
        element.append(...optionElements);
        element.classList.add('taskForm-select');
        return element;
    }

    createOption(label, value, isSelected = false) {
        const element = document.createElement('option');
        element.setAttribute('value', value);
        element.innerText = label;
        if (isSelected) {element.setAttribute('selected', '');}
        element.classList.add('taskForm-option');
        return element;
    }

    createDateInput(name, value) {
        const element = document.createElement('input');
        element.setAttribute('type', 'date');
        element.setAttribute('id', name);
        element.setAttribute('name', name);
        element.setAttribute('value', value);
        element.classList.add('taskForm-date');
        return element
    }

    createTextField(label, name, value) {
        const element = this.createInputWrapper();
        const labelElement = this.createLabel(label, name);
        const inputElement = this.createTextInput(name, value);
        element.append(
            labelElement,
            inputElement
        );
        return element;
    }

    createSelectField(label, name, options) {
        const element = this.createInputWrapper();
        const labelElement = this.createLabel(label, name);
        const optionElements = options.map(
            (option) => this.createOption(option.label, option.value, option.isSelected)
        );
        const selectElement = this.createSelect(name, optionElements);
        element.append(
            labelElement,
            selectElement
        );
        return element;
    }

    createDateField(label, name, value) {
        const element = this.createInputWrapper();
        const labelElement = this.createLabel(label, name);
        const inputElement = this.createDateInput(name, value);
        element.append(
            labelElement,
            inputElement
        );
        return element;
    }

    createInput(data) {
        switch (data.type) {
            case 'selectField':
                return this.createSelectField(
                    data.label,
                    data.name,
                    data.options
                    );
            case 'textField':
                return this.createTextField(
                    data.label,
                    data.name,
                    data.value
                );
            case 'dateField':
                return this.createDateField(
                    data.label,
                    data.name,
                    data.value
                );
            default:
                break;
        }
    }

    createFormElement() {
        const element = document.createElement('form');
        element.setAttribute('action', '');
        element.setAttribute('method', 'POST');
        return element;
    }

    createSubmitButton(node) {
        const element = document.createElement('button');
        element.setAttribute('type', 'submit');
        element.append(node);
        return element;
    }

    createCancelButton(node) {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.append(node);
        console.log(element)
        return element;
    }

    createFieldList() {
        const element = document.createElement('ul');
        element.setAttribute('type', 'button');
        return element;
    }
}