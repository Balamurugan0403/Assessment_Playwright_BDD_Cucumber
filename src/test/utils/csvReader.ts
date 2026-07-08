import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";

export interface registerData {
    gender: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export function readRegisterData(): registerData[] {
    const filePath = path.resolve(__dirname, "../test-data/registerData.csv");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const records: registerData[] = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });
    return records;
}