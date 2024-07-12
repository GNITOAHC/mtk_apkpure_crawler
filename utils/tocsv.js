import fs from 'fs'

export function writeToCsv(obj, filename) {
  for (let i = 0; i < obj.length; ++i) {
    const o = obj[i]
    // prettier-ignore
    const row = o.name + ', ' + o.location + ', ' + o.isAPK + ', ' + o.category + '\n'
    fs.appendFileSync(filename, row, 'utf8')
  }
  return
}

export function initCsv(filename) {
  fs.writeFileSync(
    filename,
    'name, location, isapk, category\n',
    'utf8',
    (err) => {
      if (err) throw err
    }
  )
  return
}