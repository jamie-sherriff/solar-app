import moment from 'moment-timezone';

export function forecastChartData(apiResponseData) {
  let graphValues = [];
  let graphLabels = [];
  const graphData = apiResponseData.data;
  for (let day in graphData) {
    const valuesInDay = graphData[day];
    for (let value in valuesInDay) {
      // TODO handle past values
      // const labelValue = moment.tz(day + ':' + value, 'YYYY-MM-DD[:]HH[-]mm', 'UTC').local().toNow(true);
      const parsedDate = moment.tz(day + ':' + value, 'YYYY-MM-DD:HH-mm', 'UTC').local();
      const hourTime = parsedDate.diff(moment(), 'hours');
      if (parseInt(hourTime) > 0) {
        // const labelValue = ` In ${hourTime} Hours`;
        const dayLabel = parsedDate.format('ddd h A');
        graphLabels.push(dayLabel);
        graphValues.push(valuesInDay[value]);
      }
    }
  }
  let dataSet = {label: 'Kp Value', backgroundColor: '#2fb4f8', data: graphValues};
  return {labels: graphLabels, datasets: [dataSet]};
}

export function allLatestKpData(apiResponseData) {
  let graphValues = [];
  let graphLabels = [];
  const kpData = apiResponseData.data;
  const valuesToSkip = 5;
  for (let index = 0; index < kpData.length; index += valuesToSkip) {
    let kpValue = kpData[index];
    const hourTime = moment().diff(moment.tz(kpValue[0], 'YYYY-MM-DD HH:mm:SS', 'UTC').local(), 'minutes');
    const labelValue = `${hourTime} Mins Ago`;
    graphLabels.push(labelValue);
    graphValues.push(kpValue[1]);
  }
  let dataSet = {label: 'Kp Value', backgroundColor: '#2fb4f8', data: graphValues};
  return {labels: graphLabels, datasets: [dataSet]};
}

export function shortTermForecastData(apiResponseData) {
  let graphValues = [];
  let graphLabels = [];
  let extendedValues = [];
  let extendedLabels = [];
  const dateFormat = apiResponseData.dataDateFormat;
  const forecastData = apiResponseData.data;
  for (let dayAndTime in forecastData) {
    const valuesAtTime = forecastData[dayAndTime];
    const oneHourTime = moment.tz(valuesAtTime.predicted1HourTime, dateFormat, 'UTC').local();
    if (oneHourTime.isSameOrAfter()) {
      const oneHourValue = valuesAtTime.predicted1HourKpValue;
      const minuteTime = oneHourTime.diff(moment(), 'minutes');
      const labelValue = `In ${minuteTime} Mins`;
      graphValues.push(oneHourValue);
      graphLabels.push(labelValue);
      const fourHourTime = moment.tz(valuesAtTime.predicted4HourTime, dateFormat, 'UTC').local();
      const fourHourValue = valuesAtTime.predicted1HourKpValue;
      const fourHourMinuteTime = fourHourTime.diff(moment(), 'minutes');
      const fourHourlabelValue = `In ${fourHourMinuteTime} Mins`;
      extendedValues.push(fourHourValue);
      extendedLabels.push(fourHourlabelValue);
    }
  }
  graphValues = graphValues.concat(extendedValues);
  graphLabels = graphLabels.concat(extendedLabels);
  let dataSet = {label: 'Kp Value', backgroundColor: '#2fb4f8', data: graphValues};
  return {labels: graphLabels, datasets: [dataSet]};
}

export function monthForecastData(apiResponseData) {
  let graphValues = [];
  let graphLabels = [];
  const dateFormat = apiResponseData.dataDateFormat;
  const forecastData = apiResponseData.data;
  for (let day in forecastData) {
    const parsedDay = moment.tz(day, dateFormat, 'UTC').local();
    if (parsedDay.isSameOrAfter(moment(), 'day')) {
      const valuesAtDay = forecastData[day];
      const dayLabel = parsedDay.format('ddd DD');
      graphValues.push(valuesAtDay.LargestKpIndex);
      graphLabels.push(dayLabel);
    }
  }
  let dataSet = {label: 'Kp Value', backgroundColor: '#2fb4f8', data: graphValues};
  return {labels: graphLabels, datasets: [dataSet]};
}
