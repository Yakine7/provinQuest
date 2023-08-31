'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const modal = document.querySelector('.modal');

const inputWilaya = document.querySelector('.province__input--wilaya');

const provinceInput = document.querySelector('.province__input');

const wilaysList = document.querySelector('.wilayas__list');
const score = document.querySelector('.province__score');
const startBtn = document.querySelector('.button__start');

const replayBtn = document.querySelector('.modal__button__replay');
const closeModalBtn = document.querySelector('.modal__button__close');

const capitalizeWords = function (str) {
  return str.replace(/(^|\s|')([a-z\u00E0-\u00FC])/g, function (match) {
    return match.toUpperCase();
  });
};

// const provinces = [
//   ['adrar', 'أدرار'],
//   ['chlef', 'Chlaf', 'الشلف', 'شلف'],
//   ['laghwat', 'laghouat', 'لقواط', 'لغواط', 'الأغواط', 'أغواط'],
//   ['oum el bouaki', 'bouaki', 'Oum El Bouaghi', 'أم البواقي', 'البواقي'],
//   ['betna', 'batna', 'باتنة'],
//   ['bejaia', 'béjaïa', 'بجاية'],
//   ['biskra', 'بسكرة'],
//   ['bachar', 'bechar', 'béchar', 'بشار'],
//   ['blida', 'البليدة', 'بليدة'],
//   ['bouira', 'البويرة', 'بويرة'],
//   ['tamanrasat', 'tamanrasset', 'tamanrassat', 'tamanrasset', 'تمنراست'],
//   ['tebessa', 'tbessa', 'tébessa', 'تبسة'],
//   ['telemcen', 'tilimsan', 'tlamcen', 'tlemcen', 'تلمسان'],
//   ['tiaret', 'تيارت'],
//   ['thizi wezzu', 'tizi wezou', 'tizi wezo', 'tizi Ouzou', 'تيزي وزو'],
//   ['alger', 'الجزائر', 'جزائر', 'العاصمة', 'عاصمة'],
//   ['djalfa', 'jalfa', 'jelfa', 'djelfa', 'الجلفة'],
//   ['jijal', 'jijel', 'جيجل'],
//   ['setif', 'stif', 'sétif', 'سطيف'],
//   ['saida', 'saïda', 'سعيدة'],
//   ['skikda', 'سكيكدة'],
//   [
//     'sba',
//     'sidi bel abbas',
//     'sidi bel abbes',
//     'sidi bel abbès',
//     'سيدي بلعباس',
//     'بلعباس',
//   ],
//   ['anneba', 'annaba', 'عنابة'],
//   ['galma', 'gualma', 'guelma', 'قالمة'],
//   ['Constantine', 'قسنطينة'],
//   ['mdia', 'mdea', 'medea', 'médéa', 'المدية', 'مدية'],
//   ['mosta', 'mostaganam', 'mostaganam', 'مستغانم'],
//   ['Msila', "M'Sila", 'المسيلة', 'مسيلة'],
//   ['Mascara', 'معسكر'],
//   ['ouaregla', 'ouergla', 'ouaregla', 'ouargla', 'ورقلة'],
//   ['wahran', 'wahren', 'oran', 'وهران'],
//   ['bayad', 'bayadh', 'el bayedh', 'el bayadh', 'البيض', 'بيض'],
//   ['ilizi', 'illizi', 'إليزي'],
//   [
//     'bordj',
//     'bourdj',
//     'bourdj bou arreridj',
//     'bordj bou arrerij',
//     'bordj bou arreridj',
//     'bordj bou arréridj',
//     'برج بوعريريج',
//     'برج',
//   ],
//   ['boumerdes', 'boumerdas', 'boumerdès', 'بومرداس'],
//   ['tarf', 'taref', 'el tarf', 'الطارف', 'طارف'],
//   ['tindouf', 'تندوف'],
//   ['tissemsilet', 'tissemsilt', 'تيسمسيلت'],
//   ['loued', 'oued', 'el oued', 'الوادي', 'وادي', 'واد'],
//   ['khanchela', 'khanchla', 'khenchla', 'khenchela', 'خنشلة'],
//   ['souk ahras', 'سوق أهراس'],
//   ['tipaza', 'تيبازة'],
//   ['Mila', 'ميلة'],
//   ['ain dafla', 'ain defla', 'aïn defla', 'عين الدفلى'],
//   ['naama', 'Naâma', 'النعامة', 'نعامة'],
//   ['tmouchent', 'ain temouchent', 'aïn témouchent', 'عين تموشنت', 'تموشنت'],
//   ['ghardaya', 'gherdaia', 'ghardaia', 'ghardaïa', 'غرداية'],
//   ['ghelizane', 'relizene', 'relizane', 'غليزان'],
//   ['timimoun', 'تيميمون'],
//   ['bordj badji', 'bordj badji bokhtar', 'برج باجي مختار', 'برج باجي'],
//   ['djellal', 'ouled djellal', 'أولاد جلال', 'ولاد جلال'],
//   ['Beni Abbes', 'Béni Abbès', 'بني عباس'],
//   ['in salah', 'عين صالح'],
//   ['in guezzam', 'عين قزام', "عين ڨزام'"],
//   ['touggourt', 'تقرت', 'تڨرت'],
//   ['djanet', 'جانت'],
//   ['mghayer', 'el mghair', 'el mghayer', "el m'ghair", 'المغير', 'مغير'],
//   ['meniaa', 'el meniaa', 'المنيعة', 'منيعة'],
// ];

