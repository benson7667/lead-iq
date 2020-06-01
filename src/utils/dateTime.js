import moment from 'moment'
import { DAY_MONTHNAME_YEAR } from '../constants/dateTimeFormat'

export const formatDateAgo = (date) => {
  const now = moment()
  const momentDate = moment(date)
  // if now date and moment date more than 1month, display the date
  const diffDays = now.diff(momentDate, 'days')
  if (diffDays > 30) {
    return momentDate.format(DAY_MONTHNAME_YEAR)
  }
  // display days ago
  return momentDate.fromNow()
}
