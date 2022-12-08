class DateBuilder {
  private _result: string[] = [];

  private _getDayOfTheMonth: () => number;
  private _getMonth: () => number;
  private _getFullYear: () => number;

  constructor(private _date: Date, isUTC: boolean = true) {
    this._getDayOfTheMonth = isUTC
      ? this._date.getUTCDate.bind(this._date)
      : this._date.getDate.bind(this._date);
    this._getMonth = isUTC
      ? this._date.getUTCMonth.bind(this._date)
      : this._date.getMonth.bind(this._date);
    this._getFullYear = isUTC
      ? this._date.getUTCFullYear.bind(this._date)
      : this._date.getFullYear.bind(this._date);
  }

  slash() {
    this._result.push('/');
    return this;
  }

  dot() {
    this._result.push('.');
    return this;
  }

  hyphen() {
    this._result.push('-');
    return this;
  }

  space() {
    this._result.push(' ');
    return this;
  }

  DD() {
    this._result.push(this._getDayOfTheMonth().toString().padStart(2, '0'));
    return this;
  }

  iMM() {
    this._result.push(this._getMonth().toString().padStart(2, '0'));
    return this;
  }

  MM() {
    const month = this._getMonth() + 1;
    this._result.push(month.toString().padStart(2, '0'));
    return this;
  }

  YYYY() {
    this._result.push(this._getFullYear().toString());
    return this;
  }

  toString() {
    const result = this._result.join('');
    this._result = [];
    return result;
  }
}

export function format(date: Date) {
  return new DateBuilder(date);
}