const provinces = [
  { geoInd: 0, names: ['adrar', 'أدرار'] },
  { geoInd: 27, names: ['chlef', 'chlaf', 'الشلف', 'شلف'] },
  {
    geoInd: 23,
    names: ['laghouat', 'laghwat', 'لقواط', 'لغواط', 'الأغواط', 'أغواط'],
  },
  {
    geoInd: 49,
    names: [
      'oum el bouaghi',
      'oum el bouaki',
      'bouaki',
      'أم البواقي',
      'البواقي',
    ],
  },
  { geoInd: 42, names: ['batna', 'betna', 'باتنة'] },
  { geoInd: 38, names: ['béjaïa', 'bejaia', 'بجاية'] },
  { geoInd: 43, names: ['biskra', 'بسكرة'] },
  { geoInd: 11, names: ['béchar', 'bachar', 'bechar', 'بشار'] },
  { geoInd: 33, names: ['blida', 'البليدة', 'بليدة'] },
  { geoInd: 35, names: ['bouira', 'البويرة', 'بويرة'] },
  {
    geoInd: 4,
    names: [
      'tamanrasset',
      'tamanrasat',
      'tamanrasset',
      'tamanrassat',
      'تمنراست',
    ],
  },
  { geoInd: 48, names: ['tébessa', 'tebessa', 'tbessa', 'تبسة'] },
  {
    geoInd: 14,
    names: ['tlemcen', 'telemcen', 'tilimsan', 'tlamcen', 'تلمسان'],
  },
  { geoInd: 20, names: ['tiaret', 'تيارت'] },
  {
    geoInd: 34,
    names: ['tizi ouzou', 'thizi wezzu', 'tizi wezou', 'tizi wezo', 'تيزي وزو'],
  },
  { geoInd: 32, names: ['alger', 'الجزائر', 'جزائر', 'العاصمة', 'عاصمة'] },
  {
    geoInd: 37,
    names: ['djelfa', 'djalfa', 'jalfa', 'jelfa', 'الجلفة', 'جلفة'],
  },
  { geoInd: 41, names: ['jijel', 'jijal', 'جيجل'] },
  { geoInd: 39, names: ['sétif', 'setif', 'stif', 'سطيف'] },
  { geoInd: 17, names: ['saïda', 'saida', 'سعيدة'] },
  { geoInd: 54, names: ['skikda', 'سكيكدة'] },
  {
    geoInd: 13,
    names: [
      'sidi bel abbès',
      'sba',
      'sidi bel abbas',
      'sidi bel abbes',
      'سيدي بلعباس',
      'بلعباس',
    ],
  },
  { geoInd: 53, names: ['annaba', 'anneba', 'عنابة'] },
  { geoInd: 51, names: ['guelma', 'galma', 'gualma', 'قالمة'] },
  { geoInd: 56, names: ['constantine', 'قسنطينة'] },
  { geoInd: 31, names: ['médéa', 'mdia', 'mdea', 'medea', 'المدية', 'مدية'] },
  { geoInd: 22, names: ['mostaganam', 'mosta', 'mostaganam', 'مستغانم'] },
  { geoInd: 36, names: ["m'sila", 'msila', 'المسيلة', 'مسيلة'] },
  { geoInd: 18, names: ['mascara', 'معسكر'] },
  {
    geoInd: 7,
    names: ['ouargla', 'ouaregla', 'ouergla', 'ouaregla', 'ورقلة'],
  },
  { geoInd: 16, names: ['oran', 'wahran', 'wahren', 'وهران'] },
  {
    geoInd: 19,
    names: ['el bayadh', 'bayad', 'bayadh', 'el bayedh', 'البيض', 'بيض'],
  },
  { geoInd: 6, names: ['illizi', 'ilizi', 'إليزي'] },
  {
    geoInd: 40,
    names: [
      'bordj bou arréridj',
      'bourdj bou arreridj',
      'bordj bou arrerij',
      'bordj bou arreridj',
      'برج بوعريريج',
      'برج',
    ],
  },
  { geoInd: 57, names: ['boumerdès', 'boumerdes', 'boumerdas', 'بومرداس'] },
  { geoInd: 52, names: ['el tarf', 'tarf', 'taref', 'الطارف', 'طارف'] },
  { geoInd: 10, names: ['tindouf', 'تندوف'] },
  { geoInd: 25, names: ['tissemsilt', 'tissemsilet', 'تيسمسيلت'] },
  { geoInd: 46, names: ['el oued', 'loued', 'oued', 'الوادي', 'وادي', 'واد'] },
  {
    geoInd: 47,
    names: ['khenchela', 'khanchela', 'khanchla', 'khenchla', 'خنشلة'],
  },
  { geoInd: 50, names: ['souk ahras', 'سوق أهراس'] },
  { geoInd: 30, names: ['tipaza', 'تيبازة'] },
  { geoInd: 55, names: ['mila', 'ميلة'] },
  { geoInd: 28, names: ['aïn defla', 'ain dafla', 'ain defla', 'عين الدفلى'] },
  { geoInd: 12, names: ['naâma', 'naama', 'النعامة', 'نعامة'] },
  {
    geoInd: 15,
    names: [
      'aïn témouchent',
      'tmouchent',
      'ain temouchent',
      'عين تموشنت',
      'تموشنت',
    ],
  },
  {
    geoInd: 26,
    names: ['ghardaïa', 'ghardaya', 'gherdaia', 'ghardaia', 'غرداية'],
  },
  { geoInd: 21, names: ['relizane', 'ghelizane', 'relizene', 'غليزان'] },
  { geoInd: 1, names: ['timimoun', 'تيميمون'] },
  {
    geoInd: 2,
    names: [
      'bordj badji mokhtar',
      'bourdj badji mokhtar',
      'bordj badji',
      'bourdj badji mokhtar',
      'برج باجي مختار',
      'برج باجي',
    ],
  },
  {
    geoInd: 29,
    names: ['ouled djellal', 'djellal', 'أولاد جلال', 'ولاد جلال'],
  },
  { geoInd: 9, names: ['béni abbès', 'beni abbes', 'بني عباس'] },
  { geoInd: 8, names: ['in salah', 'عين صالح'] },
  { geoInd: 3, names: ['in guezzam', 'عين قزام', "عين ڨزام'"] },
  { geoInd: 45, names: ['touggourt', 'تقرت', 'تڨرت'] },
  { geoInd: 5, names: ['djanet', 'جانت'] },
  {
    geoInd: 44,
    names: [
      "el m'ghair",
      'mghayer',
      'el mghair',
      'el mghayer',
      'المغير',
      'مغير',
    ],
  },
  { geoInd: 24, names: ['el meniaa', 'meniaa', 'المنيعة', 'منيعة'] },
];

