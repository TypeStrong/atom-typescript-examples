interface SomethingSplit {
    a: number;
    b: any;
}

interface SomethingSplit {
    c;
}

class BigClass implements SomethingSplit{
    hasAMember: string
}