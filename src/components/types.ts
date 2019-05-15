declare namespace VE {
    export interface IProgressBar extends ICacheable {
        progress:number;
        status: string;

        onStatusChange(status:string);
    }

    export interface ICacheable {
        persist();
        restore();
    }
}