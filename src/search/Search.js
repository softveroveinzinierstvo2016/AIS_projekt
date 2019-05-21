import React, {Component} from 'react';
import './Search.css';
import SimpleModal from './SimpleModal';
import Profile from './Profile';
import ProfilePreview from './ProfilePreview'
import Filter from "./Filter";
import {getRegistrationFormData} from "../util/APIUtils";
import {Button} from "antd";
import Input from "antd/es/input";
import TextField from '@material-ui/core/TextField';

const gridData = [
  {
    fullName: "Placebo 0",
    email: "placebo@placebo.com",
    youtube: "https://www.youtube.com/watch?v=0I647GU3Jsc",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Klasicka hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]

  },
  {
    fullName: "Nelly Furtado 1",
    email: "furtado@furtado.com",
    youtube: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing sufficient everything men him admiration unpleasing sex. Around really his use uneasy longer him man. His our pulled nature elinor talked now for excuse result. Admitted add peculiar get joy doubtful. ",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba", "Klasicka hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  },
  {
    fullName: "Placebo 2",
    email: "placebo@placebo.com",
    youtube: "https://www.youtube.com/watch?v=v3xwCkhmies",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]

  },
  {
    fullName: "Nelly Furtado 3",
    email: "furtado@furtado.com",
    youtube: "https://www.youtube.com/watch?v=ivbO3s1udic",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything. ",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Klasicka hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  },
  {
    fullName: "Placebo 4",
    email: "placebo@placebo.com",
    youtube: "https://www.youtube.com/watch?v=J_ub7Etch2U",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]

  },
  {
    fullName: "Nelly Furtado 5",
    email: "furtado@furtado.com",
    youtube: "https://www.youtube.com/watch?v=50VWOBi0VFs",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner better nearer silent excuse. She which are maids boy sense her shade. Considered reasonable we affronting on expression in. So cordial anxious mr delight. Shot his has must wish from sell nay. Remark fat set why are sudden depend change entire wanted. Performed remainder attending led fat residence far. ",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  },
  {
    fullName: "Placebo 6",
    email: "placebo@placebo.com",
    youtube: "https://www.youtube.com/watch?v=j2WWrupMBAE",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]

  },
  {
    fullName: "Nelly Furtado 7",
    email: "furtado@furtado.com",
    youtube: "https://www.youtube.com/watch?v=kvxCU_lQwKM",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  },
  {
    fullName: "Placebo 8",
    email: "placebo@placebo.com",
    youtube: "https://www.youtube.com/watch?v=1HG4lmvJLUw",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything. ",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "celovecerna produkcia sub",
          price: "250",
          desc: "Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. "
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "celovecerna produkcia sub", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. "
        }]
      },
    ]

  },
  {
    fullName: "Nelly Furtado 9",
    email: "furtado@furtado.com",
    youtube: "https://www.youtube.com/watch?v=dhZUsNJ-LQU",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen. Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others. Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by. ",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  },
  {
    fullName: "Placebo 10",
    email: "placebo@placebo.com",
    youtube: "https://www.youtube.com/watch?v=6GFvUCcljkM",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  },
  {
    fullName: "Nelly Furtado 11",
    email: "furtado@furtado.com",
    youtube: "https://www.youtube.com/watch?v=VEpMj-tqixs",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba", "Klasicka hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  },
  {
    fullName: "Placebo 12",
    email: "placebo@placebo.com",
    youtube: "https://www.youtube.com/watch?v=G-aOtSxQ1L8",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. "
        }]
      },
    ]

  },
  {
    fullName: "Nelly Furtado 13",
    email: "furtado@furtado.com",
    youtube: "",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "She suspicion dejection saw instantly. Well deny may real one told yet saw hard dear. Bed chief house rapid right the. Set noisy one state tears which. No girl oh part must fact high my he. Simplicity in excellence melancholy as remarkably discovered. Own partiality motionless was old excellence she inquietude contrasted. Sister giving so wicket cousin of an he rather marked. Of on game part body rich. Adapted mr savings venture it or comfort affixed friends. ",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. "
        }]
      },
    ]
  },
  {
    fullName: "Placebo 14",
    email: "placebo@placebo.com",
    youtube: "https://img.youtube.com/vi/x5GuBa4Bbnw/0.jpg",
    webPage: "www.google.com",
    isSolo: false,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]

  },
  {
    fullName: "Big Billy",
    email: "furtado@furtado.com",
    youtube: "https://www.youtube.com/watch?v=aae_67tlvrE",
    webPage: "www.google.com",
    isSolo: true,
    otherInfo: "My sme bla bla bla bla bla bla",
    performanceTypes: ["spevak", "herec", "tanecnik"],
    performanceStyles: ["Moderna hudba", "Ludova hudba"],
    categories: [
      {
        id: 1,
        name: "svadba",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 2,
        name: "celovecerna produkcia",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
      {
        id: 3,
        name: "koncerty",
        subcategories: [{name: "koncert", price: "250", desc: "70$/hodina"}, {
          name: "vystupenie",
          price: "250",
          desc: "70$/hodina"
        }]
      },
    ]
  }
]

