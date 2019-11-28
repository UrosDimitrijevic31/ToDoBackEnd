class UserName {
    constructor() {
        this.username = document.createElement('input');
        this.username.type = 'text';
        this.username.id = 'username';
        this.username.placeholder = 'Username...';
        this.titleName = ''
        this.username.addEventListener('input', () => {
            this.titleName = this.username.value
        })

        this.btnAdd = document.createElement('input');
        this.btnAdd.type = 'submit';
        this.btnAdd.id = 'btn-add';
        this.btnAdd.value = 'Select'

        this.form = document.createElement('section');
        this.form.appendChild(this.username);
        this.form.appendChild(this.btnAdd);
    }

    getNode() {
        return this.form;
    }
    selectBtnOnClick(select) {
        this.btnAdd.addEventListener('click', select);
    }
    //ToDo: Add onKeyUp
}

export {
    UserName
}