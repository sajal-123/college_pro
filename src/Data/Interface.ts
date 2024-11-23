export interface Sublink {
    label: string;
    link: string;
    isSublinkns: boolean;
}

export interface Link {
    label: string;
    isSublinkns: boolean;
    sublinks?: Sublink[];
    link?: string
}

export interface TableData {
        title: string;
        items: TableItem[];
}
export interface TableItem {
    serialNo: number;
    documentName: string;
    uploadStatus: string;
}