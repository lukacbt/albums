import moment from 'moment'

export const useMoment = (date) => {
    const year = new Date(moment(date).format("YYYY-MM-DD"))

    return year.getFullYear()
}