class Quiz {
  #remainingProvinces;
  #counter;
  #geoJsonLayer;
  #timerInterval;
  constructor(geoJsonLayer) {
    this.#counter = 0;
    this.#remainingProvinces = JSON.parse(JSON.stringify(provinces));
    this.#remainingProvinces = this.#remainingProvinces.map(el => ({
      ...el,
      found: false,
    }));
    this.#geoJsonLayer = geoJsonLayer;

    closeModalBtn.addEventListener('click', this._hideScoreModal);

    // const targetTime = new Date().getTime() + 5 * 60 * 1000;
    const targetTime = new Date().getTime() + 5 * 1000 * 60 + 1000;
    this.#timerInterval = setInterval(() => {
      this._countdownTimer(targetTime);
    }, 1000);

    replayBtn.addEventListener('click', () => location.reload());
  }

  _styleLayer(ind, style) {
    this.#geoJsonLayer
      .getLayers()
      [provinces[ind].geoInd].setStyle(style)
      .bringToFront();
  }

  _checkProvince() {
    let ind = this.#remainingProvinces.findIndex(el => {
      return el.names?.includes(inputWilaya.value?.toLowerCase());
    });

    // Check if province already guessed
    if (this.#remainingProvinces[ind]?.found) {
      inputWilaya.value = '';
      return;
    }

    if (ind > -1) {
      const style = {
        color: '#19a629',
        fillColor: '#19a629',
        weight: 1,
      };
      this._styleLayer(ind, style);
      inputWilaya.value = '';

      // Reveal province name in wilayas list
      this._revealProvinceName(ind, true);

      score.textContent = `${++this.#counter} / 58 trouvées`;

      this.#remainingProvinces[ind].found = true;

      if (this.#counter === 58) {
        this._endGame();
      }
    }
  }

  _revealRemainingProvinces() {
    this.#remainingProvinces.forEach((el, i) => {
      if (!el.found) {
        this._revealProvinceName(i, false);

        const style = {
          color: '#fa493c',
          fillColor: '#fa493c',
          weight: 1,
        };
        this._styleLayer(i, style);
        el.found = true;
      }
    });
  }

  _revealProvinceName(ind, isNotFound) {
    wilaysList.children[ind].insertAdjacentHTML(
      'beforeend',
      `<span class="province__name ${
        isNotFound ? 'isFound' : 'isNotFound'
      }">${capitalizeWords(provinces[ind].names[0])}</span>`
    );
  }

  _revealProvincesOnMap() {
    this.#geoJsonLayer.eachLayer(layer => {
      this._onEachFeature(layer.feature, layer);
    });
  }

  _onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  }

  _countdownTimer(targetTime) {
    // Get the current time in milliseconds.
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining <= 0) {
      this._endGame();
    } else {
      const minutes = Math.floor(timeRemaining / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
      document.getElementById('timer').innerHTML = formattedTime;
    }
  }

  _endGame() {
    clearInterval(this.#timerInterval);
    this._revealRemainingProvinces();
    this._showScoreModal();
    this._revealProvincesOnMap();
    inputWilaya.disabled = true;
    document.getElementById('timer').innerHTML = '00:00';
  }

  _showScoreModal() {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    modal.querySelector('.score__label').textContent = `Votre score final est ${
      this.#counter
    } / 58`;
  }

  _hideScoreModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

class App {
  #geoJsonLayer;
  #map;
  #quiz;
  constructor() {
    // load map
    this._loadMap();

    this._loadGeoJson().then(() => {
      startBtn.addEventListener('click', this._startQuiz.bind(this));
    });
    for (let i = 0; i < 58; i++) {
      wilaysList.insertAdjacentHTML(
        'beforeend',
        `<div class="wilaya">
        <span class="province__code">${i + 1}.</span>
      </div>`
      );
    }
    // Attach event handlers
  }

  async _loadGeoJson() {
    try {
      this._showLoadingSpinner(); // Show loading spinner

      const response = await fetch(
        `https://raw.githubusercontent.com/Yakine7/Wilayas-Algeria/64ea464cb3ac0819c6d16e1d5e374dcc0fc7ba30/geoData.geojson`
      );

      this._showLoadingSpinner();

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      const style = {
        color: '#2b9615',
        fillColor: '#fafaf8',
        weight: 1,
        zIndex: 500,
      };

      this.#geoJsonLayer = L.geoJSON(data, {
        style: style,
      }).addTo(this.#map);
      this._hideLoadingSpinner();
    } catch (error) {
      this._hideLoadingSpinner();
      console.error('Error fetching data:', error);
    }
  }

  _loadMap() {
    this.#map = L.map('map', { zoomDelta: 0.5, zoomSnap: 0.5 })
      .fitBounds([
        [37.06818, 7.203128],
        [19.117887, 3.236204],
        [27.962401, -8.598042],
        [23.517678, 11.925805],
      ])
      .setMaxBounds([
        [34.72259, 3.387151],
        [19.117887, 3.236204],
        [27.962401, -8.598042],
        [23.517678, 11.925805],
      ]);

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap contributors',
        minZoom: 4,
        maxZoom: 6,
      }
    ).addTo(this.#map);
  }

  _startQuiz() {
    this.#quiz = new Quiz(this.#geoJsonLayer);
    inputWilaya.addEventListener('keyup', e => {
      this.#quiz._checkProvince(this.#geoJsonLayer, e);
    });

    wilaysList.classList.toggle('hidden');
    provinceInput.classList.toggle('hidden');
    startBtn.disabled = true;
    startBtn.classList.toggle('d-none');
  }

  _showLoadingSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'flex';
  }

  _hideLoadingSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'none';
  }
}

const app = new App();
