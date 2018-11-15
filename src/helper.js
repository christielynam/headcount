class DistrictRepository {
  constructor(data) {
    this.districts = this.formatData(data)
  }

  formatData = (kinderData) => {
    return kinderData.reduce((acc, obj) => {
      if(!acc[obj.Location]) {
        acc[obj.Location] = {
          location: obj.Location.toUpperCase(),
          stats: {},
          active: false
        }
      }
      acc[obj.Location].stats[obj.TimeFrame] = this.roundToThous(obj.Data)
      return acc
    }, {})
  }

  roundToThous = (num) => Math.round(1000 * num) / 1000 || 0

  findByName = (name) => {
    if(name) {
      const found = Object.keys(this.districts).find(location => location.toUpperCase() === name.toUpperCase())
      return this.districts[found]
    }
  }

  findAllMatches = (location) => {
    const fullDistrictArray = Object.values(this.districts)
    return location ? fullDistrictArray.filter(district => district.location.includes(location.toUpperCase())) : fullDistrictArray
  }

  findAverage = (districtName) => {
    const count = Object.values(this.districts[districtName].stats).length
    const sum = Object.values(this.districts[districtName].stats).reduce((acc, num) => acc + num)
    return this.roundToThous(sum / count)
  }

  compareDistrictAverages = (a, b) => {
    const district1 = this.findByName(a)
    const district2 = this.findByName(b)
    const compared = this.findAverage(district1.location) / this.findAverage(district2.location)
    return {
      [district1.location]: this.findAverage(district1.location),
      [district2.location]: this.findAverage(district2.location),
      compared: this.roundToThous(compared)
    }
  }

}
  export default DistrictRepository