function returnColor(input) {
  let result = 0;
    if (input > 11) {
       result = input % 12;
    } else result = input;
    const colors = ['#9575cd','#7986cb','#64b5f6','#4dd0e1','#4db6ac','#81c784','#aed581','#ffd54f','#ffb74d','#ff8a65','#e57373','#a1887f'];
    return colors[result];
}

function returnPastelColor(input) {
  let result = 0;
    if (input > 11) {
       result = input % 12;
    } else result = input;
    const colors = ['#d1c4e9','#c5cae9','#bbdefb','#b2ebf2','#b2dfdb','#c8e6c9','#dcedc8','#ffecb3','#ffe0b2','#ffccbc','#ffcdd2','#d7ccc8'];
    return colors[result];
}

class Search extends Component {
  constructor() {
    super();

    this.state = {
      posts: {},
      selectedIdx: 0,
      modalShow: false,
      filterShow: false,

      types: [],
      styles: [],
      categories: [],
      soloOptions: [
        {id: 1, name: "Sólista", value: false},
        {id: 2, name: "Skupina", value: false},
        {id: 3, name: "Nezáleží", value: true},
      ],
      price: {
        marks: {
          0: 0,
          100: 100,
        },
        min: 0,
        max: 100
      }
    };

    this.selectIdx = this.selectIdx.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.filterOpen = this.filterOpen.bind(this);
    this.filterClose = this.filterClose.bind(this);

    this.typeCheck = this.typeCheck.bind(this);
    this.styleCheck = this.styleCheck.bind(this);
    this.categoryCheck = this.categoryCheck.bind(this);
    this.subcategoryCheck = this.subcategoryCheck.bind(this);
    this.soloOptionsChanged = this.soloOptionsChanged.bind(this);
    this.priceChanged = this.priceChanged.bind(this);
  }


