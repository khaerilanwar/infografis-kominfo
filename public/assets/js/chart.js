var optionsLahanBukanSawah = {
    series: [{
        name: "Luas Lahan",
        data: [35.39, 500.58, 159.08, 0.22]
    }],

    title: {
        text: 'Lahan Bukan Sawah',
        align: 'center',
        margin: 15,
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
        }
    },

    dataLabels: {
        enabled: true,
        style: {
            fontSize: '14px',
            // fontFamily: 'Poppins, Arial, sans-serif'
        },
    },

    chart: {
        type: 'area',
        height: 350,
        zoom: {
            enabled: false
            }
        },

    stroke: {
        curve: 'smooth'
    },

    grid: {
        show: false,
        position: 'back',
    },

    xaxis: {
        type: 'category',
        categories: ['Ladang', 'Hutan', 'Perumahan', 'Industri'],
        title: 'Jenis Lahan',
        position: 'bottom',
        labels: {
            show: true,
            style: {
                colors: '#000',
                fontSize: '14px'
            }
        },
        axisBorder: {
            show:true,
            borderType: 'solid',
            color: '#000'
        },
        axisTicks: {
            show: true,
            color: '#000'
        },
        
    },

    yaxis: {
        title: {
            text: 'Luas Lahan (ha)',
            style: {
                fontSize: '12px',
                fontWeight: 600
            }
        },
        min:0,
        max: 520,
        tickAmount: 5,
        axisBorder: {
            show: true,
            color: '#000'
        },
        axisTicks: {
            show: true,
            color: '#000'
        },
        labels: {
            style: {
                fontSize: '12px'
            },
            formatter: function (value) {
              // Menghilangkan desimal dan angka nol di belakang koma
                return parseInt(value);
            }
        }
    },

    tooltip: {
        y: {
            formatter: function (value) {
            // Biarkan nilai yang ditampilkan saat menghover tetap seperti data aslinya
            return value;
            }
        }
    },
};

var optionsKemiringanLahan = {
    responsive: [
        {
            breakpoint: 768,
            options: {
                legend: {
                    show: true
                },
                xaxis: {
                    labels: {
                        show: false,
                    }
                },

                yaxis: {
                    show: true,
                    axisTicks: {
                        show: true,
                        color: '#000'
                    },  
                labels: {
                    style: {
                    fontSize: '12px'
                    },
                    formatter: function (value) {
                        // Menghilangkan desimal dan angka nol di belakang koma
                        return value.toLocaleString('id-ID');
                    }
                },
                axisBorder: {
                    show:true,
                    borderType: 'solid',
                    color: '#000'
                    },
                }
            }
        }
    ],

    series: [{
        name: 'Luas Kemiringan Lahan',
        data: [72652.26, 35195.67, 44157.38, 20904.58]
    }],

    chart: {
        type: 'bar',
        height: 300
    },

    colors: ['#1F4172', '#EE9322', '#D80032', '#004225'],

    plotOptions: {
        bar: {
            distributed: true,
        }
    },

    fill: {
        opacity: 1
    },


    dataLabels: {
        enabled: true,
        style: {
            fontSize: '14px'
        },
        formatter: function (value) {
            // Menghilangkan desimal dan angka nol di belakang koma
            return value.toLocaleString('id-ID');
        }
    },

    legend: {
        show: false
    },


    title: {
        text: 'Lahan Kemiringan Lahan (ha)',
        align: 'center',
        margin: 15,
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
        }
    },

    xaxis: {
        categories: ['Datar', 'Bergelombang', 'Curam', 'Sangat Curam'],
        axisBorder: {
            show:true,
            borderType: 'solid',
            color: '#000'
        },
        axisTicks: {
            show: false,
            color: '#000'
        },
        labels: {
            style: {
                fontSize: '15px',
                fontWeight: 550
            }
        }
    },

    grid: {
        show: true,
        borderColor: '#000',
    },

    yaxis: {
        show: true,
        axisTicks: {
            show: true,
            color: '#000'
        },
        labels: {
            style: {
                fontSize: '15px'
            },
            formatter: function (value) {
              // Menghilangkan desimal dan angka nol di belakang koma
                return value.toLocaleString('id-ID');
            }
        },
        axisBorder: {
            show:true,
            borderType: 'solid',
            color: '#000'
        },
    }
}

optionsGender = {
    responsive: [
        {
            breakpoint: 576,
            options: {
                plotOptions: {
                    pie: {
                        offsetX: 0,
                        dataLabels: {
                            offset:-30
                        }
                    }
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    fontSize: '15px',
                    inverseOrder: true,
                    offsetX: 0,
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                }
            }
        }
    ],
    series: [1024612, 994643],
    labels: ['Laki-laki', 'Perempuan'],
    colors: ['#4D7CD8','#E5518D'],
    chart: {
        width: 332,
        type: 'pie'
    },
    plotOptions: {
        pie: {
            offsetX: -40,
            dataLabels: {
                offset:-30
            }
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '20px',
        },
        dropShadow: {
            enabled: false
        },
    },
    legend: {
        show: true,
        position: 'bottom',
        fontSize: '15px',
        inverseOrder: true,
        offsetX: -95,
        itemMargin: {
            horizontal: 10,
            vertical: 0
        }
    }

}

var chartKemiringanLahan = new ApexCharts(document.querySelector('#chart-kemiringan-lahan'), optionsKemiringanLahan);
var chartLahanBukanSawah = new ApexCharts(document.querySelector("#chart-lahan"), optionsLahanBukanSawah);
var chartGender = new ApexCharts(document.querySelector("#chart-gender"), optionsGender);

chartLahanBukanSawah.render();
chartKemiringanLahan.render();
chartGender.render();