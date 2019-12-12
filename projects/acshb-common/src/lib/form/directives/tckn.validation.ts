import { AbstractControl } from '@angular/forms';

export const isValidTckn = (control: AbstractControl) => {
    if (control.value !== '' && !isTckn(control.value)) {
        return { tckn: true };
    }

    return null;
};

const isTckn = val => {
    const tckn = String(val);
    let result = true;

    if (isNaN(Number(tckn))) { result = false; }

    if (tckn.length !== 11) {
        result = false;
    }

    let total =
        Number(tckn.substr(0, 1)) +
        Number(tckn.substr(2, 1)) +
        Number(tckn.substr(4, 1)) +
        Number(tckn.substr(6, 1)) +
        Number(tckn.substr(8, 1));

    total = total * 7;

    total -= Number(tckn.substr(1, 1));
    total -= Number(tckn.substr(3, 1));
    total -= Number(tckn.substr(5, 1));
    total -= Number(tckn.substr(7, 1));

    if (total >= 0) {
        total %= 10;
    } else {
        while (total < 0) {
            total += 10;
        }
    }

    if (Number(tckn.substr(9, 1)) !== total) { return false; }

    total =
        Number(tckn.substr(0, 1)) +
        Number(tckn.substr(1, 1)) +
        Number(tckn.substr(2, 1)) +
        Number(tckn.substr(3, 1)) +
        Number(tckn.substr(4, 1)) +
        Number(tckn.substr(5, 1)) +
        Number(tckn.substr(6, 1)) +
        Number(tckn.substr(7, 1)) +
        Number(tckn.substr(8, 1)) +
        Number(tckn.substr(9, 1));

    total %= 10;

    if (Number(tckn.substr(10, 1)) !== total) { result = false; }

    return result;
};
