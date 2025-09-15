const formatterOptions = {
  timeZone: 'US/Eastern',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const timeFormatter = new Intl.DateTimeFormat("en-US", formatterOptions);

const updateTime = () => {
  const timeElement = document.querySelector('#time');
  if (timeElement) {
    timeElement.innerText = timeFormatter.format(new Date());
  } else {
    console.warn('Element with id "time" not found.');
  }
};

setInterval(updateTime, 1000)

