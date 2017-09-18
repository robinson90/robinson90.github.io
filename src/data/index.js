import fesites from './fesites.json'
import fepicture from './fepicture.json'
import feicon from './feicon.json'
import fefonts from './fefonts.json'
import fetools from './fetools.json'
import felessons from './felessons.json'
let sites = [].concat(fesites).concat(fepicture).concat(feicon).concat(fefonts).concat(fetools).concat(felessons)
// 导出网址记录以及分类
export default {
  sites
}
