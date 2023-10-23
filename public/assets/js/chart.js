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
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '8px'
                    },
                    formatter: function (value) {
                        // Menghilangkan desimal dan angka nol di belakang koma
                        return value.toLocaleString('id-ID');
                    }
                },
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

optionsASN = {
    series: [
        {
            name: 'Laki-laki',
            data: [4007, 1246]
        },
        {
            name: 'Perempuan',
            data: [4079, 2256]
        }
    ],

    chart: {
        type: 'bar',
        // height: 300
    },

    fill: {
        opacity: 1
    },

    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 5,
            borderRadiusApplication: 'end',
            barHeight: '80%',
            barWidth: '40%',
            dataLabels: {
                position: 'top'
            }
        }
    },

    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        },
        formatter: function (value) {
            // Menghilangkan desimal dan angka nol di belakang koma
            return value.toLocaleString('id-ID');
        }
    },

    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },

    tooltip: {
        shared: true,
        intersect: false
    },

    grid: {
        borderColor: '#000'
    },

    legend: {
        fontSize: '14px',
        itemMargin: {
            horizontal: 15
        },
        markers: {
            radius: 100
        }
    },

    // title: {
    //     text: 'TOTAL PNS dan PPPK',
    //     align: 'center',
    //     style: {
    //         fontSize: '20px',
    //         fontWeight: 600
    //     }
    // },

    dataLabels: {
        offsetY: 20,
        style: {
            fontSize: '16px'
        },
        formatter: function (value) {
            // Menghilangkan desimal dan angka nol di belakang koma
            return value.toLocaleString('id-ID');
        }
    },

    xaxis: {
        categories: ['PNS dan CPNS', 'PPPK'],
        axisBorder: {
            color: '#000'
        },
        // axisTicks: {
        //     color: '#000'
        // },
        labels: {
            style: {
                fontSize: '16px',
                fontWeight: 550
            }
        }
    },

    yaxis: {
        axisTicks: {
            show: true,
            color: '#000'
        },
        axisBorder: {
            show: true,
            color: '#000'
        },
        labels: {
            style: {
                fontSize: '14px'
            },
            formatter: function (value) {
                // Menghilangkan desimal dan angka nol di belakang koma
                return value.toLocaleString('id-ID');
            }
        }
    }
}

optionsPejabatStruktural = {
    series: [36, 153, 214],
    labels: ['Eselon II', 'Eselon III', 'Eselon IV'],
    colors: ['#3876BF','#F99417', '#BFCCB5'],
    chart: {
        // width: 320,
        height: 330,
        type: 'pie'
    },
    plotOptions: {
        pie: {
            // offsetX: -40,
            dataLabels: {
                offset:-30
            }
        }
    },
    title: {
        text: 'Pejabat Struktural',
        // align: 'center',
        offsetX: 40,
        style: {
            fontSize: '25px',
            fontWeight: 'bold'
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '18px',
        },
        dropShadow: {
            enabled: false
        },
        formatter: function (val, opts) {
            return opts.w.globals.series[opts.seriesIndex];
        },
    },
    states: {
        hover: {
            filter: {
                type: 'darken',
                value: 0.8
            },
        }
    },
    legend: {
        show: true,
        position: 'bottom',
        fontSize: '13px',
        // inverseOrder: true,
        // offsetX: -95,
        itemMargin: {
            horizontal: 10,
            vertical: 0
        }
    }

}

optionsPejabatFungsional = {
    series: [5926, 5259],
    labels: ['Fungsional Umum', 'Fungsional Tertentu'],
    colors: ['#E9B824','#D83F31'],
    chart: {
        // width: 320,
        height: 330,
        type: 'pie'
    },
    plotOptions: {
        pie: {
            // offsetX: -40,
            dataLabels: {
                offset:-30
            }
        }
    },
    title: {
        text: 'Pejabat Fungsional',
        // align: 'center',
        offsetX: 25,
        style: {
            fontSize: '25px',
            fontWeight: 'bold'
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '18px',
        },
        dropShadow: {
            enabled: false
        },
        formatter: function (val, opts) {
            return opts.w.globals.series[opts.seriesIndex];
        },
    },
    states: {
        hover: {
            filter: {
                type: 'darken',
                value: 0.8
            },
        }
    },
    legend: {
        show: true,
        position: 'bottom',
        fontSize: '13px',
        inverseOrder: true,
        // offsetX: -25,
        // floating: true,
        // itemMargin: {
        //     horizontal: 5,
        //     vertical: 0
        // }
    }

}

