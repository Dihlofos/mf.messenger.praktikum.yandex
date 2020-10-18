export type CallbackFn = (...args: any[])=>void;
export type SimpleObject = {[key:string]: unknown};

export type ButtonProps = {
    text: string;
    type: 'submit' | 'button';
    class: string;
}

export type Field = {
    name: string;
    type: string;
    label: string;
    error: string;
    value: string;

}

export type ErrorContentProps = {
    errorText: string,
    errorDescription: string,
    backText: string,
    backLink: string,
}

export type LoginFormProps = {
    title: string;
    fields: Field[];
    button: string;
    linkText: string;
    linkHref: string;
}

declare global {
    interface Window {
        Handlebars:any;
    }
}