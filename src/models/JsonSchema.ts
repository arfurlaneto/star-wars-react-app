export interface JsonSchema {
  description: string,
  title: string,
  required: string[],
  $schema: string,
  type: string,
  properties: {
    [key: string]: {
      type: string;
      description: string;
      format?: string;
    }
  };
}
