export const buildClassName = (baseStyles: string, ...args: (string | undefined)[]): string => {
  // eslint-disable-next-line
  // @ts-ignore
  return `${baseStyles} ${args.filter(Boolean).join(' ')}`;
};
