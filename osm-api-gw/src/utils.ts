import { readFileSync } from "fs";
import { join } from "path";


export const loadQuery = (name: string) => {
  return readFileSync(join(__dirname, `../queries/${name}.graphql`), 'utf-8');
}