  render() {
    const styles = {
      full: {
        width: '100%',
      },

      half: {
        width: '50%',
      },
    }
    return <div>
    <div style={{paddingTop:'20px'}} className="header-container">
    <Input
    className="filter-input"
    type="text"
    placeholder="Zadaj meno performera"
    />
    <Button className="filter-button">
    Hľadaj
    </Button>
    <Button className="filter-button" onClick={this.filterOpen}>
    Rozšírené vyhľadávanie
    </Button>
    </div>

    <div className="container-1" id="app-card-list">

    {

      Object
      .keys(this.state.posts)
      .map(key => {
        return (
          <ProfilePreview key={key} index={key} details={this.state.posts[key]}
          seleIdx={this.selectIdx} modalOpen={this.modalOpen} color={returnColor(key)}/>)

        })
      }
      {this.state.modalShow &&
        <SimpleModal onCloseRequest={() => this.modalClose()} style={styles.half}>
        <Profile details={this.state.posts[this.state.selectedIdx]} color={returnPastelColor(this.state.selectedIdx)}/>
        </SimpleModal>}
        {this.state.filterShow &&
          <SimpleModal onCloseRequest={() => this.filterClose()} style={styles.half}>
          <Filter
          modalClose={this.filterClose}
          types={this.state.types}
          styles={this.state.styles}
          categories={this.state.categories}
          typeCheck={this.typeCheck}
          styleCheck={this.styleCheck}
          categoryCheck={this.categoryCheck}
          subcategoryCheck={this.subcategoryCheck}
          soloOptions={this.state.soloOptions}
          soloOptionsChanged={this.soloOptionsChanged}
          price={this.state.price}
          priceChanged={this.priceChanged}
          />
          </SimpleModal>
        }
        </div>


        </div>
      }

      componentWillMount() {
        this.loadFilterOptions();
        this.setState({
          posts: gridData
        });
      }

      selectIdx(idx) {
        this.setState({
          selectedIdx: idx,
        });

      }

      modalClose() {
        this.setState({modalShow: false})
      };

      modalOpen(idx) {
        this.setState({
          selectedIdx: idx,
          modalShow: true
        })
      };

      filterClose() {
        this.setState({filterShow: false})
      };

      filterOpen() {
        this.setState({
          filterShow: true
        })
      };

      typeCheck(index, newValue) {
        //copy the array first
        const updatedArray = [...this.state.types];
        updatedArray[index].val = !updatedArray[index].val;
        this.setState({
          types: updatedArray,
        });
      }

      styleCheck(index, newValue) {
        //copy the array first
        const updatedArray = [...this.state.styles];
        updatedArray[index].val = !updatedArray[index].val;
        this.setState({
          styles: updatedArray,
        });
      }

      categoryCheck(index, newValue) {
        //copy the array first
        const updatedArray = [...this.state.categories];
        updatedArray[index].val = !updatedArray[index].val;
        this.setState({
          categories: updatedArray,
        });
      }

      subcategoryCheck(index, index2, newValue) {
        const updatedArray = [...this.state.categories];
        updatedArray[index].subcategories[index2].val = !updatedArray[index].subcategories[index2].val;
        this.setState({
          categories: updatedArray,
        });
      }

      soloOptionsChanged(id) {
        const updatedArray = [...this.state.soloOptions];
        updatedArray.forEach(x => x.value = (x.id === id));
        this.setState({
          soloOptions: updatedArray,
        });
      }

      priceChanged(event) {
        const newPrice = this.state.price;
        newPrice.min = event[0];
        newPrice.max = event[1];
        this.setState({
          price: newPrice,
        });
      }

      loadFilterOptions() {
        let promise = getRegistrationFormData();

        if (!promise) {
          return;
        }

        promise
        .then(response => {
          var types = [];
          response.performerTypes.forEach((type) => types.push({
            "id": type.id,
            "name": type.typeName,
            "val": false
          }));

          var styles = [];
          response.performerStyles.forEach((style) => styles.push({
            "id": style.id,
            "name": style.styleName,
            "val": false
          }));

          var categories = [];
          response.performerCategories.forEach((cat) => {
            var sub = [];
            cat.subCategories.forEach((subcat) => sub.push({
              "id": subcat.id,
              "name": subcat.subCategoryName,
              "val": false,
            }))
            categories.push({"id": cat.id, "name": cat.categoryName, "val": false, "subcategories": sub})
          });

          this.setState({
            types: types,
            styles: styles,
            categories: categories,
            isLoading: false
          });
        }).catch(error => {
          console.log(error)
          this.setState({
            isLoading: false
          })
        });
        this.setState({
          isLoading: true
        });
      }

    }

    export default Search;
