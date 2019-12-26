import { Component, OnInit } from '@angular/core';
import {
  FormElement,
  FormElementTypes
} from 'projects/acshb-common/src/lib/form/models/form.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  chartConfig1 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['Memur', 'Sözleşmeli', 'İşçi', 'Geçici', 'Diğer']
    },
    series: [
      {
        name: 'Personel',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 3589398,
            name: 'Memur',
            itemStyle: { color: '#dadbe0' }
          },
          { value: 2376869, name: 'Geçici' },
          {
            value: 1112443,
            name: 'İşçi',
            itemStyle: { color: '#868e96' }
          },
          {
            value: 2879895,
            name: 'Sözleşmeli',
            itemStyle: { color: '#a72722' }
          },

          { value: 0, name: 'Diğer' }
        ]
      }
    ]
  };
  chartConfig2 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Personel Gid.', 'Cari Tranferler', 'Sermaye Gid.']
    },
    series: [
      {
        name: '2016 Yılı',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {
            value: 413221749,
            name: 'Personel Gid.',
            itemStyle: { color: '#a72722' }
          },
          {
            value: 757731661,
            name: 'Cari Tranferler',
            itemStyle: { color: '#868e96' }
          },
          {
            value: 623852054,
            name: 'Sermaye Gid.',
            itemStyle: { color: '#dadbe0' }
          }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chartConfig3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['2015', '2016']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '1%',
      right: '3%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        color: '#dadbe0',
        name: '2015',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [
          1079903874,
          2076553516,
          1063743817,
          1130616396,
          2128618428,
          1122017910
        ]
      },
      {
        color: '#a72722',
        name: '2016',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [
          1151377582,
          1367006629,
          2526168729,
          1467092014,
          1423845167,
          2675849430
        ]
      }
    ]
  };
  formElements;

  constructor() {
    this.initialize();
  }

  ngOnInit() {
  }

  initialize() {
    this.formElements = [
      new FormElement({
        name: 'name',
        type: FormElementTypes.Text,
        required: true,
        minLength: 1,
        maxLength: 64,
        label: 'İsminiz',
        placeholder: 'İsim',
        col: 4
      }),
      new FormElement({
        name: 'lastname',
        type: FormElementTypes.Text,
        required: true,
        minLength: 1,
        maxLength: 64,
        label: 'Soyadı',
        placeholder: 'Soyadınız',
        col: 4
      }),
      new FormElement({
        name: 'pattern',
        type: FormElementTypes.Text,
        pattern: '[a-zA-Z ]*',
        label: 'Pattern',
        placeholder: 'Yanlızca harfler',
        col: 4
      }),
      new FormElement({
        name: 'age',
        type: FormElementTypes.Number,
        min: 18,
        max: 200,
        required: true,
        label: 'Yaş',
        placeholder: 'Yaşınız',
        col: 6
      }),
      new FormElement({
        name: 'tckn',
        type: FormElementTypes.Tckn,
        required: true,
        placeholder: 'T.C. Kimlik Numaranız',
        label: 'T.C. Kimlik Numaranız',
        col: 6
      }),
      new FormElement({
        name: 'choice',
        type: FormElementTypes.Select,
        data: [
          { id: 0, label: 'Seçenek 1' },
          { id: 1, label: 'Seçenek 2' }
        ],
        required: true,
        label: 'Seçiniz',
        placeholder: 'Seçiniz'
      }),
      new FormElement({
        name: 'multichoice',
        type: FormElementTypes.MultiSelect,
        data: [
          { id: 0, label: 'Seçenek 1' },
          { id: 1, label: 'Seçenek 2' },
          { id: 2, label: 'Seçenek 3' }
        ],
        required: true,
        label: 'Çoklu Seçiniz',
        placeholder: 'Çoklu Seçiniz'
      }),
      new FormElement({
        name: 'date',
        type: FormElementTypes.Date,
        label: 'Doğum Günü'
      })
    ];
  }
}