optionsAP = {
    responsive: [
        {
            breakpoint: 768,
            options: {
                plotOptions: {
                    bar: {
                        dataLabels: {
                            // position: 'center'
                        }
                    }
                },
                xaxis: {
                    axisBorder: {
                        show: true,
                        color: '#000',
                        height: 2
                    },
                    labels: {
                        offsetY: -3,
                        style: {
                            fontSize: '14px',
                            fontWeight: 550,
                            colors: ['#000', '#000', '#000', '#000']
                        }
                    }
                },
                dataLabels: {
                    offsetY: -8,
                    enabled: true,
                    style: {
                        fontSize: '5px',
                        colors: ['#000']
                    },
                    formatter: function (value) {
                        // Menghilangkan desimal dan angka nol di belakang koma
                        return value.toLocaleString('id-ID');
                    }
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    fontSize: '12px',
                    // fontWeight: 5,
                    itemMargin: {
                        horizontal: 20,
                        vertical: 0
                    },
                    markers: {
                        width: 14
                    }
                },
            }
        }
    ],

    series: [
        {
            name: 'APK',
            data: [71.62, 19.11, 62.45, 30.27]
        },
        {
            name: 'APM',
            data: [67.57, 17.68, 51.34, 20.22]
        },
        {
            name: 'APS',
            data: [0.18, 0.78, 0.51]
        }
    ],

    colors: ['#0802A3', '#F99417', '#B4B4B3'],

    chart: {
        type: 'bar'
    },

    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '80%',
            endingShape: 'rounded',
            dataLabels: {
                position: 'top'
            }
        }
    },

    fill: {
        opacity: 1,
        // colors: ['#0802A3', '#F99417', '#F1EFEF']
    },

    stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
    },

    dataLabels: {
        offsetY: -20,
        style: {
            fontSize: '13px',
            colors: ['#000']
        },
        formatter: function (value) {
            // Menghilangkan desimal dan angka nol di belakang koma
            return value.toLocaleString('id-ID');
        }
    },

    grid: {
        // borderColor: '#000'
    },

    xaxis: {
        categories: ['SD', 'MI', 'SMP', 'MTs'],
        axisBorder: {
            show: true,
            color: '#000',
            height: 2
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                fontSize: '15px',
                fontWeight: 550,
                colors: ['#000', '#000', '#000', '#000']
            }
        }
    },

    yaxis: {
        show: false,
        axisBorder: {
            show: true,
            color: '#000',
        },
        axisTicks: {
            show: false
        },
    },

    legend: {
        show: true,
        position: 'top',
        fontSize: '14px',
        // fontWeight: 5,
        itemMargin: {
            horizontal: 20,
            vertical: 0
        },
        markers: {
            width: 14
        }
    },
}

var chartKemiringanLahan = new ApexCharts(document.querySelector('#chart-kemiringan-lahan'), optionsKemiringanLahan);
var chartLahanBukanSawah = new ApexCharts(document.querySelector("#chart-lahan"), optionsLahanBukanSawah);
var chartGender = new ApexCharts(document.querySelector("#chart-gender"), optionsGender);
var chartASN = new ApexCharts(document.querySelector('#chart-asn'), optionsASN);
var chartPejabatStruktural = new ApexCharts(document.querySelector('#chart-pejabat-struktural'), optionsPejabatStruktural);
var chartPejabatFungsional = new ApexCharts(document.querySelector('#chart-pejabat-fungsional'), optionsPejabatFungsional);
var chartAP = new ApexCharts(document.querySelector('#chart-ap'), optionsAP);

chartLahanBukanSawah.render();
chartKemiringanLahan.render();
chartGender.render();
chartASN.render();
chartPejabatStruktural.render();
chartPejabatFungsional.render();
chartAP.render();