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

}
  export default DistrictRepository