interface IValidator {
	isValidString(s: string,regex: RegExp, minValue: number,maxValue?:number): boolean;
}

export { IValidator };
