declare module "highlighting" {

    export interface I {}

    export class E0 extends Error {
        OK: string
    }
    export class E1 extends Error implements I {}
    export class E2 extends Error {
        NotOK: string
    }
}
