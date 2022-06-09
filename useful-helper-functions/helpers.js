/**
 * Helper function to get flag from array
 */
export const array2flag = arr => arr.reduce((acc, str) => ({ ...acc, [str]: true }, {}));

/**
 * Helper function to get CSV from JSON
 */
export const json2csv = (arr, columns, delimiter = ',') => 
    [
        columns.join(delimiter),
        ...arr.map(obj =>
            columns.reduce((acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`, '')),
    ].join('\n');

/**
 * Helper function to get CSV from array
 */
export const array2csv = (arr, delimiter = ',') =>
    arr.map(v =>
            v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter)
        )
        .join('\n');

/**
 * Helper function to get array from CSV
 */
export const csv2array = (data, delimiter = ',', omitFirstRow = false) =>
    data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(v => v.split(delimiter));