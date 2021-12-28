// ensures that a given string has no whitespaces
export var REG_NO_WHITESPACE: RegExp = /^\S*$/;
// ensures that a given string contains at least one numeric character
export const REG_INC_NUMERIC: RegExp = /(?=.*[0-9])/;
// ensures that a given file is a jpg file
export const REG_FILE_JPG: RegExp = /[^\\s]+(.*?)\\.(jpg)$/;
export const REPORT_MIN_CHARS: number = 15;
export const NICK_MAX_CHARS: number = 15;
export const PASS_MIN_CHARS: number = 6;
