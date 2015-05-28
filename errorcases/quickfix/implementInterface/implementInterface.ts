interface SomethingSplit {
    a: number;
    b: any;
}

interface SomethingSplit {
    c;
}

class BigClass implements SomethingSplit {
    hasAMember: string

    hasAMethod() {
        console.log('stuff should go *after* this as implementing interface is fairly *noisy* process.');
    }
}