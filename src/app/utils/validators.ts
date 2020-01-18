export interface IOptions {
  message: string;
}

export const checked = (value: boolean, options: IOptions): string => {
  if (!value) {
    return options.message || "must be checked";
  } 
  return ""
};

export default {
  checked
};

