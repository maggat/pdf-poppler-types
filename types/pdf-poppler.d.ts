declare module 'pdf-poppler' {
    interface ConvertOptions {
        format: string;
        out_dir?: string;
        out_prefix?: string;
        page?: number | null;
    }

    export function convert(filePath: string, options: ConvertOptions): Promise<void>;
}
