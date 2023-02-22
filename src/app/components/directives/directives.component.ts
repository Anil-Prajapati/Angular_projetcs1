import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit{

  n:number=5;

  car:String[]=["Saab", "Volvo", "BMW","TATA","MAHINDRA"]

  fourit:String[]=['Apple','Mango','Banana','orange','PineApple'];

  countries:String[]=["Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad","Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador","Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji","Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana","Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos","Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali"
  ,"Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco"
  ,"Mongolia"
  ,"Montenegro"
  ,"Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo","Tonga",
  "Trinidad &amp; Tobago","Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)","Yemen",
  "Zambia","Zimbabwe"];

  selectControry:String='';

  selectState:String='';

  state=[
  {name:'India',val:"IND"},
  {name:'Uttar Pradesh',val:"UP"},
  {name:'Bihar',val:"BIH"},
  {name:'Hyderabd',val:"HYD"},
  {name:'Delhi',val:"DL"}
]
  Student=[
    {id:'101', name:'Anil Kumar Prajapati',salary:'25000',phoneNumber:'8081489506'},
    {id:'102', name:'Rahul Kumar Prajapati',salary:'26000',phoneNumber:'8081489506'},
    {id:'103', name:'Sujeet Kumar Prajapati',salary:'27000',phoneNumber:'8081489506'},
    {id:'104', name:'Sonu Kumar Prajapati',salary:'28000',phoneNumber:'8081489506'},
    {id:'105', name:'Arvind Kumar Prajapati',salary:'29000',phoneNumber:'8081489506'},
    {id:'106', name:'Vishal Kumar Prajapati',salary:'30000',phoneNumber:'8081489506'},
    {id:'107', name:'Abhishek Kumar Prajapati',salary:'31000',phoneNumber:'8081489506'},
    {id:'108', name:'Aditya Kumar Prajapati',salary:'32000',phoneNumber:'8081489506'},
    {id:'109', name:'Vikash Kumar Prajapati',salary:'33000',phoneNumber:'8081489506'},
    {id:'110', name:'Santosh Kumar Prajapati',salary:'34000',phoneNumber:'8081489506'},
    {id:'112', name:'Sanoj Kumar Prajapati',salary:'35000',phoneNumber:'8081489506'},
    {id:'113', name:'manoj Kumar Prajapati',salary:'36000',phoneNumber:'8081489506'},
    {id:'114', name:'Ashish Kumar Prajapati',salary:'37000',phoneNumber:'8081489506'},
    {id:'115', name:'Remesh Kumar Prajapati',salary:'38000',phoneNumber:'8081489506'},
   
]
Student1:any=[
  {id:'101', name:'Anil Kumar Prajapati',salary:'25000',phoneNumber:'8081489506'},
  {id:'102', name:'Rahul Kumar Prajapati',salary:'26000',phoneNumber:'8081489506'},
  {id:'103', name:'Sujeet Kumar Prajapati',salary:'27000',phoneNumber:'8081489506'},
  {id:'104', name:'Sonu Kumar Prajapati',salary:'28000',phoneNumber:'8081489506'},
  {id:'105', name:'Arvind Kumar Prajapati',salary:'29000',phoneNumber:'8081489506'},
  {id:'106', name:'Vishal Kumar Prajapati',salary:'30000',phoneNumber:'8081489506'},
  {id:'107', name:'Abhishek Kumar Prajapati',salary:'31000',phoneNumber:'8081489506'},
  {id:'108', name:'Aditya Kumar Prajapati',salary:'32000',phoneNumber:'8081489506'},
  {id:'109', name:'Vikash Kumar Prajapati',salary:'33000',phoneNumber:'8081489506'},
  {id:'110', name:'Santosh Kumar Prajapati',salary:'34000',phoneNumber:'8081489506'},
  {id:'112', name:'Sanoj Kumar Prajapati',salary:'35000',phoneNumber:'8081489506'},
  {id:'113', name:'manoj Kumar Prajapati',salary:'36000',phoneNumber:'8081489506'},
  {id:'114', name:'Ashish Kumar Prajapati',salary:'37000',phoneNumber:'8081489506'},
  {id:'115', name:'Remesh Kumar Prajapati',salary:'38000',phoneNumber:'8081489506'},
 
]

num=new Date().getDay();

flage:boolean=false

  ngOnInit(): void {
      
  }
}