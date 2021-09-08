const ContactUsForm = function(options) {
    Form.apply(this, arguments);
}

ContactUsForm.prototype = Object.create(Form.prototype);
ContactUsForm.prototype.constructor = ContactUsForm;

ContactUsForm.prototype.getFields = function() {
    this.fields = {
        email: this.container.querySelector('input[name=email]'),
        password: this.container.querySelector('input[name=password]'),
        checkbox: this.container.querySelector('input[name=checkbox]')
    }
}

ContactUsForm.prototype.clickSubmitButton = function() {
    Form.prototype.clickSubmitButton.apply(this, arguments);
}

ContactUsForm.prototype.validateForm = function() {
    Form.prototype.validateForm.apply(this, arguments);
    if (!this.fields.checkbox.checked || !this.fields.email.value.trim() || !this.fields.password.value.trim() || !this.validateEmail(this.fields.email.value.trim())) {
        for (let field in this.fields) {
            if (!this.fields[field].value.trim() || !this.fields.checkbox.checked) {
                this.fields[field].closest('.form-group').classList.add('error');
                this.fields[field].closest('.form-group').querySelector('.error-message').innerText = 'The field ' + field + ' is required';
            } else if (field === 'email' && this.fields[field].value.trim() && !this.validateEmail(this.fields[field].value.trim())) {
                this.fields[field].closest('.form-group').classList.add('error');
                this.fields[field].closest('.form-group').querySelector('.error-message').innerText = 'The email is incorrect';
            }
        }
        return false;
    }
    return true;
}

ContactUsForm.prototype.submitForm = function() {
    Form.prototype.submitForm.apply(this, arguments);
    this.clearErrors();
    this.clearFormInputs();
}

ContactUsForm.prototype.clearFormInputs = function() {
    for (let field in this.fields) {
        this.fields[field].value = '';
    }
    this.fields.checkbox.checked = false;
}

ContactUsForm.prototype.clearErrors = function() {
    Form.prototype.clearErrors.apply(this, arguments);
    for (let field in this.fields) {
        this.fields[field].closest('.form-group').classList.remove('error');
        this.fields[field].closest('.form-group').querySelector('.error-message').innerText = '';
    }
}

if (document.querySelector('form')) {
    const contactUsForm = new ContactUsForm({
        container: document.querySelector('form'),
    });
}
