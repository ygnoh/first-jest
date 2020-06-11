import {observable, computed} from "mobx";

const add = (a, b) => {
    return a + b;
};

class Calculator {
    @observable _result = 0;

    add(a, b) {
        this._result = add(a, b);
    }

    @computed
    get result() {
        return this._result;
    }
}

export {
    add,
    Calculator
};
