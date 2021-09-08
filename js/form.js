/**
 * Form
 **/

function Form(options) {
    this.container = options.container;
    this.clickSubmitButton();
}

Form.prototype.getFields = function() {
    return this.fields = {}
}

Form.prototype.clickSubmitButton = function() {
    this.container.addEventListener('submit', (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            this.submitForm();
        }
    });
}

Form.prototype.validateForm = function() {
    this.clearErrors();
    this.getFields();
}

Form.prototype.submitForm = function() {
    this.getFields();
}

Form.prototype.clearFormInputs = function() {}

Form.prototype.clearErrors = function() {
    this.getFields();
}

Form.prototype.validateEmail = function(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
