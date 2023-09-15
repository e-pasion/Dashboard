const monthsLabel=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

export const Data1 = {
    labels:monthsLabel ,
    datasets: [{
      data: [50, 150, 100, 190, 140, 90, 150,160,120,145,195,99],
      fill: true,
      borderColor: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      tension: 0.3
  }]
}

export const Data2 = {
    labels:monthsLabel ,
    datasets: [{
      data: [250, 150, 100, 250, 240, 140, 80,120,250,280,340,300],
      fill: true,
      borderColor: 'red',
      backgroundColor: 'rgba(255, 48, 48, 0.15)',
      tension: 0.3
    }]
}

export const Data3 = {
    labels:[1,2,3,4,5,7,8 ],
    datasets: [{
      data: [0, 500, 600, 610, 1250, 1260, 1270,1900],
      fill: true,
      borderColor: 'green',
      backgroundColor: 'rgba(34, 139, 34, 0.15)',
      tension: 0.3
  }]
}

export const Data4 = {
    labels:monthsLabel ,
    datasets: [{
      data: [80, 100, 85, 95, 125, 85, 100,75,90,90,125,155],
      fill: true,
      borderColor: 'blue',
      backgroundColor: 'rgba(0,191,255, 0.15)',
      tension: 0.3
  }]
}