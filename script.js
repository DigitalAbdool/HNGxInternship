const day = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const time = document.querySelector('[data-testid="currentUTCTime"]')


const newDay = new Date()
const currentDayOfTheWeek = newDay.getDay()
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const UTCTime = new Date()
const UTCHours = UTCTime.getUTCHours()
const UTCMinutes = UTCTime.getUTCMinutes()
const UTCSeconds = UTCTime.getUTCSeconds()
const AMPM = UTCTime.getUTCHours() < 12 ? 'AM' : 'PM'


day.innerText = `${weekDay[currentDayOfTheWeek]}`
time.innerText = `${UTCHours}:${UTCMinutes}:${UTCSeconds}${AMPM} UTC`