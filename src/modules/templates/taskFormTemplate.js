export default class TaskFormTemplate {
    createInputWrapper() {
        const element = document.createElement('li');
        return element;
    }

    createLabel(label, name) {
        const element = document.createElement('label');
        element.setAttribute('for', name);
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
        return element
    }

    createSelect(name, optionElements) {
        const element = document.createElement('select');
        element.setAttribute('id', name);
        element.setAttribute('name', name);
        element.append(...optionElements);
        return element;
    }

    createOption(label, value, isSelected = false) {
        const element = document.createElement('option');
        element.setAttribute('value', value);
        element.innerText = label;
        if (isSelected) {element.setAttribute('selected', '');}
        return element;
    }

    createDateInput(name, value) {
        const element = document.createElement('input');
        element.setAttribute('type', 'date');
        element.setAttribute('id', name);
        element.setAttribute('name', name);
        element.setAttribute('value', value);
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

    
}