import theme from "../../../theme";

export const data = {
  labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
  datasets: [
    {
      label: "This year",
      backgroundColor: theme.palette.primary.main,
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: "Last year",
      backgroundColor: theme.palette.common,
      data: [11, 20, 12, 29, 30, 25, 13]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: "index",
    intersect: false,
    borderWidth: 1,
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.white,
    titleFontColor: theme.palette.text.primary,
    bodyFontColor: theme.palette.text.secondary,
    footerFontColor: theme.palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ]
  }
};
